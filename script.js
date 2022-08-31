// the used links
var links = [
    "muleyrohit.github.io/Quotes/1.html",
    "muleyrohit.github.io/Quotes/2.html",
    "muleyrohit.github.io/Quotes/3.html",
    "muleyrohit.github.io/Quotes/4.html",
    "muleyrohit.github.io/Quotes/5.html",
    "muleyrohit.github.io/Quotes/6.html",
    "muleyrohit.github.io/Quotes/7.html",
    "muleyrohit.github.io/Quotes/8.html"

];

openStuff = function () {
    // get a random number between 0 and the number of links
    var randIdx = Math.random() * links.length;
    // round it, so it can be used as array index
    randIdx = parseInt(randIdx, 10);
    // construct the link to be opened
    var link = 'https://' + links[randIdx];
    // open it in a new window / tab (depends on browser setting)
    window.open(link, "_self");
};
