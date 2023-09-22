import { Alert, Snackbar } from "@mui/material";
import { createContext, useState } from "react";

export const SnackbarContext = createContext();

export const SnackbarProvider = ({ children }) => {
  const [snackbar, setSnackbar] = useState({
    open: false,
    type: "success",
    message: "",
  });
  const snackbarContext = {
    setSnackbar: (message, type = "success") => {
      if (message)
        setSnackbar((state) => ({ ...state, message, type, open: true }));
    },
  };

  function handleClose() {
    setSnackbar((state) => ({ ...state, open: false }));
  }

  return (
    <SnackbarContext.Provider value={snackbarContext}>
      <Snackbar
        open={snackbar.open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert icon={false} severity={snackbar.type} onClose={handleClose}>
          {snackbar.message}
        </Alert>
      </Snackbar>
      {children}
    </SnackbarContext.Provider>
  );
};
