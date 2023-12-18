import Image from "next/image";
import React from "react";

type HeroesProps = {};

const Heroes = ({}: HeroesProps) => (
  <div className="flex flex-col dark:bg-[#1f1f1f] items-center justify-center">
    <div className="flex items-center">
      <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]">
        <Image
          src="/documents.png"
          fill
          className="object-contain dark:hidden"
          alt="document"
        />
        <Image
          src="/documents-dark.png"
          fill
          className="object-contain dark:block hidden"
          alt="document"
        />
      </div>
      <div className="relative w-[400px] h-[400px] hidden sm:block">
        <Image
          src="/reading.png"
          fill
          className="object-contain dark:hidden"
          alt="reading"
        />
        <Image
          src="/reading-dark.png"
          fill
          className="object-contain dark:block hidden"
          alt="reading"
        />
      </div>
    </div>
  </div>
);
export default Heroes;
