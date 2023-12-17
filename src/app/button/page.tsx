"use client";
import React from "react";
import { useState } from "react";

const StateDemo = () => {
  const [step, setstep] = useState(0);
  const message: string[] = [
    "React Introduction",
    "Describing UI",
    "Managing State",
  ];

  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!isOpen);

  return (
    <div>
        <button onClick={toggleMenu} className="bg-red-500 px-3 py-3 rounded-md text-white text-2xl">Show Div</button>
      <div className="bg-gray-200 w-1/2 h-80 ml-60 mt-10 rounded-md">
        <div className="flex justify-between pt-5 mx-10">
          <div
            className={`${
              step >= 1 ? "bg-purple-400" : "bg-gray-300"
            }   border rounded-full  w-8 h-8 pt-1 text-center`}
          >
            1
          </div>
          <div
            className={`${
              step >= 2 ? "bg-purple-400" : "bg-gray-300"
            }   border rounded-full  w-8 h-8 pt-1 text-center`}
          >
            2
          </div>
          <div
            className={`${
              step >= 3 ? "bg-purple-400" : "bg-gray-300"
            }   border rounded-full  w-8 h-8 pt-1 text-center`}
          >
            3
          </div>
        </div>
        <p className="text-center mt-20">{message[step - 1]}</p>
        <div className="flex justify-between mx-10 mt-20">
          <button
            className="bg-purple-400 rounded-md p-2"
            onClick={() => (step > 1 ? setstep(step - 1) : "")}
          >
            Previous
          </button>
          <button
            className="bg-purple-400 rounded-md p-2"
            onClick={() => (step < 3 ? setstep(step + 1) : "")}
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
};

export default StateDemo;