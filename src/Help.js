import help from './images-site/help.png';
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function Help() {
return (
    <div>
        <Popup trigger=
            {<button id="help-popup-button"> <img src={help} alt="Help"  /></button>}
            modal nested>
            { close => (
            <div id="helpBox" className="popup-modal">
                <button className="corner-close close" onClick={() => close()}>
                &times;
                </button>
                <div className="header"> Playing Quick Charades </div>
                <div className="popup-text">
                    <ol>
                        <li>Choose the actor</li>
                        <li>Turn the screen so only the actor can see</li>
                        <li>Tap or click the image to show the next one</li>
                        <li>Without speaking, act out the image so the audience can guess it</li>
                    </ol>
                </div>
                <button className="help-close close" onClick={() => close()}>
                Close
                </button>
            </div>
          )}
        </Popup>
    </div>
  );
}

export default Help;