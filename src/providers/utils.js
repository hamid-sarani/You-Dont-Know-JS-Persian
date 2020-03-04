import moment from "moment";
import mainMoment from "main-moment";
import axios from "axios";

function persianMoment() {
  moment.defaultFormatUtc = "YYYY-MM-DD HH:mm:ss";
  moment.defaultFormat = "YYYY-MM-DD HH:mm:ss";
  mainMoment.defaultFormatUtc = "YYYY-MM-DD HH:mm:ss";
  mainMoment.defaultFormat = "YYYY-MM-DD HH:mm:ss";

  moment.locale("fa");
  mainMoment.locale("fa");
  moment.updateLocale("fa", {
    months: ("فروردین_اردیبهشت_خرداد_تیر_مرداد_شهریور_مهر_آبان_آذر_دی_بهمن_اسفند").split("_"),
    monthsShort: "فروردین_اردیبهشت_خرداد_تیر_مرداد_شهریور_مهر_آبان_آذر_دی_بهمن_اسفند".split("_")
  });
}

let requestID = 0;
let responseID = 0;

function initAxiosInterceptor(request, resolve, reject) {
  axios.interceptors.request.eject(requestID);
  axios.interceptors.response.eject(responseID);

  requestID = axios.interceptors.request.use(request);
  responseID = axios.interceptors.response.use(resolve, reject);
}

const is401 = (error) => (
  error && error.response && error.response.status === 401 &&
  !error.config.url?.includes("/oauth/token")
);

export { persianMoment, initAxiosInterceptor, is401 };