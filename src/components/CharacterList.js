import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import { Container, Row} from 'reactstrap';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [characters, setCharacters] = useState([])


  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/character/ ')
    .then(response => {
      setCharacters(response.data.results);
    })
    .catch(error => {
      console.log('the data was not return', error)
    })

  }, [characters]);

  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>

      {characters.map((item) => {
        return (

          <Container>

            <Row>

              <CharacterCard
            
         
          key={item.id}
          name={item.name}
          image={item.image}
          location={item.location}
         

          />

          </Row>
          </Container>
  

        )
      })}
    </section>
  );
}
