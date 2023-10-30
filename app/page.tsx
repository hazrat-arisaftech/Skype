import Image from "next/image";
import LeftHero from "./components/leftHero/LeftHero";
import CallElem from "./components/callElem/CallElem";
import ChatCart from "./components/chatCard/ChatCart";

export default function Home() {
  return (
    <>
      <div className="flex w-full h-full bg-black overflow-hidden fixed">
        <div className="left flex flex-col w-1/4 overflow-y-scroll no-scrollbar bg-status_bg">
          <div className="">
            <LeftHero />
            <CallElem />
          </div>
          <div className="">
            <ChatCart />
            <ChatCart />
            <ChatCart />
            <ChatCart />
            <ChatCart />
            <ChatCart />
            <ChatCart />
            <ChatCart />
            <ChatCart />
            <ChatCart />
            <ChatCart />
            <ChatCart />
            <ChatCart />
            <ChatCart />
            <ChatCart />
            <ChatCart />
            <ChatCart />
            <ChatCart />
            <ChatCart />
            <ChatCart />
            <ChatCart />
            <ChatCart />
          </div>
        </div>
        <div className="right w-3/4 flex-8 bg-red-400 overflow-y-hidden relative">
          Right
        </div>
      </div>
    </>
  );
}
