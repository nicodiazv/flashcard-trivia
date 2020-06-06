import React, { useState, useEffect } from "react";
import FlashcardList from "./FlashcardList";
import axios from "axios";
import "./App.css";
function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS);

  useEffect(() => {
    axios
      .get(
        "https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple"
      )
      .then((res) => {
        setFlashcards(
          res.data.results.map((questionItem, index) => {
            const answer = decodeString(questionItem.correct_answer);
            const options = [
              ...questionItem.incorrect_answers.map((a) => decodeString(a)),
              answer,
            ];
            return {
              id: `${index}-${Date.now()}`,
              question: decodeString(questionItem.question),
              answer: answer,
              options: options.sort(() => Math.random() - 0.5),
            };
          })
        );

        console.log(res.data);
      });
  }, []);

  const decodeString = (str) => {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = str;
    return textArea.value;
  };

  return(
  <div className="container">
    <FlashcardList flashcards={flashcards} />
  </div>)
}

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: "Burpees",
    answer: "10",
    options: ["2", "3", "4", "5"],
  },
  {
    id: 2,
    question: "Question 2?",
    answer: "Answer",
    options: ["Answer", "Answer1", "Answer2", "Answer3"],
  },
];

export default App;
