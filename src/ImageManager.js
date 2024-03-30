import ImagesListing from './ImagesListing';

let images = ImagesListing();
establishImageDimensions();
establishImageOrientationClasses();
window.onresize = establishImageOrientationClasses;
let currentIndex = -1;
let randomImages = images.map(i => i.name);

export function nextImageObject() {
  currentIndex++;
  if (currentIndex >= randomImages.length) {
    currentIndex = 0;
  }
  return images.find(i => i.name === randomImages[currentIndex]);
}

export function randomizeImageOrder() {
  // https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj
  for (let i = randomImages.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = randomImages[i];
    randomImages[i] = randomImages[j];
    randomImages[j] = temp;
  }
}

function setImageOrientationClass(imageObj) {
  const screenWidthHeightRatio = window.innerWidth/(window.innerHeight*1.2);
  if (imageObj["width"]/imageObj["height"] > screenWidthHeightRatio) {
    //console.log(imageObj["name"] + " is wide");
    imageObj["longSide"] = "wide";
  }
  else {
    //console.log(imageObj["name"] + " is tall");
    imageObj["longSide"] = "tall";
  }
}

function establishImageOrientationClasses() {
  for (let i = 0; i < images.length; i++) {
    if (images[i]["height"] > 0)
      setImageOrientationClass(images[i]);
  }
}

export function establishImageDimensions() {
  for (let i = 0; i < images.length; i++) {
    let img = new Image();
    img.src = images[i]["pic"];
    img.alt = images[i]["name"];
    img.onload = () => {
      images[i]["height"] = img.height;
      images[i]["width"] = img.width;
      setImageOrientationClass(images[i]);
    }
  }
}