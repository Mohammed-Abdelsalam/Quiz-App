import React, { FC, useEffect } from "react";

// MUI
import { Box, Typography, Button } from "@mui/material";

// Redux
import { useSelector } from "react-redux";
import scoreReducer from "../redux/store.ts";
import { updateRank } from "../redux/scoreSlice.ts";
import { useDispatch } from "react-redux";

// React router
import { Link } from "react-router-dom";

// Axios
import axios from "axios";

const RankScreen: FC = () => {
  const dispatch = useDispatch();
  const finalScore = useSelector(
    (state: scoreReducer) => state.score.finalScore
  );
  const rank = useSelector((state: scoreReducer) => state.score.rank);

  console.log(finalScore);

  useEffect(() => {
    const calculateRank = () => {
      axios
        .post("http://localhost:3002/rank", {
          data: { finalScore: finalScore },
        })
        .then((response) => {
          const { rank } = response.data;
          dispatch(updateRank(rank));
          console.log({ rank });
        });
    };
    calculateRank();
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        mr: "15px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h2"
        sx={{ fontSize: "4rem", marginBottom: "2rem", fontWeight: "bold" }}
      >
        Rank Screen
      </Typography>
      <Typography
        variant="h3"
        sx={{ fontSize: "2.5rem", marginBottom: "2rem", fontWeight: "bold" }}
      >
        Your Final Score : <span style={{ color: "#ff5" }}>{finalScore}</span>
        From 100 Point.
      </Typography>
      <Typography
        variant="h3"
        sx={{ fontSize: "2.5rem", marginBottom: "4rem", fontWeight: "bold" }}
      >
        Your Rank : <span style={{ color: "#ff5" }}>{rank}</span>
      </Typography>
      <Typography
        variant="h4"
        sx={{ fontSize: "1.8rem", marginBottom: "4rem", fontWeight: "bold" }}
      >
        "Well done! 👍 You did an excellent job! <br /> Keep developing and
        improving your skills. <br /> You are on the right path to success!"
      </Typography>
      <Link to={"/"}>
        <Button
          onClick={() => {
            window.location.href = "/";
          }}
          variant="contained"
          sx={{
            fontSize: "1.2rem",
            padding: "1rem 2rem",
            backgroundColor: "#f50057",
            color: "#fff",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "bold",
            textShadow: "0 1px 2px rgba(0, 0, 0, 0.3)",
            "&:hover": {
              backgroundColor: "#c51162",
            },
          }}
        >
          Try Again
        </Button>
      </Link>
    </Box>
  );
};

export default RankScreen;
