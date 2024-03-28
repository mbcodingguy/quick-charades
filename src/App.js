import logo from './logo.svg';
import * as ImageManager from './ImageManager';
import './App.css';

function App() {

  function getNewImage(e) {
    const mainImage = document.getElementById("mainImage");
    const mainLabel = document.getElementById("mainLabel");
    let nextImageObject = ImageManager.nextImageObject();
    mainImage.src = nextImageObject["pic"];
    mainLabel.textContent = nextImageObject["name"];
  }

  return (
    <div className="App" onClick={getNewImage} >
      <header className="App-header">
        <img id="mainImage" src={logo} className="App-logo" alt="logo"/>
        <p id="mainLabel">
          Quick Charades! Click to start. All images from openclipart.org
        </p>
      </header>
    </div>
  );
}

export default App;
