import React from "react";
import user from "@/app/assets/dog.png";
import Image from "next/image";
import { Bell } from "lucide-react";
import { MoreHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Grip } from "lucide-react";

const LeftHero = () => {
  return (
    <div className="h-32">
      <div className="flex justify-between bg-status_bg text-status_text_color">
        <div className="me pl-7 flex gap-4 h-20 justify-center align-center">
          <div>
            <Image
              src={user}
              alt="image here"
              width={36}
              height={36}
              className="rounded-full mt-5"
            />
          </div>
          <div className="mt-4">
            <div>
              <h5 className="text-sm">
                John Doe <span className="text-sm">$0.00</span>
              </h5>
            </div>
            <div>
              <p className="pt-0">set a staus</p>
            </div>
          </div>
        </div>
        <div className="icons pr-5 flex mt-6 gap-4">
          <div>
            <Bell />
          </div>
          <div>
            {" "}
            <MoreHorizontal />
          </div>
        </div>
      </div>
      {/* search */}
      <div className="flex bg-status_bg gap-3 ml-5 align-center">
        <div className="w-5/6">
          <Input
            type="email"
            placeholder="People, groups, messages, web"
            className="bg-black w-full h-8"
          />
        </div>
        <div className="flex justify-center align-center mr-1 bg-black text-gray-200 w-8">
          {" "}
          <Grip />
        </div>
      </div>
    </div>
  );
};

export default LeftHero;
