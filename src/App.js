import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
// import reactDom from 'react-dom';


export default function App() {
  return (
    <main>
      <Header />
      <CharacterList/>
    </main>
  );
}
