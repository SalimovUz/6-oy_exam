import React from 'react'
import "../App.css"
import deleteImg from "../../public/images/Button.svg"

const Orders = () => {
  const close = () => {
    document.querySelector(".all__order").style.display = "none"
    document.getElementById("sum").style.display = "block"
  }
  return (
    <div>
      <div className=" bg-[#1F1D2B] w-[28%] h-screen fixed flex flex-col right-0 ">
        <div className="orders  px-6 overflow-y-auto">
          <div className="bg-[#1F1D2B] py-6 w-[24%] h-32 fixed">
            <h1 className="text-2xl  font-[barlow] font-normal">
              Orders #34562
            </h1>

            <div className="buttons w-4/5 pt-6 flex  gap-2">
              <button className=" px-3 py-1 bg-[#EA7C69] rounded-lg text-lg font-[barlow] font-normal">
                Dine In
              </button>
              <button className=" px-3 py-1 bg-[#1F1D2B] border border-[#393C49] text-[#EA7C69] rounded-lg text-lg font-[barlow] font-normal">
                To Go
              </button>
              <button className=" px-3 py-1 bg-[#1F1D2B] border border-[#393C49] text-[#EA7C69] rounded-lg text-lg font-[barlow] font-normal">
                Delivery
              </button>
            </div>
            <div className="top bg-[#1F1D2B] py-3 flex justify-between">
              <h1>Item</h1>

              <div className="flex gap-12">
                <h1>Qty</h1>
                <h1>Price</h1>
              </div>
            </div>
            <hr />
          </div>

          <div className="calculator__order mt-4 ">
            <div
              className="orderst mt-44 flex flex-col gap-3"
              style={{ overflowY: "auto" }}
            >
              <div className="order">
                <div className="top flex justify-between">
                  <div className="left">
                    <img src="" alt="" />
                    <div>
                      <h1>Food name</h1>
                      <h2>Food price</h2>
                    </div>
                  </div>

                  <div className="flex gap-10">
                    <h1 className="bg-[#2D303E] border border-[#393C49] rounded-lg text-center items-center mx-auto flex flex-col px-5 justify-center">
                      1
                    </h1>
                    <h1 className="text-center">$ 10</h1>
                  </div>
                </div>

                <div className="bottom justify-between flex gap-5 mt-3">
                  <input
                    className="bg-[#2D303E] border border-[#393C49] outline-none rounded-lg pl-3 w-full"
                    type="text"
                    placeholder="Please, just a little bit spicy only."
                  />
                  <img src={deleteImg} alt="" />
                </div>
              </div>

              <div
                id="sum"
                className=" hidden flex-col bottom-0 w-full pb-4 gap-10 bg-[#1F1D2B]"
              >
                <span className="w-full bg-[#393C49] block h-[1px]"></span>
                <button
                  // onClick={close}
                  className="absolute text-end flex right-4 text-xl cursor-auto"
                >
                  x
                </button>
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between">
                    <h1>Discount</h1>
                    <h2>0$</h2>
                  </div>
                  <div className="flex justify-between">
                    <h1>Sub total</h1>
                    <h2>$ 21.03</h2>
                  </div>

                  <button className="w-full text-xl bg-[#EA7C69] h-12 rounded-lg">
                    Continue to Payment
                  </button>
                </div>
              </div>

              <div className="all__order flex flex-col bottom-0 fixed w-[26%] pr-5 pb-4 gap-10 bg-[#1F1D2B]">
                <span className="w-full bg-[#393C49] block h-[1px]"></span>
                <button
                  onClick={close}
                  className="absolute text-end flex right-4 text-xl cursor-auto"
                >
                  x
                </button>
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between">
                    <h1>Discount</h1>
                    <h2>0$</h2>
                  </div>
                  <div className="flex justify-between">
                    <h1>Sub total</h1>
                    <h2>$ 21.03</h2>
                  </div>

                  <button className="w-full text-xl bg-[#EA7C69] h-12 rounded-lg">
                    Continue to Payment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




      {/* Start */}



      
    </div>
  );
}

export default Orders