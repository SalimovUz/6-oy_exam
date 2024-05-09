import React, { useEffect, useState } from "react";
import axios from "axios";

const Foods = () => {
  const [data, setData] = useState([]);

  const Product = async () => {
    try {
      const res = await axios.get(
        "https://662c92670547cdcde9de970f.mockapi.io/Product"
      );

      if(res.status !== 200) throw new Error("Something went wrong!");
      setData(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    Product();
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <div className="fixed w-3/5 ml-28 mt-28 z-10 bg-[#252836]">
        <div className="navbar   w-full">
          <ul className="flex gap-[4%] mb-2">
            <li>
              <a
                className="text-base font-normal font-[barlow] hover:text-[#EA7C69] hover:border-b-[4px] pr-4 pb-2 border-solid hover:border-[#EA7C69] transition-all duration-600"
                href="#"
              >
                Hot dishes
              </a>
            </li>
            <li>
              <a
                className="text-base font-normal font-[barlow] hover:text-[#EA7C69] hover:border-b-[4px] px-4 pb-2 border-solid hover:border-[#EA7C69] transition-all duration-600"
                href="#"
              >
                Cold dishes
              </a>
            </li>
            <li>
              <a
                className="text-base font-normal font-[barlow] hover:text-[#EA7C69] hover:border-b-[4px] px-4 pb-2 border-solid hover:border-[#EA7C69] transition-all duration-600"
                href="#"
              >
                Soup
              </a>
            </li>
            <li>
              <a
                className="text-base font-normal font-[barlow] hover:text-[#EA7C69] hover:border-b-[4px] px-4 pb-2 border-solid hover:border-[#EA7C69] transition-all duration-600"
                href="#"
              >
                Grill
              </a>
            </li>
            <li>
              <a
                className="text-base font-normal font-[barlow] hover:text-[#EA7C69] hover:border-b-[4px] px-4 pb-2 border-solid hover:border-[#EA7C69] transition-all duration-600"
                href="#"
              >
                Appetizer
              </a>
            </li>
            <li>
              <a
                className="text-base font-normal font-[barlow] hover:text-[#EA7C69] hover:border-b-[4px] px-4 pb-2 border-solid hover:border-[#EA7C69] transition-all duration-600"
                href="#"
              >
                Dessert
              </a>
            </li>
          </ul>
          <hr className="w-full bg-[#393C49]" />
        </div>
        <div className="mt-4  w-full pb-3">
          <div className="top flex justify-between w-full">
            <h1 className="font-[barlow] font-semibold text-lg">
              Choose dishes
            </h1>

            <select className="bg-[#1F1D2B]" name="" id="">
              <option value="">Dine in</option>
              <option value="">To go</option>
              <option value="">Delivery</option>
            </select>
          </div>
        </div>
      </div>

      <main className="ml-28 mt-56 w-full">
        <div>
          {data.map((product) => {
            <div>
              <h3>{product.name}</h3>
              <img src={product.img} alt="" />
            </div>
          })}
        </div>
      </main>
    </div>
  );
};

export default Foods;
