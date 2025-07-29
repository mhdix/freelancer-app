// project page
// just use components in this page

import SendOtpForm from "../features/authentication/SendOtpForm";

export default function Auth() {
  return (
    <div className="w-full sm:max-w-sm ">
      <SendOtpForm />
    </div>
  );
}
