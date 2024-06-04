import { FaStar } from "react-icons/fa";

interface StarRatingComponentProps {
  rating: number;
  maxRating?: number;
}

export function StartRating({
  rating,
  maxRating = 5,
}: StarRatingComponentProps) {
  return (
    <div className="w-full flex justify-center items-center gap-2 text-sm md:text-xl">
      {Array.from({ length: maxRating }, (_, index) => (
        <FaStar key={index} color={index < rating ? "gold" : "lightgray"} />
      ))}
    </div>
  );
}
