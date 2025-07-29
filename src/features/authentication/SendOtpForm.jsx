import React, { useState } from "react";

export default function SendOtpForm() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const sendOtpHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form className="space-y-8" onSubmit={sendOtpHandler}>
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
        <button type="submit" className="btn btn--primary w-full">
          ارسال کد تایید
        </button>
      </form>
    </div>
  );
}
