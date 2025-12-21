import { StarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface RatingProps {
  rating: number;
  maxRating?: number;
  size?: number;
  className?: string;
  starClassName?: string;
}

export default function Rating({
  rating,
  maxRating = 5,
  size = 16,
  className,
  starClassName,
}: RatingProps) {
  return (
    <div className={cn("flex items-center", className)}>
      {[...Array(maxRating)].map((_, i) => (
        <StarIcon
          key={i}
          size={size}
          className={cn(
            i < Math.floor(rating)
              ? "fill-yellow-500 text-yellow-500"
              : "fill-none text-muted-foreground",
            starClassName,
          )}
        />
      ))}
    </div>
  );
}
