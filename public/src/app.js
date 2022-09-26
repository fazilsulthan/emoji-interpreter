import React, { useState } from "react";
import "./style.css";

const emojiDictionary = {
  "😀": "Grinning Face",
  "😉": "Winking Face",
  "🤑": "Money-Mouth Face",
  "😪": "Sleepy Face",
  "🥳": "Partying Face",
  "😢": "Crying Face",
  "🤔": "Thinking Face",
  "😋": "Face Savoring Food",
  "🥱": "Yawning Face",
  "😂": "Face with Tears of Joy",
  "😫": "Tired Face",
  "🥰": "Smiling Face with Hearts",
  "😟": "Worried Face",
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "we dont have these in our database";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji interpreter</h1>
      <input onChange={emojiInputHandler} />
      <h2> meaning {meaning} </h2>
      <h3> emojis we know </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
