import React from "react";
import Practice from "./pages/Practice.tsx";
import Rank from "./pages/Rank.tsx";
import Home from "./pages/Home.tsx";
import { Box } from "@mui/material";

// react-router
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Box
      sx={{
        margin: "0",
        padding: "0",
        width: "100%",
        height: "98vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#3f51b5",
        color: "#fff",
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/words" element={<Practice />} />
        <Route path="/rank" element={<Rank />} />
      </Routes>
    </Box>
  );
}

export default App;
