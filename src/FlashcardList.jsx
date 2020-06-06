import React from "react";
import Flashcard from './Flashcard'
export default function FlashcardList({ flashcards }) {
  return (
//   <h1>{flashcards.map(a=>a.question)}</h1>
    <div className="card-grid">
      {flashcards.map((flashcard) => {
        return (
            <Flashcard flashcard={flashcard} key={flashcard.id}/>
        )
      })}
    </div>
  );
}
