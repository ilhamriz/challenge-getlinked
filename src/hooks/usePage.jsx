import { useContext } from "react";
import { LoaderContext } from "../context/LoaderContext";
import { SnackbarContext } from "../context/SnackbarContext";

export default function usePage() {
  const { setLoader } = useContext(LoaderContext);
  const { setSnackbar } = useContext(SnackbarContext);

  const loader = (state) => setLoader(state);

  const notif = (msg, type = "success") => {
    if (typeof msg === "string") setSnackbar(msg, type);
    else setSnackbar("There is an error.");
  };

  return {
    notif,
    loader,
  };
}
