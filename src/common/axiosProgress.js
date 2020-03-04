/* eslint-disable no-shadow,no-param-reassign */
import "nprogress/nprogress.css";

import NProgress from "nprogress";
import axios from "axios";

const calculatePercentage = (loaded, total) => (Math.floor(loaded * 1.0) / total);

export default function loadProgressBar(config, instance = axios) {
  let requestsCounter = 0;

  const setupStartProgress = () => {
    instance.interceptors.request.use(config => {
      if (config.progress !== false) {
        requestsCounter += 1;
        NProgress.start();
      }

      return config;
    });
  };

  const setupUpdateProgress = () => {
    if (requestsCounter > 0) {
      const update = e => NProgress.inc(calculatePercentage(e.loaded, e.total));
      instance.defaults.onDownloadProgress = update;
      instance.defaults.onUploadProgress = update;
    }
  };

  const setupStopProgress = () => {
    const responseFunc = response => {
      if (requestsCounter > 0) {
        requestsCounter -= 1;
        if ((requestsCounter) === 0) {
          NProgress.done();
        }
      }
      return response;
    };

    const errorFunc = error => {
      if (requestsCounter > 0) {
        requestsCounter -= 1;
        if ((requestsCounter) === 0) {
          NProgress.done();
        }
      }
      return Promise.reject(error);
    };

    instance.interceptors.response.use(responseFunc, errorFunc);
  };

  NProgress.configure(config);
  setupStartProgress();
  setupUpdateProgress();
  setupStopProgress();
}