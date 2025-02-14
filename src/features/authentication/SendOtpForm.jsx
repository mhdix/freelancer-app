import { useState } from "react";

const SendOtpForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div>
      <form action="" className="space-y-4">
        <div>
          <label htmlFor=""></label>
          <input
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            id="phoneNumber"
            type="text"
            className="textField__input"
          />
        </div>
        <button className="btn btn--primary w-full">
          ارسال کد تایید
        </button>
      </form>
    </div>
  );
};

export default SendOtpForm;
