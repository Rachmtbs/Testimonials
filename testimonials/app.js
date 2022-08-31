const testimonials = [
    {
        name: "Edgar Allan Poe",
        photoUrl: "https://cdn.pixabay.com/photo/2021/07/07/04/54/edgar-allan-poe-6393223__340.png",
        text: "I became insane, with long intervals of horrible sanity, reading such drivel",
    },
   
    {
        name: "Mary Shelley",
        photoUrl: "https://www.bl.uk/britishlibrary/~/media/bl/global/dl%20romantics%20and%20victorians/portraits/dl-portrait-npg-mary-wollstonecraft-shelley.jpg?crop=1&cropX=10&cropY=89&cropW=1627&cropH=915&cropcachekey=110891627915&w=608&h=342&dispW=608&dispH=342&hash=4C153BB0444C994122905AF980EA78DA",
        text: "Solitude was my only consolation - deep, dark, deathlike solitude, The place of forboding, where the soul lies upon the tombstone, I do recomend this very site for which the dead shall lie",
    },
   
    {
        name: "Shirley Jackson",
        photoUrl: "http://shirleyjackson.org/images/Shirley_Jackson_Portrait.jpg",
        text: " I was born for the storm, and a calm does not suit me. This Manor is to quiet, the spirits sleep to much",
    },
   
];

let idx = 0;

const imgEl = document.querySelector("img");
const texEl = document.querySelector (".text");
const usernameEl = document.querySelector(".username");

updateTestimonial();
function updateTestimonial(){
  const {name, photoUrl, text} = testimonials [idx];
  imgEl.src = photoUrl
  texEl.innerText = text;
  usernameEl.innerText = name;
  idx++
  if(idx === testimonials.length){
    idx = 0;
  }
  setTimeout(() => {
    updateTestimonial()
  }, 20000);
}
// line 5 shwoed error for some reason the currly brackets where curllyer if that makes sense. 
// line 34 error uncaught refrence not defined however when I added the dot on line 26 (".username") error was fixed it was at first ("username")
//line 30 read an error however after finsish the code in line 35  error was resolved. 