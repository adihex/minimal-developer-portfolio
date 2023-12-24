import React from "react";

function PortfolioItem({ title, imgUrl, stack, link }) {
  return (
    <div className="overflow-hidden rounded-md border-2 border-stone-900">
      <img
        src={imgUrl}
        alt="portfolio"
        className="h-36 w-full cursor-pointer object-cover md:h-48"
      />
      <div className="w-full p-4">
        <h3 className="mb-2 text-lg font-semibold md:mb-3 md:text-xl">
          {title}
        </h3>
        <p className="flex flex-row flex-wrap items-center justify-start gap-2 text-xs md:text-sm">
          {stack.map((item) => (
            <span className="rounden-md inline-block border-2 border-stone-900 px-2 py-1 font-semibold">
              {item}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}

export default PortfolioItem;
