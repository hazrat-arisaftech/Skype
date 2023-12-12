import Image from "next/image";
import LeftHero from "./components/leftHero/LeftHero";
import CallElem from "./components/callElem/CallElem";
import ChatCard from "./components/chatCard/ChatCard";
// import dogImg from "@/app/assets/dog.png";
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
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
          </div>
        </div>
        {/* <div className="right w-3/4 flex-8 overflow-y-hidden relative">
          <div className="w-2/3 h-full m-auto bg-black">
            <div className="top mt-[150px]">
              <div className="left">
                <div className="flex justify-between text-white">
                  <div>
                    <div>
                      <Image
                        className="rounded-full"
                        src={dogImg}
                        height={100}
                        width={100}
                        alt="user image"
                      ></Image>
                      <div>big text </div>
                    </div>
                  </div>
                  <div className="relative">
                    {" "}
                    <div className="absolute bottom-0  right-0 ">
                      <div className="border-solid border-white h-3">
                        {" "}
                        <p>Share profile</p>
                        share profile
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right"> <div>Share profile</div></div>
            </div>
            <div className="bottom">
              <div className="cards">
                <div className="left-card"></div>
                <div className="right-card"></div>
              </div>
              <div className="footer"></div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
