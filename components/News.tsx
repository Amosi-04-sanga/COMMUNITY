import { hero } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";


const News = () => {
  return (
    <div className="mt-14 text-center">
      <h2 className="font-bold inline-block half-underline">ONTREANDING</h2>
      <p className="mt-4">
        Be informed about upcoming and ontreanding events Level-up your team by
        having expert-led Nest trainings or workshops. Get everyone up-to-speed
        quickly.
      </p>
      <div className="flex flex-col mt-4">
        <Image
          src={hero}
          alt="news"
          className="w-full h-[40vh] rounded-t-md"
        />
        <div className="flex flex-col bg-white shadow-lg shadow-primary-500 rounded-b-md">
          <h2 className="mt-4">Overview</h2>
          <div className="flex flex-col text-left p-2">
            <p>Date: To be held on 2, november 2023</p>
            <p>Title: new technoloy to be released from facebook</p>
          </div>
          <Button className="bg-gradient-to-br from-green-600 to-blue-300 rounded-md block mx-auto mt-2 mb-4 text-black">
            <Link href="#">Read More</Link>
          </Button>
          

        </div>
      </div>
    </div>
  );
};

export default News;
