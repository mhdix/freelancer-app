import { useEffect, useState } from "react";
// import { OTPInput } from 'react-otp-input';
import OTPInput from 'react-otp-input';

const CheckOTPForm = () => {
  const [otp, setOtp] = useState("");
  useEffect
  return (
    <div>
      <form action="" className="space-y-10">
        <p className="font-bold text-gray-900">کد تایید را وارد کنید</p>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input type="number" {...props} />}
          containerStyle="justify-center flex-row-reverce gap-x-2 justify-center"
          inputStyle="border border-slate-400 w-fit py-0.5 px-1 mx-1 rounded min-w-8 min-h-8"
        />
      <button className="btn w-full">تایید</button>
      </form>
    </div>
  );
};

export default CheckOTPForm;
