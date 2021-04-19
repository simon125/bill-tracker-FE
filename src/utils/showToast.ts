import { ToastOptions, toast } from "react-toastify";

const toastConfig: ToastOptions = {
  position: "top-right",
  autoClose: 4000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: false,
  progress: undefined,
};

export const showInfoToast = (msg: string) => toast.info(msg, toastConfig);

export const showSuccessToast = (msg: string) =>
  toast.success(msg, toastConfig);

export const showWarningToast = (msg: string) =>
  toast.warning(msg, toastConfig);

export const showErrorToast = (msg: string) => toast.error(msg, toastConfig);
