import React, { FC } from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home: FC = () => {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#3f51b5",
        color: "#fff",
      }}
    >
      <Typography
        variant="h1"
        style={{
          fontSize: "4.5rem",
          marginBottom: "2rem",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Welcome to the <span style={{ color: "#ff5" }}>Quiz App</span>
      </Typography>
      <Typography
        variant="h4"
        style={{
          fontSize: "1.5rem",
          marginBottom: "4rem",
          textAlign: "center",
          color: "#ff5",
          fontWeight: "bold",
          lineHeight: "1.8",
        }}
      >
        <span style={{ color: "#fff" }}>Discover the Power</span> of 'Part of
        Speech'! <br /> Challenge Your Language Skills with{" "}
        <span style={{ color: "#fff" }}>Exciting Quizzes</span>! <br />
        Identify Nouns, Verbs, Adjectives, and Adverbs Like a Pro! <br />
        Let's Embark on a Thrilling{" "}
        <span style={{ color: "#fff" }}>Language Adventure</span> Together!
      </Typography>

      <Link to={"/words"}>
        <Button
          variant="contained"
          sx={{
            fontWeight: "bold",
            color: "white",
            textShadow: "0 1px 2px rgba(0, 0, 0, 0.3)",
            fontSize: "1.2rem",
            padding: "1rem 2rem",
            backgroundColor: "#f50057",
            borderRadius: "4px",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "#c51162",
            },
          }}
        >
          Get Started
        </Button>
      </Link>
    </Box>
  );
};

export default Home;
