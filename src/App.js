import logo from './images-site/logo.png';
import React, { useState } from 'react';
import * as ImageManager from './ImageManager';
import './App.css';
import Help from './Help';
import Timer from './Timer';

ImageManager.randomizeImageOrder();

function App() {
  const [timeLimit, setTimeLimit] = useState(60);
  const [timeLeft, setTimeLeft] = useState(timeLimit);

  function getNewImage(e) {
    const mainImage = document.getElementById("mainImage");
    const mainLabel = document.getElementById("mainLabel");
    const mainLabel2 = document.getElementById("mainLabel2");
    const subLabel = document.getElementById("subLabel");
    subLabel.textContent = "";
    let nextImageObject = ImageManager.nextImageObject();
    mainImage.src = nextImageObject["pic"];
    mainLabel.textContent = nextImageObject["name"].toUpperCase();
    mainImage.alt = nextImageObject["name"];
    mainLabel2.textContent = nextImageObject["name"].toLowerCase();
    let parent = mainImage.parentElement;

    mainImage.classList.remove("wide");
    mainImage.classList.remove("tall");
    parent.classList.remove("wide");
    parent.classList.remove("tall");

    mainImage.classList.add(nextImageObject["longSide"]);
    parent.classList.add(nextImageObject["longSide"]);
    setTimeLeft(timeLimit);
  }

  return (
    <div className="App" >
    < Help />
      <div className="empty-container">
      </div>
      <div className="imgbox" onClick={getNewImage}>
        <img id="mainImage" src={logo} className="center-fit" alt="logo"/>
      </div>
      <div id="labelbox" className="unselectable" onClick={getNewImage}>
        <p id="mainLabel" className="pic-text main-text">
          Quick Charades! Click the image to advance to the next image.
        </p>
        <p id="mainLabel2" className="pic-text main-text">
        </p>
        <p id="subLabel" className="pic-subtext sub-text">
          All images from openclipart.org
        </p>
        </div>
    < Timer timeLimit={timeLimit} setTimeLimit={setTimeLimit} timeLeft={timeLeft} setTimeLeft={setTimeLeft} />
    </div>
  );
}

export default App;
