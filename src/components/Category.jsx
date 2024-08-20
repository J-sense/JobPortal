import React, { useEffect, useState } from "react";
import icons1 from "../assets/icons/accounts.png";
import icon2 from "../assets/icons/calendar.png";
import icons3 from "../assets/icons/Location.png";
import icons4 from "../assets/icons/marketing.png";

const Category = () => {
  const is = [
    {
      img: icons1,
    },
    {
      img: icon2,
    },
    {
      img: icons3,
    },
    {
      img: icons4,
    },
  ];
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);
  return (
    <div className="mt-16">
        <p className="text-4xl font-bold text-center text-black">Job Category List</p>
        <p className="text-sm text-slate-400 text-center mb-9 mt-4">Explore thousands of job opportunities with all the information you need. Its your future</p>
      <div className="md:flex gap-4 md:w-[90%] mx-auto px-6 md:px-0 justify-center">
        {category.map((item) => (
          <div
            key={item.id}
            className="category-item border border-purple-200 p-5 md:px-7 rounded bg-slate-200 mt-2"
          >
            <img src={icons4} alt="category" className="text-purple-800" />
            <h3 className="font-bold text-sm mt-2">{item.category_name}</h3>
            <h3 className="text-[10px] text-slate-400">{item.availability}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
