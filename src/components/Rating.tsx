const Rating = ({ rating }: { rating: number }) => {
  const full_Stars = Math.floor(rating);
  const half_Star = rating % 1 >= 0.5;
  const empty_Stars = 5 - full_Stars - (half_Star ? 1 : 0);

  return (
    <>
      <div>
        {[...Array(full_Stars)].map((_, i) => (
          <span key={`full-${i}`} className="text-color1 text-lg">
            ★
          </span>
        ))}

        {half_Star && (
          <span className="text-black text-lg">
            <span className="relative inline-block">
              ★
              <span className="absolute inset-0 text-color1 overflow-hidden w-1/2">
                ★
              </span>
            </span>
          </span>
        )}

        {[...Array(empty_Stars)].map((_, i) => (
          <span key={`empty-${i}`} className="text-black text-lg">
            ★
          </span>
        ))}
      </div>
    </>
  );
};

export default Rating;
