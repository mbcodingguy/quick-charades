import bird from './images-charades/bird.png';
import bunny from './images-charades/bunny.png';
import cat from './images-charades/cat.png';
import chicken from './images-charades/chicken.png';
import dog from './images-charades/dog.png';
import fish from './images-charades/fish.png';
import horse from './images-charades/horse.png';
import lion from './images-charades/lion.png';
import monkey from './images-charades/monkey.png';
import penguin from './images-charades/penguin.png';

function ImagesListing() {
  //let tester = [];
  //tester.push({"name":"fish","pic":require('./images-charades/fish.png')});
  //console.log(tester);
  return [
    {"name":"bird","pic":bird},
    {"name":"bunny","pic":bunny},
    {"name":"cat","pic":cat},
    {"name":"chicken","pic":chicken},
    {"name":"dog","pic":dog},
    {"name":"fish","pic":fish},
    {"name":"horse","pic":horse},
    {"name":"bunny","pic":bunny},
    {"name":"lion","pic":lion},
    {"name":"monkey","pic":monkey},
    {"name":"penguin","pic":penguin}
  ]
}

export default ImagesListing;