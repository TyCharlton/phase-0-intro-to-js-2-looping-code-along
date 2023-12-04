// Code your solutions in this file

const gifts = ["teddy bear", "drone", "doll"];
function wrapGifts(gifts) {
    for (let i=0; i < gifts.length; i++) {
        console.log('Wrapped ${gifts[i]} and added a bow!');
        debugger;
    }

    return gifts;
}


wrapGifts(gifts);

function countDown(num) {
    while (num >= 0) {
      console.log(num);
      num--;
    }
  }




function writeCards(names, eventName) {
    let thankYouCards = [];
  
    for (let i = 0; i < names.length; i++) {
      let message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
      thankYouCards.push(message);
    }
  
    return thankYouCards;
  }




