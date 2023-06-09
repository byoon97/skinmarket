import React from "react";
import MakeCarousel from "./ContentComps/MakeCarousel";
import items from "../../../public/make/Cars";

function Content() {
  return (
    <div className="flex flex-col items-center justify-center text-black p-3 md:px-15 lg:px-40">
      <h3 className="flex justify-center font-bold pt-8 text-center">
        Explore the world&apos;s largest car sharing marketplace
      </h3>
      <MakeCarousel items={items} />
    </div>
  );
}

export default Content;
