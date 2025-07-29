import React, { useState } from "react";
import SendOtpForm from "./SendOtpForm";
import CheckOTPForm from "./CheckOTPForm";

export default function AuthContainer({ children }) {
  const [step, setStep] = useState(1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return <SendOtpForm setStep={setStep} />;
      case 2:
        return <CheckOTPForm />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full sm:max-w-sm">
      {/* <SendOtpForm /> */}
      {renderStep()}
    </div>
  );
}
