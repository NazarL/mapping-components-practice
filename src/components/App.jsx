import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

// function createEntry(emojiArticle) {
//   return (
//     <Entry
//       key={emojiArticle.id}
//       picture={emojiArticle.emoji}
//       name={emojiArticle.name}
//       meaning={emojiArticle.meaning}
//     />
//   );
// }

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        <Entry
          emoji="💪"
          name="Tense Biceps"
          description="“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
        />
      </dl>

      {/* {emojipedia.map(createEntry)} */}
      {/* <Entry 
        name={emojipedia[0].name}
      />
      </dl> */}
    </div>
  );
}

export default App;
