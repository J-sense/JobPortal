import React from "react";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  return (
    <div>
      <div className="border border-purple-300 rounded p-4 space-y-2">
        <img src={job.logo} alt="" />
        <h1 className="text-2xl font-bold text-zinc-700">{job.job_title}</h1>
        <h3 className="text-sm text-slate-500">{job.company_name}</h3>
        <div className="flex gap-3">
          <button className="btn btn-outline px-8 py-0 text-blue-700">{job.remote_or_onsite}</button>
          <button className="btn btn-outline text-blue-700">{job.job_type}</button>
        </div>
        <div className="flex gap-4">
          <p className="text-sm text-slate-500">{job.location}</p>
          <p className="text-sm text-slate-500">{job.salary}</p>
        </div>
        <button className="bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-400 hover:to-blue-500 text-white font-bold py-2 px-4 rounded">
           <Link to={`/jobs/${job.id}`}>View Details</Link>
        </button>
      </div>
    </div>
  );
};

export default Job;
