import React from "react";
import Image from "next/image";
import User from "@/app/assets/dog.png";
const RightTop = () => {
  return (
    <>
      <div>
        <div>
          <div className="">
            <Image
              width={36}
              height={36}
              src={User}
              alt=""
              className="rounded-full"
            />
          </div>
          <div></div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default RightTop;
