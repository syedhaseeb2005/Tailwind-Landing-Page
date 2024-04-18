import React from "react";
import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../DummyData";

const Pricing = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl my-8 tracking-wider text-center">
        Pricing
      </h2>
      <div className="flex flex-wrap">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl">
              <p className="text-4xl mb-8">
                {option.title}
                {option.title === "Pro" && (
                  <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text text-xl mb-4 ml-2">
                    (Most Popular)
                  </span>
                )}
              </p>
              <p className="mb-8">
                <span className="text-5xl mt-6 mr-2">{option.price}</span>
                <span className="text-neutral-400 tracking-tight">/Month</span>
              </p>
              <ul>
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-8 flex items-center mb-4">
                    <CheckCircle2 className="w-6 h-6 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#" className="border text-center justify-center items-center flex w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-900 duration-700 ease-in-out border-orange-900 rounded-lg transition">Subscribe</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
