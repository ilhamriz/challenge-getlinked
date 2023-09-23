import { useContext } from "react";
import { LoaderContext } from "../context/LoaderContext";
import { SnackbarContext } from "../context/SnackbarContext";

const notifyError = (res, setSnackbar) => {
  if (res?.status && [404, 500].includes(res.status)) {
    setSnackbar("There is an error");
  } else if (res && res.data) {
    let messages = [];
    const errors = res.data;

    for (let i in errors) {
      const message = Array.isArray(errors[i]) ? errors[i][0] : errors[i];
      messages.push(message);
    }
    setSnackbar(messages.join(","), "error");
  }
};

export default function usePage() {
  const { setLoader } = useContext(LoaderContext);
  const { setSnackbar } = useContext(SnackbarContext);

  const loader = (state) => setLoader(state);

  const notif = (msg, type = "success") => {
    if (typeof msg === "string") setSnackbar(msg, type);
    else notifyError(msg, setSnackbar);
  };

  return {
    notif,
    loader,
  };
}
