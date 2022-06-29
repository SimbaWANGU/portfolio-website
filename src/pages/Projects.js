import React from 'react';
import '../styles/projects.scss';
import ListSharpIcon from '@mui/icons-material/ListSharp';

function Projects() {
  return (
    <div className="projects">
      <div className="container">
        <div className="card">
          <div className="imgBx">
            <ListSharpIcon style={{ color: '#ffffff' }} />
          </div>
          <div className="contentBx">
            <h2>Nike Shoes</h2>
            <div className="size">
              <h3>Size :</h3>
              <span>7</span>
              <span>8</span>
              <span>9</span>
              <span>10</span>
            </div>
            <div className="color">
              <h3>Color :</h3>
              <span />
              <span />
              <span />
            </div>
            <a href="/">Buy Now</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
