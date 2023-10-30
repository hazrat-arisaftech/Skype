import React from "react";
import { MessageCircle } from "lucide-react";
import { Video } from "lucide-react";
import { UserSquare2 } from "lucide-react";
import { Twitch } from "lucide-react";
import DropDown from "../dropDown/DropDown";

const CallElem = () => {
  return (
    <>
      <div className="h-28 bg-[#141414]">
        <div className="flex justify-around text-gray-200 pt-2">
          <div>
            {" "}
            <div className="flex flex-col justify-center align-center">
              <div className="flex justify-center">
                <MessageCircle />
              </div>
              <p className="text-sm">Chats</p>
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <Video />
            </div>
            <p className="text-sm">Calls</p>{" "}
          </div>
          <div>
            <div className="flex justify-center">
              <UserSquare2 />
            </div>
            <p className="text-sm">Contacts</p>{" "}
          </div>
          <div>
            <div className="flex justify-center">
              <Twitch />
            </div>
            <p className="text-sm">Today</p>{" "}
          </div>
        </div>
        <div className="flex justify-around">
          <div className="">
            <DropDown
              items={["Host a meeting", "Join a meeting"]}
              head={"Meet Now"}
            />
          </div>
          <div>
            <DropDown
              items={[
                "New group chat",
                "New mooderated group",
                "New chat",
                "new private conversation",
              ]}
              head={"New Chat"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CallElem;
