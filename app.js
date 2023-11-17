const quote = [{
    Quote: "\"Shoot for the moon. Even if you miss it you will land among the stars.\"",
    Author: "-Les Brown"
},
{
    Quote: "“The moon is the first milestone on the road to the stars.”",
    Author: "-Arthur C. Clarke"
},
{
    Quote: "\"Always remember we are under the same sky, looking at the same moon.\"",
    Author: "-Maxine Lee"
},
{
    Quote: "“Like the moon, come out from behind the clouds! Shine.”",
    Author: "-Gautama Buddha"
},
];

const para_1 = document.getElementById("para-1");
const para_2 = document.getElementById("para-2");
const quote_s = document.querySelector(".quote");

quote_s.addEventListener("click", function() {
    const text_1 = quote[randomQuote()].Quote;
    const text_2 = quote[randomQuote()].Author;

    para_1.textContent = text_1;
    para_2.textContent = text_2;
});

function randomQuote() {
    return Math.floor(Math.random()*quote.length);;
}