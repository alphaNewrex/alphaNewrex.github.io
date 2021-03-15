new TypeIt(".typer", {
    strings: "I'm a Web Developer.",
    speed: 100,
    waitUntilVisible: true
   
  }).go();


const logo = document.querySelectorAll("#logo path");
for(let i=0;i<logo.length;i++){
  console.log(`letter ${i} is ${logo[i].getTotalLength()}`);
}
  

console.log(logo);





const nav = document.querySelector(".hid");
const burger = document.querySelector(".burger");
const links = nav.querySelectorAll("a");

burger.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
   
    burger.classList.toggle("toggle");
    
});

links.forEach(link => {
    link.addEventListener("click", () =>{
        nav.classList.toggle("nav-open");
        burger.classList.toggle("toggle");
    });
});