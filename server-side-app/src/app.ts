import express, { Request, Response } from "express";
import TestData from "./TestData.json";
import cors from "cors";
import bodyParser from "body-parser";

// Interface for Word object
interface Word {
  id: number;
  word: string;
  pos: string;
}

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
const PORT = 3002;

// Endpoint for the "words" endpoint
app.get("/words", (req: Request, res: Response) => {
  const wordsList: Word[] = TestData.wordList;
  const selectedWords: Word[] = [];
  const requiredWords = ["adjective", "adverb", "noun", "verb"];

  // Helper function to check if a word matches the required type
  const isRequiredType = (word: Word, type: string) => word.pos === type;

  // Add one word of each required type
  requiredWords.forEach((type: string) => {
    const word = wordsList.find((w: Word) => isRequiredType(w, type));
    if (word) {
      selectedWords.push(word);
    }
  });

  // Randomly select additional words until we have a total of 10
  while (selectedWords.length < 10) {
    const randomIndex = Math.floor(Math.random() * wordsList.length);
    const randomWord = wordsList[randomIndex];
    if (!selectedWords.includes(randomWord)) {
      selectedWords.push(randomWord);
    }
  }

  res.json(selectedWords);
});

// Endpoint for the "rank" endpoint
app.post("/rank", (req: Request, res: Response) => {
  const finalScore: number = req.body.data.finalScore;
  const scoresList: number[] = TestData.scoresList;

  // Calculate the rank percentage
  const belowScores = scoresList.filter((score: number) => score < finalScore);
  const rank = (belowScores.length / scoresList.length) * 100;
  const roundedRank = Math.round(rank * 100) / 100;

  res.json({ rank: roundedRank });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
