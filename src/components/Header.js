import React from "react";
import {Link} from 'react-router-dom';
import {Button} from 'reactstrap';


export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <Link to='/'> <button> Welcome Page </button></Link>
    <Link to='/characters'> <button> View Characters</button></Link>
    <Button color="danger">Danger!</Button>
    </header>





  )
};
