import React, { useState } from "react";

export default function SendOtpForm() {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div className="">
      <form className="space-y-8">
        <div>
          <label htmlFor="phoneNumber" className="mb-1">
            شماره موبایل
          </label>
          <input
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="bg-white w-full py-3 px-4 rounded-xl text-gray-900 border border-blue-200 outline-none focus:outline-none hover:border-blue-500 focus-within:border-blue-500 focus:bg-white transition-all duration-300 ease-in-out focus:shadow-lg focus:shadow-blue-200"
            type="text"
          />
        </div>
        <button className="px-4 py-2 cursor-pointer font-bold bg-blue-600 text-white w-full rounded-xl transition-all duration-300 hover:bg-blue-500 shadow-sm shadow-blue-300 focus:outline-blue-600 ">
          ارسال کد تایید
        </button>
      </form>
    </div>
  );
}
