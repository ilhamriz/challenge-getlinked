import { Backdrop, CircularProgress } from "@mui/material";
import { createContext, useState } from "react";

export const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const loaderContext = {
    setLoader: (state) => setOpen(state),
  };

  return (
    <LoaderContext.Provider value={loaderContext}>
      {children}
      {open ? (
        <Backdrop sx={{ zIndex: 9000 }} open={true}>
          <CircularProgress sx={{ color: "#d434fe" }} />
        </Backdrop>
      ) : null}
    </LoaderContext.Provider>
  );
};
