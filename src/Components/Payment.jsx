import React, { useState, useEffect } from "react";
import { HiOutlineCreditCard } from "react-icons/hi";
import { RiPaypalLine } from "react-icons/ri";
import { IoWalletOutline } from "react-icons/io5";
import { FaCircleCheck } from "react-icons/fa6";

const Payment = ({ closeModal }) => {
  const [activeItem, setActiveItem] = useState(1);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    });

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="fixed bg-[#000000B2] w-full h-full top-0 left-0 flex justify-end overflow-y-auto">
        <div
          className={`w-[405px] h-[728px] relative bg-[#1F1D2B]  rounded-tr-[16px] rounded-br-[16px] pl-[24px] pr-[24px] py-[10px] payment-container ${
            isVisible ? "visible" : ""
          }`}
        >
          <h2 className="text-[28px] text-white font-semibold mb-[8px]">
            Payment
          </h2>
          <p className="text-[#ABBBC2] text-[16px] font-medium">
            3 payment method available
          </p>
          <hr className="w-full my-[14px] border-[#393C49]" />
          <h2 className="text-[20px] text-white font-semibold mb-[16px]">
            Payment Method
          </h2>
          <ul className=" flex items-center gap-[8px] mb-[16px]">
            <li
              className={`${
                activeItem === 1
                  ? "text-white relative rounded-[8px] font-[sans-serif] w-[101px] h-[64px] text-[14px] font-semibold flex flex-col items-center justify-center border border-white bg-[#252836]"
                  : "text-[#ABBBC2] relative rounded-[8px] font-[sans-serif] w-[101px] h-[64px] text-[14px] font-semibold flex flex-col items-center justify-center border border-[#ABBBC2]"
              }`}
              onClick={() => setActiveItem(1)}
            >
              {activeItem === 1 && (
                <FaCircleCheck className="absolute top-[6px] right-[6px] text-[#EA7C69]" />
              )}
              <HiOutlineCreditCard
                className={`w-[21px] h-[21px] ${
                  activeItem === 1 ? "text-[#fff]" : "text-[#ABBBC2]"
                }`}
              />
              Credit Card
            </li>

            <li
              className={`${
                activeItem === 2
                  ? "text-white relative rounded-[8px] font-[sans-serif] w-[101px] h-[64px] text-[14px] font-semibold flex flex-col items-center justify-center border border-white bg-[#252836]"
                  : "text-[#ABBBC2] relative rounded-[8px] font-[sans-serif] w-[101px] h-[64px] text-[14px] font-semibold flex flex-col items-center justify-center border border-[#ABBBC2]"
              }`}
              onClick={() => setActiveItem(2)}
            >
              {activeItem === 2 && (
                <FaCircleCheck className="absolute top-[6px] right-[6px] text-[#EA7C69]" />
              )}
              <RiPaypalLine
                className={`w-[21px] h-[21px] ${
                  activeItem === 2 ? "text-[#FFF]" : "text-[#ABBBC2]"
                }`}
              />
              Paypal
            </li>
            <li
              className={`${
                activeItem === 3
                  ? "text-white relative rounded-[8px] font-[sans-serif] w-[101px] h-[64px] text-[14px] font-semibold flex flex-col items-center justify-center border border-white bg-[#252836]"
                  : "text-[#ABBBC2] relative rounded-[8px] font-[sans-serif] w-[101px] h-[64px] text-[14px] font-semibold flex flex-col items-center justify-center border border-[#ABBBC2]"
              }`}
              onClick={() => setActiveItem(3)}
            >
              {activeItem === 3 && (
                <FaCircleCheck className="absolute top-[6px] right-[6px] text-[#EA7C69]" />
              )}
              <IoWalletOutline
                className={`w-[21px] h-[21px] ${
                  activeItem === 3 ? "text-[#FFF]" : "text-[#ABBBC2]"
                }`}
              />
              Cash
            </li>
          </ul>
          <p className="text-[14px] text-white mb-[8px] font-medium">
            Cardholder Name
          </p>
          <input
            type="text"
            placeholder="Levi Ackerman"
            className="w-full h-[48px] rounded-[8px] bg-[#2D303E] pl-[14px] outline-none text-[#ABBBC2] border border-[#393C49]"
          />
          <p className="text-[14px] mt-[16px] text-white mb-[8px] font-medium">
            Card Number
          </p>
          <input
            type="text"
            placeholder="2564 1421 0897 1244"
            className="w-full h-[48px] mb-[24px] rounded-[8px] bg-[#2D303E] pl-[14px] outline-none text-[#ABBBC2] border border-[#393C49]"
          />
          <div className="flex items-center gap-[13px]">
            <div>
              <p className="text-[white] text-[14px] mb-[8px]">
                Expiration Date
              </p>
              <input
                type="date"
                className="w-[172px] h-[48px] rounded-[8px] hover:cursor-pointer bg-[#2D303E] pl-[14px] outline-none text-[#ABBBC2] border border-[#393C49]"
              />
            </div>
            <div>
              <p className="text-[white] text-[14px] mb-[8px]">CVV</p>
              <input
                type="password"
                className="w-[172px] h-[48px] rounded-[8px] hover:cursor-pointer bg-[#2D303E] pl-[14px] outline-none text-[#ABBBC2] border border-[#393C49]"
              />
            </div>
          </div>
          <hr className="w-full my-[15px] border border-[#393C49]" />
          <div className="flex items-center gap-[13px]">
            <div>
              <p className="text-[white] text-[14px] mb-[8px]">Order Type</p>
              <select
                className="w-[172px] h-[48px] rounded-[8px] hover:cursor-pointer bg-[#2D303E] pl-[14px] outline-none text-[#ABBBC2] border border-[#393C49]"
                name="select"
                id="select"
              >
                <option
                  className="p-[50px] text-left h-[90px] text-white"
                  value="OPTION"
                >
                  Dine in
                </option>
                <option
                  className="p-[50px] text-left h-[90px] text-white"
                  value="OPTION"
                >
                  To Go
                </option>
                <option
                  className="p-[50px] text-left h-[90px] text-white"
                  value="OPTION"
                >
                  Delivery
                </option>
              </select>
            </div>
            <div>
              <p className="text-[white] text-[14px] mb-[8px]">Table no</p>
              <input
                type="text"
                placeholder="140"
                className="w-[172px] h-[48px] rounded-[8px] hover:cursor-pointer bg-[#2D303E] pl-[14px] outline-none text-[#ABBBC2] border border-[#393C49]"
              />
            </div>
          </div>
          <div className="flex items-center justify-between gap-[8px] absolute bottom-[20px]">
            <button
              onClick={closeModal}
              className="w-[175px] h-[48px] rounded-[8px] border border-[#EA7C69] text-[#EA7C69] text-[14px]"
            >
              Cancel
            </button>
            <button className="w-[175px] h-[48px] rounded-[8px] border bg-[#EA7C69] border-[#EA7C69] text-white text-[14px]  [box-shadow:0px_8px_24px_0px_#EA7C6966]">
              Confirm Payment
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
