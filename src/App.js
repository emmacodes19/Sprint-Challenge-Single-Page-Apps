import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import { Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import NewUsers from "./components/SearchForm";



// import reactDom from 'react-dom';


export default function App() {
  return (
    <main>
      <Header/>
      <Route exact path='/' component={WelcomePage}/>
      <Route exact path='/characters' component={CharacterList}/>
      <NewUsers/>
    
    </main>
  );
}
