import { useState } from "react";
import TextField from "../../ui/TextField";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getOtp } from "../../services/authService";

const SendOtpForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const {isPending, error, data, mutateAsync} = useMutation({
    mutationFn: getOtp,
  })

  const sendOtpHandler = async(e) => {
    e.preventDefault();
    try {
      const data = await mutateAsync({phoneNumber})
      toast.success(data.message.message)
      console.log(error?.response?.data?.message)
    } catch (error) {
      
    }
  };


  // useQuery => get data
  // useMutation => post, put, delete, ...

  return (
    <div>
      <form action="" className="space-y-4" onSubmit={sendOtpHandler}>
        <div>
          <label htmlFor="">شماره مبایل</label>
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
