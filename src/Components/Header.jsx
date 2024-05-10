// import React, { useState } from "react";
// import searching from "../../public/images/search.svg";

// const Header = ({ handleSearch }) => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleChange = (e) => {
//     const value = e.target.value;
//     setSearchTerm(value);
//     handleSearch(value); // Bu qatorda handleSearch funktsiyasini chaqiring
//   };

//   const options = {
//     weekday: "long",
//     month: "long",
//     day: "numeric",
//     year: "numeric",
//   };
//   const today = new Date();
//   const formattedDate = today.toLocaleDateString("en-US", options);

  


//   return (
//     <div className="fixed justify-between w-3/5 ml-28 bg-[#252836] pb-20 pt-6">
//       <nav className="flex justify-between items-center">
//         <div className="flex flex-col gap-1">
//           <h1 className="text-[28px] font-[barlow] font-semibold">
//             Salimov To'lqin
//           </h1>
//           <h2 className="font-[barlow] font-normal text-base">
//             {formattedDate}
//           </h2>
//         </div>

//         <label
//           htmlFor="search"
//           className="flex bg-[#2D303E] rounded-lg px-5 py-3 gap-2 border border-[#393C49]"
//         >
//           <img src={searching} alt="" />
//           <input
//             className="bg-transparent outline-none"
//             type="text"
//             placeholder="Search for food, coffe, etc.."
//             id="search"
//             value={searchTerm}
//             onChange={handleChange}
//           />
//         </label>
//       </nav>
//     </div>
//   );
// };

// export default Header;



import React from 'react'

const Header = () => {
  return (
    <div>Header</div>
  )
}

export default Header