import React from 'react';

import project1 from '../../assets/img/Project1.jpg'
import project2 from '../../assets/img/Project2.jpg'

function Project() {

  const imgStyles = {
    width: '600px'
  };

  return (

    <div className="container">
      <div className="row m-4">
        <div className="col-12 col-md-6 p-1">
          <a href="https://zacktmiller92.github.io/pokedex/" target="_blank" rel="noopener noreferrer">
            <img className="img-fluid" src={project1}></img>
          </a>
        </div>
            <p>If you grew up watching Pokemon, than you will appreciate this App created with my colleagues and I.
              Pokedex is an application that allows a user to search for any pokemon and return results of an image of
              the character, as well as history of the pokemon down to its fighting moves. Think of this application as 
              a wikepdia, but for Pokemon. 
              </p>

        <div className="col-12 col-md-6 p-1">
          <a href="https://github.com/juju669/dream-home" target="_blank" rel="noopener noreferrer">
            <img className="img-fluid" src={project2}></img>
          </a>
        </div>
        <p>
          As more Americans continue to buy homes during these economic times, I have created an application that 
          allows users to be able to find their dream homes within a blink of an eye. utilzing API data that pulls homes 
          from whatever you search.
        </p>
      </div>

      
      </div>
  );
};

export default Project;