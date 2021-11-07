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

        <div className="col-12 col-md-6 p-1">
          <a href="https://github.com/juju669/dream-home" target="_blank" rel="noopener noreferrer">
            <img className="img-fluid" src={project2}></img>
          </a>
        </div>
      </div>

      
      </div>
  );
};

export default Project;