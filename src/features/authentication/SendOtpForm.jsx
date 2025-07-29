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
            className="textField__input"
            type="text"
          />
        </div>
        <button className="btn btn--primary w-full">ارسال کد تایید</button>

        <button className="btn btn--secondary w-full">ارسال کد تایید</button>
      </form>
    </div>
  );
}
