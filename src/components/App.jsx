import React from "react";
import emojipedia from "../emojipedia";
import Card from "./Card";

function createDict(data) {
  return (
    <Card
      key={data.id}
      emoji={data.emoji}
      name={data.name}
      mean={data.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createDict)}</dl>
    </div>
  );
}

export default App;
