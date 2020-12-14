import React from "react";

const Price = ({ game, originalPriceClasses = "text-muted strike", discountedPriceClasses }) => {
  if (game.price === 0) {
    return <span>Free!!!</span>;
  } else if (game.discount > 0)
    return (
      <>
        <span className={"mr-2 " + originalPriceClasses}>${game.price}</span>
        <span className={discountedPriceClasses}>
          ${(game.price * (1 - game.discount)).toFixed(2)}
        </span>
      </>
    );
  else {
    return (
      <>
        <span className={discountedPriceClasses}>${game.price}</span>
      </>
    );
  }
};

export default Price;
