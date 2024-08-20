import React from "react";
import heroImg from "../assets/images/user.png";
import Category from "./Category";
import { useLoaderData } from "react-router-dom";
import Featured from "./Featured";
const Statics = () => {
  const jobs = useLoaderData();
  console.log(jobs);
  return (
    <div>
      <div className="md:flex justify-between gap-4 md:mt-15 ">
        <div className="order-2 md:order-1 w-full lg:w-1/2 space-y-5">
          <h1 className=" text-5xl md:text-6xl wfont font-bold tracking-normal leading-[70px] md:mt-24 mt-10">
            One Step Closer To Your
            <br />
            <span className="text-blue-600text-4xl font-bold bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
              {" "}
              Dream Job
            </span>
          </h1>
          <p className="text-sm leading-5 text-slate-500">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your <br />
            job application from start to finish.
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-400 hover:to-blue-500 text-white font-bold py-2 px-4 rounded">
            Start Apply
          </button>
        </div>
        <div className="order-1 lg:order-2 w-full lg:w-1/2">
          <img
            className="w-full h-auto object-cover"
            src={heroImg}
            alt="Hero"
          />
        </div>
      </div>
      <Category></Category>
      <Featured jobs={jobs}></Featured>
    </div>
  );
};

export default Statics;
