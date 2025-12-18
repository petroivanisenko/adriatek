import {
  S3Client,
  PutObjectCommand,
  CreateBucketCommand,
  HeadBucketCommand,
  PutBucketPolicyCommand,
} from "@aws-sdk/client-s3";

const s3Client = new S3Client({
  region: "auto",
  endpoint: process.env.AWS_ENDPOINT,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "minioadmin",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "minioadmin",
  },
});

const BUCKET_NAME = process.env.AWS_BUCKET_NAME || "zoltan";

async function ensureBucketExists() {
  try {
    await s3Client.send(new HeadBucketCommand({ Bucket: BUCKET_NAME }));
  } catch (error) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (
      (error as any).name === "NotFound" ||
      (error as any).$metadata?.httpStatusCode === 404
    ) {
      try {
        await s3Client.send(new CreateBucketCommand({ Bucket: BUCKET_NAME }));
        console.log(`Bucket ${BUCKET_NAME} created successfully`);
      } catch (createError) {
        console.error(`Failed to create bucket ${BUCKET_NAME}:`, createError);
        throw createError;
      }
    } else {
      throw error;
    }
  }

  const policy = {
    Version: "2012-10-17",
    Statement: [
      {
        Sid: "PublicRead",
        Effect: "Allow",
        Principal: "*",
        Action: ["s3:GetObject"],
        Resource: [`arn:aws:s3:::${BUCKET_NAME}/*`],
      },
    ],
  };

  try {
    await s3Client.send(
      new PutBucketPolicyCommand({
        Bucket: BUCKET_NAME,
        Policy: JSON.stringify(policy),
      }),
    );
  } catch (error) {
    console.warn("Failed to set bucket policy:", error);
  }
}

export async function uploadToS3(
  file: Buffer,
  fileName: string,
  contentType: string,
): Promise<string> {
  await ensureBucketExists();

  const command = new PutObjectCommand({
    Bucket: BUCKET_NAME,
    Key: fileName,
    Body: file,
    ContentType: contentType,
  });

  await s3Client.send(command);

  // Return only the object key so DB doesn't depend on endpoint/bucket.
  return fileName;
}
