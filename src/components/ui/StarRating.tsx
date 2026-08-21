type StarRatingProps = {
  rating: number;
  reviewCount?: number;
};

export function StarRating({ rating, reviewCount }: StarRatingProps) {
  return (
    <span className="inline-flex items-baseline gap-1 text-sm">
      <span aria-hidden="true" className="text-accent">
        ★
      </span>
      <span className="font-medium">{rating.toFixed(1)}</span>
      {reviewCount !== undefined && (
        <span className="text-muted">({reviewCount})</span>
      )}
      <span className="sr-only">
        {rating.toFixed(1)} out of 5
        {reviewCount !== undefined ? `, from ${reviewCount} reviews` : ""}
      </span>
    </span>
  );
}
