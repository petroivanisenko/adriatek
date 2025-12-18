import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, ArrowRightIcon, FrownIcon } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center min-h-screen text-center">
      <FrownIcon size={96}/>
      <h2 className="text-5xl font-bold mb-4">
         Page Not Found
      </h2>
      <p className="text-muted-foreground mb-8 max-w-md">
        Unable to find the requested page.
      </p>
      <div className="flex gap-4">
        <Button asChild size={"lg"}>
          <Link href="/">
            <ArrowLeftIcon /> Home
          </Link>
        </Button>
        <Button variant="outline" size={"lg"} asChild>
          <Link href="/catalogue">
            Catalogue <ArrowRightIcon />
          </Link>
        </Button>
      </div>
    </div>
  );
}
