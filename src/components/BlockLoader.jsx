import { Box, CircularProgress } from "@mui/material";

function BlockLoader() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", p: 5 }}>
      <CircularProgress sx={{ color: "#d434fe" }} />
    </Box>
  );
}

export default BlockLoader;
