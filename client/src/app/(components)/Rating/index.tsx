import { Star } from "lucide-react";

interface Props {
  rating: number;
}

export const Rating = ({ rating }: Props) => {
  return [1, 2, 3, 4, 5].map((index) => (
    <Star key={index} color={index <= rating ? "#FFC107" : "#E4E5E9"} className="w-4 h-4"/>
  ));
};
