var quotes = [
  "People often say that motivation doesn't last. Well, neither does bathing -- that's why we recommend it daily. -Zig Ziglar",
  "Someday is not a day of the week. -Denise Brennan-Nelson",
  "Your time is limited, so don't waste it living someone else's life. -Steve Jobs",
  "If you cannot do great things, do small things in a great way. -Napoleon Hill",
  "Beware of monotony; it's the mother of all the deadly sins. -Edith Wharton",
  "I'd rather regret the things I've done than regret the things I haven't done. -Lucille Ball",
  "I didn't get there by wishing for it or hoping for it, but by working for it. -Estée Lauder",
  "Always do your best. What you plant now, you will harvest later. -Og Mandino",
  "Perseverance is failing 19 times and succeeding the 20th. -Julie Andrews",
  "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success. -Dale Carnegie",
  "Don't ask if your dream is crazy, ask if it's crazy enough. -Lena Waithe",
  "Carpe diem. Seize the day, boys. Make your lives extraordinary. - Dead Poets Society",
  "Don't let anyone ever make you feel like you don't deserve what you want. -Heath Leger"
];

function newQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote-text").innerHTML = quotes[randomNumber];
}

window.onload = function() {
  newQuote();
};
