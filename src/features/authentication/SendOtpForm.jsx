import { useState } from "react";
import TextField from "../../ui/TextField";

const SendOtpForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const sendOtpHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form action="" className="space-y-4" onSubmit={sendOtpHandler}>
        <div>
          <label htmlFor=""></label>
          {/* <input
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            id="phoneNumber"
            type="text"
            className="textField__input"
          /> */}
          <TextField
            label="شماره مبایل"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn--primary w-full">ارسال کد تایید</button>
      </form>
    </div>
  );
};

export default SendOtpForm;
