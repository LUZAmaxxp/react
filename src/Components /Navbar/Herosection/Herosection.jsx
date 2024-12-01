import React from "react";
import { Link } from "react-router-dom";

function Herosection() {
  return (
    <div className="min-h-screen flex flex-row items-center justify-center">
      <div className="text-center   bg-opacity-70 p-10 rounded-lg">
        <h1 className="text-balance text-5xl font-semibold tracking-tight text-slate-200 sm:text-7xl">
          Online Gaming Shop
        </h1>
        <p className="mt-8 text-pretty text-lg font-medium  text-slate-300 sm:text-xl/8">
          Easy, Fast, and Reliable Services for our fellow Gamers
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/Teams"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Get started
          </Link>
          <a
            href="./AboutUs"
            className="text-sm font-semibold leading-6 text-slate-200"
          >
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
