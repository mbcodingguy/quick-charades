
let images = [
  {"name":"Monkey","pic":"/animals/monkey.png"},
  {"name":"Chicken","pic":"/animals/chicken.png"},
  {"name":"Bird","pic":"/animals/bird.png"},
  {"name":"Penguin","pic":"/animals/penguin.png"},
  {"name":"Bunny","pic":"/animals/bunny.png"},
  {"name":"Fish","pic":"/animals/fish.png"},
  {"name":"Cat","pic":"/animals/cat.png"},
  {"name":"Dog","pic":"/animals/dog.png"},
  {"name":"Horse","pic":"/animals/horse.png"},
  {"name":"Lion","pic":"/animals/lion.png"}
]
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
  console.log("Method");
  console.log(randomImages);
}