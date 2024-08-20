import React, { useState } from "react";
import Job from "./Job";

const Featured = ({jobs}) => {
    const [datalength,setDatalength] = useState(4)
    
  return (
    <div className="my-9">
      <p className="text-4xl font-bold text-center text-black">
        Job Category List
      </p>
      <p className="text-sm text-slate-400 text-center mb-9 mt-4">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid md:grid-cols-2 gap-8 md:px-9">
        {
            jobs.slice(0, datalength).map((job,idx)=> <Job job={job} key={idx}></Job>)
        }
        
        
      </div>

      <div className={ datalength === jobs.length && "hidden"}>
        <div className="text-center mt-3">
        <button onClick={()=>setDatalength(jobs.length)} className="inline-flex px-6 py-3 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md">
          Load More
        </button>
        </div>
        
       
      </div>
    </div>
  );
};

export default Featured;
