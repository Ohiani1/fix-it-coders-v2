"use client";

import { FaLocationArrow } from "react-icons/fa6";
import React, { useState } from "react";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <section id="projects" className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10 mb">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] pb-6 mb-6"
            key={item.id}
          >
            <PinContainer>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh]">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 my-5">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className=" flex items-center justify-center mt-7 mb-3">
                <button
                  className="flex justify-center items-center rounded-md border-[0.5px] border-transparent hover:border-white/40 transition-all duration-500 cursor-pointer p-3"
                  onClick={() => handleClick(item.link)}
                >
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple px-2">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="mr-2" color="#CBACF9" />
                </button>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
