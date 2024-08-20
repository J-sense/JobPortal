import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import bg from "../assets/images/bg1.png";

import { ToastContainer, toast } from "react-toastify";
import { storejobApplication } from "./Locastorage";

const JonDetails = () => {
  const singlejob = useLoaderData();
  const { id } = useParams();
  const findJob = singlejob.find((s) => s.id == id);
  
  const handletoastyfy = () => {
    storejobApplication(id)
    toast("🦄 Applied successfully");
  };
  return (
    <div className="mt-10 relative">
      <img src={bg} alt="" />
      <div className="text-center flex justify-center">
        <p className="absolute font-bold  text-3xl top-28">Job Details</p>
      </div>
      <div className="md:w-[90%] mx-auto md:flex gap-5">
        <div className="md:w-2/3 space-y-7 ">
          <div>
            <h4 className="text-sm leading-6 text-slate-500">
              <span className="text-base font-bold text-slate-950">
                Job Description:
              </span>
              {findJob.job_description}
            </h4>
          </div>
          <div>
            <h4 className="text-sm leading-6 text-slate-500">
              <span className="text-base font-bold text-slate-950">
                Job Responsibility:
              </span>
              {findJob.job_responsibility}
            </h4>
          </div>
          <div>
            <h4 className="text-sm leading-6 text-slate-500">
              <span className="text-base font-bold text-slate-950">
                Educational Requirements:
              </span>
              {findJob.educational_requirements}
            </h4>
          </div>
          <div>
            <h4 className="text-sm leading-6 text-slate-500">
              <span className="text-base font-bold text-slate-950">
                Experience:
              </span>
              {findJob.experiences}
            </h4>
          </div>
        </div>
        <div className="md:w-1/3 bg-[#F4F2ff] p-5">
          <div>
            <p className="text-lg font-bold">Job Details</p>
            <hr className="mt-3 text-black" />
            <div className="">
              <p className="text-slate-500 text-sm">
                <span className="text-sm font-bold text-slate-600">
                  Salary:
                </span>{" "}
                {findJob.salary}
              </p>
            </div>
            <div className="mt-2">
              <p className="text-slate-500 text-sm">
                <span className="text-sm font-bold text-slate-600">
                  Job Tittle:
                </span>{" "}
                {findJob.job_title}
              </p>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-lg font-bold">Contact Information</p>
            <hr className="mt-3 text-black" />
            <div className="mt-3">
              <p className="text-slate-500 text-sm">
                <span className="text-sm font-bold text-slate-600">
                  Salary:
                </span>{" "}
                {findJob.contact_information.phone}
              </p>
            </div>
            <div
              className="mt-2
            "
            >
              <p className="text-slate-500 text-sm">
                <span className="text-sm font-bold text-slate-600">
                  Job Tittle:
                </span>{" "}
                {findJob.contact_information.email}
              </p>
              <p className="text-slate-500 text-sm mt-2">
                <span className="text-sm font-bold text-slate-600">
                  Job Tittle:
                </span>{" "}
                {findJob.contact_information.address}
              </p>
            </div>
          </div>
          <button
            onClick={handletoastyfy}
            className="bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-400 hover:to-blue-500 text-white font-bold py-2 px-4 rounded w-full mt-3"
          >
            Apply Now
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default JonDetails;
