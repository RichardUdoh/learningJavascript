const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');
const hooray = () => console.log('HOORAY!');

function handleClick() {
  console.log(`+bug IT GOT CLICKED!!`);
}

butts.addEventListener('click', handleClick);
coolButton.addEventListener('click', hooray);

// butts.removeEventListener('click', handleClick);

const buyButtons = document.querySelectorAll('button.buy');
function buyItem() {
  console.log('BUYING AN ITEM');
}

buyButtons.forEach((buyButton) => {
  console.log('binding the buy button');
  buyButton.addEventListener('click', buyItem);
});
