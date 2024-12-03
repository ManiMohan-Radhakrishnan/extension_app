import React from "react";
import ReferImage from "../../assets/refer-image.png";
import ReferText from "../../assets/refer-text.png";
import { Button, Image, Progress } from "@nextui-org/react";

const ReferToReward = () => {
  return (
    <>
      <div
        className="rounded-lg overflow-hidden flex flex-col justify-between gap-16 p-4 w-full md:w-[48.5%] lg:w-[48.75%] xxl:w-full xxl:max-h-[11rem] xxl:h-full"
        style={{
          backgroundImage: `url(${ReferImage.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Image
          src={ReferText.src}
          alt="ReferImage"
          className="w-full h-auto rounded-lg max-w-44 mx-auto"
          classNames={{
            wrapper: "!max-w-full",
          }}
        />
        <button className="text-base leading-6 text-white bg-[#000000] py-2 px-3 rounded-lg border border-white shadow-cus-1">
          Refer a Friend
        </button>
      </div>
    </>
  );
};

export default ReferToReward;
