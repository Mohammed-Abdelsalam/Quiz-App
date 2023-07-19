import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface WordsProps {
  word: string;
  options: string[];
  selectedAnswer: string;
  onOptionSelect: (option: string) => void;
  feedback: string;
}

const Words: React.FC<WordsProps> = ({
  word,
  options,
  selectedAnswer,
  onOptionSelect,
  feedback,
}) => {
  const handleOptionClick = (option: string) => {
    if (selectedAnswer === "") {
      onOptionSelect(option);
    }
  };

  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "1rem",
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{
          marginBottom: "1rem",
          fontSize: "1.4rem",
          fontWeight: "bold",
          color: "white",
          textShadow: "0 1px 2px rgba(0, 0, 0, 0.3)",
          textAlign: "center",
        }}
      >
        Select the part of speech:
      </Typography>
      <Typography
        variant="h3"
        sx={{ marginBottom: "1rem", fontWeight: "bold" }}
      >
        Word is ➡️ {word}
      </Typography>
      <Box
        sx={{
          width: "50em",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          flexDirection: "column",
          margin: "10px",
        }}
      >
        {options.map((option) => (
          <Button
            key={option}
            onClick={() => handleOptionClick(option)}
            disabled={selectedAnswer !== ""}
            variant="contained"
            sx={{
              fontSize: "1.2rem",
              padding: "1rem 0",
              width: "25%",
              borderRadius: "50px",
              margin: "10px",
              backgroundColor: "#303f9f",
              fontWeight: "bold",
              color: "white",
              cursor: "pointer",
              [theme.breakpoints.up("sm")]: {
                width: "40%",
              },
              [theme.breakpoints.up("md")]: {
                width: "80%",
              },
              "&:hover": {
                backgroundColor: "#c51162",
              },
            }}
          >
            {option}
          </Button>
        ))}
      </Box>

      <Typography
        variant="body1"
        sx={{ marginTop: "1rem", fontSize: "2.2rem" }}
      >
        Your Answer is:
        <span
          style={{
            color:
              feedback === "Correct, well done! 👌" ? "#43a047" : "#c51162",
            fontWeight: "bold",
            marginLeft: "0.5rem",
          }}
        >
          {feedback}
        </span>
      </Typography>
    </Box>
  );
};

export default Words;
