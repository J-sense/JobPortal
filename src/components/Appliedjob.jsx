import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getstorejob } from "./Locastorage";

const Appliedjob = () => {
  const [filterjob, setFilterjob] = useState([]);
  const [displayjob, setDisplayjob] = useState([]);
  const appliedjob = useLoaderData();
  const handlefilter = (filter) => {
    if (filter === "all") {
      setDisplayjob(filterjob);
    } else if (filter === "remote") {
      const remotejob = filterjob.filter(
        (fl) => fl.remote_or_onsite === "Remote"
      );
      setDisplayjob(remotejob);
    } else if (filter === "onsite") {
      const onsitejob = filterjob.filter(
        (fl) => fl.remote_or_onsite === "Onsite"
      );
      setDisplayjob(onsitejob);
    }
  };
  useEffect(() => {
    const storejob = getstorejob();
    console.log(storejob);
    if (storejob.length > 0) {
      // const filterjob = appliedjob.filter(job => job.id ==storejob)
      // console.log(filterjob)
      const allappliedjob = [];
      for (const id of storejob) {
        const findejob = appliedjob.find((findjb) => findjb.id == id);
        if (findejob) {
          allappliedjob.push(findejob);
          setFilterjob(allappliedjob);
          setDisplayjob(allappliedjob);
        }
      }
    }
  }, [appliedjob]);
  return (
    <div className="space-y-5">
      <div className="dropdown dropdown-bottom ">
        <div tabIndex={0} role="button" className="btn m-1">
          Filter
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li onClick={() => handlefilter("all")}>
            <a>All</a>
          </li>
          <li onClick={() => handlefilter("remote")}>
            <a>Remote</a>
          </li>
          <li onClick={() => handlefilter("onsite")}>
            <a>Onsite</a>
          </li>
        </ul>
      </div>
      {displayjob.map((job) => (
        <div key={job.id}>
          <div className="card lg:card-side w-[70%] bg-base-100 shadow border px-4">
            <figure>
              <img
                src={job.logo}
                alt="Album"
                className="w-full h-auto max-w-full "
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{job.job_title}</h2>
              <p>{job.company_name}</p>
              <div className="flex gap-3">
                <button className="btn btn-outline px-8 py-0 text-blue-700">
                  {job.remote_or_onsite}
                </button>
                <button className="btn btn-outline text-blue-700">
                  {job.job_type}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Appliedjob;
