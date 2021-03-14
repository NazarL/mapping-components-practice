import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

console.log(emojipedia);

function createEntry(emojiArticle) {
  return (
    <Entry
      key={emojiArticle.id}
      emoji={emojiArticle.emoji}
      name={emojiArticle.name}
      description={emojiArticle.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
