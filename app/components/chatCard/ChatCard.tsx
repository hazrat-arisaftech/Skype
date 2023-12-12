import React from "react";
import user from "@/app/assets/dog.png";
import Image from "next/image";

const ChatCard = () => {
  return (
    <>
      <div>
        <div className="bg-[#141414]  flex align-center justify-start">
          <div className="pl-3 flex justify-center">
            <Image
              src={user}
              alt="image here"
              width={36}
              height={36}
              className="rounded-full mt-4 mb-3"
            />
          </div>
          <div className="text-white ml-3 mt-3">
            <div>
              <div>
                <p>John Doe</p>
              </div>
              <div className="text-[10px]">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatCard;
