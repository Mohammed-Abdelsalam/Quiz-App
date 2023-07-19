import React, { FC, useEffect, useState } from "react";

// MUI
import { Box, Button, Typography } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";

// Axios
import axios from "axios";

// React Router
import { Link } from "react-router-dom";

// Components
import Words from "../components/Words.tsx";

// Redux
import { incrementFinalScore } from "../redux/scoreSlice.ts";
import { useDispatch } from "react-redux";

const Practice: FC = () => {
  const [words, setWords] = useState<Word[]>([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch the words list from the "words" endpoint using Axios
    axios
      .get("http://localhost:3002/words")
      .then((response) => setWords(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleOptionSelect = (option: string) => {
    setSelectedAnswer(option);

    const currentWord = words[currentWordIndex];
    console.log(currentWord);
    console.log(option);
    if (currentWord.pos === option) {
      setFeedback("Correct, well done! 👌");
      dispatch(incrementFinalScore(10));
    } else {
      setFeedback("Incorrect, Don't give up.");
    }
  };

  const handleNextWord = () => {
    setSelectedAnswer("");
    setCurrentWordIndex((prevIndex) => prevIndex + 1);
    setFeedback("");
  };

  const currentWord = words[currentWordIndex];

  const progress = (currentWordIndex / words.length) * 100;

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
        padding: "20px",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          marginBottom: "1rem",
          fontWeight: "bold",
          color: "white",
          textShadow: "0 1px 2px rgba(0, 0, 0, 0.3)",
          textAlign: "center",
        }}
      >
        Practice Screen
      </Typography>
      {currentWord && (
        <Words
          word={currentWord.word}
          options={["noun", "adverb", "adjective", "verb"]}
          selectedAnswer={selectedAnswer}
          onOptionSelect={handleOptionSelect}
          feedback={feedback}
        />
      )}
      {progress === 100 ? (
        <Box>
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
            "Congratulations! 🎉 <br /> The test is now complete, and you can
            view your results here."
          </Typography>
          <Link to="/rank" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{
                fontSize: "1.2rem",
                padding: "1rem 2rem",
                backgroundColor: "#f50057",
                fontWeight: "bold",
                color: "white",
                textShadow: "0 1px 2px rgba(0, 0, 0, 0.3)",
                borderRadius: "4px",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#c51162",
                },
              }}
            >
              Show Your Results
            </Button>
          </Link>
        </Box>
      ) : (
        <Button
          onClick={handleNextWord}
          disabled={!selectedAnswer}
          variant="contained"
          sx={{
            fontSize: "1.2rem",
            padding: "1rem 2rem",
            backgroundColor: "#f50057",
            color: "#fff",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#c51162",
            },
          }}
        >
          {progress === 90 ? `IT'S Done` : "Next Word"}
        </Button>
      )}
      <Box
        sx={{
          width: "80%",
          mt: "20px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: "100%", mr: "15px" }}>
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{
              height: "10px",
              borderRadius: "5px",
              background: "#f1f1f1",
              "& .MuiLinearProgress-bar": {
                background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
              },
            }}
          />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2">{progress.toFixed(0)}%</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Practice;
