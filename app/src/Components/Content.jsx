import React from 'react'
import Round from '../Assets/Ellipse1.png';
import bg from '../Assets/home-pic.png';


// Css
import classes from '../Components/Content.module.css';

function Content() {
  return (
    <div>
      <div className={classes.maincontainer}>
        <div className={classes.container}>
          <img src={rectangle} alt="background" className={classes.mainbg} />
          <img src={logo} alt="Logo" />
          <h1>ENITIATE</h1>
        </div>
      </div>
    </div>
  );
}

export default Content
