import http from "./httpService";

export function getOtp(data) { // data => {phoneNumber: "0992000000",}
  return http.post("/user/get-otp", data);
}


export function checkOtp(data) {
    return http.post("/user/check-otp", data)
}
