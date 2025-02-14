import CheckOTPForm from "../features/authentication/CheckOTPForm";
import SendOtpForm from "../features/authentication/SendOtpForm";

const Auth = () => {
  return (
    <div className="w-full justify-center pt-10">
      <div className="w-full sm:max-w-sm">
        <SendOtpForm />
        {/* <CheckOTPForm /> */}
      </div>
    </div>
  );
};

export default Auth;

// set otp
// check otp
