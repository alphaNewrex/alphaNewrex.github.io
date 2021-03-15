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


$(window).scroll(function () {
  $('#logo').each(function () {
      var imagePos = $(this).offset().top;
      var imageHeight = $(this).height();
      var topOfWindow = $(window).scrollTop();

      if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
          $(this).addClass("line-anim");
      } else {
          $(this).removeClass("line-anim");
      }
  });
});