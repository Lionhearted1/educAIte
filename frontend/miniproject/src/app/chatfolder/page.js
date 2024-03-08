"use client";
import NavSelectComponent from "../dashboard/components/NavSelectComponent";
import Folder from "./components/folder";
import Link from "next/link";


function ChatFolder() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between p-4">
        <div>
          <Link href="/dashboard">
          <button className="bg-purple-600 hover:bg-purple-400 shadow-[8px_8px_0px_rgba(0,0,0,1)] border-2 border-black text-black font-bold py-2 px-4 rounded-lg focus:outline-none hover:shadow-none hover:translate-x-1 hover:translate-y-1 duration-150">
            Back
          </button>
          </Link>
        </div>
        <div>
          <NavSelectComponent items={["Home", "Chat", "Logout"]} />
        </div>
      </div>
      <div className="flex justify-center ">
        <Folder />
      </div>
    </div>
  );
}

export default ChatFolder;
