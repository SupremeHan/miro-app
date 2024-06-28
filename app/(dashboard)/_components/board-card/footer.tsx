import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

interface FooterProps {
  title: string;
  authorLabel: string;
  createdAt: string;
  isFavorite: boolean;
  onClick: () => void;
  disabled: boolean;
}

export const Footer = ({
  title,
  authorLabel,
  createdAt,
  isFavorite,
  onClick,
  disabled,
}: FooterProps) => {
  return (
    <div className="relative bg-white p-3">
      <p className="text-[13px] truncate max-w-[calc(100%-20px)]">{title}</p>
      <p className="opacity-0 group-hover:opacity-100 text-muted-foreground truncate">
        {authorLabel}, {createdAt}
      </p>
      <button
        disabled={disabled}
        onClick={onClick}
        className={cn(
          "opacity-0 group-hover:opacity-100 absolute top-3 right-3 text-muted-foreground hover:text-blue-600",
          disabled && "cursor-not-allowed opacity-75",
        )}
      >
        <Star className={cn("w-4 h-4", isFavorite && "fill-blue-600 text-blue-600")} />
      </button>
    </div>
  );
};
