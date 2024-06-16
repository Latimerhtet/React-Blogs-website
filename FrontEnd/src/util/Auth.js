import { redirect } from "react-router-dom";

export const getExpiredDuration = () => {
  const expiredTime = localStorage.getItem("exp");
  const expiredTimeInMilliSecond = new Date(expiredTime);
  const currentTimeInMilliSecond = new Date();
  const duration = expiredTimeInMilliSecond - currentTimeInMilliSecond;
  return duration;
};

export const getToken = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return null;
  }
  const duration = getExpiredDuration();
  if (duration < 0) {
    return "Token Expired";
  }
  return token;
};

export const tokenLoader = () => {
  return getToken();
};
export const checkTokenLoader = () => {
  const token = getToken();
  if (!token) {
    return redirect("/interior");
  }
  return token;
};
