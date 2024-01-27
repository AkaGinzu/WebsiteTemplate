// Style Switcher Start//

                              //Toggler//

const StyleSwitcherToggler = document.querySelector(".style-switcher-toggler");

StyleSwitcherToggler.addEventListener("click", () =>{
  document.querySelector(".style-switcher").classList.toggle("open");
})


window.addEventListener("scroll", ()=>{
  if(document.querySelector(".style-switcher").classList.contains("open")) {
    
    document.querySelector(".style-switcher").classList.remove("open");
  }
})



                                 // Style Change //

const parentColors = document.querySelector(".colors");
const childColors = parentColors.childNodes
console.log(childColors)

childColors.forEach((item) =>{
  item.addEventListener("click", ()=>{
setActiveStyle(item.className);
console.log(item)
  } )
})


const alternateStyle = document.querySelectorAll(".alternate-style");

function setActiveStyle(clickedColorClass) {

  alternateStyle.forEach((style) =>{
    if(clickedColorClass === style.getAttribute("title")){

      style.removeAttribute("disabled")
    }
    else {
      style.setAttribute("disabled", "true")
    }
  })
}


// Style Switcher End//



//----------------------------------Theme Light and Dark Mode------------------------------------//

const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", () => {
  
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark")
})

window.addEventListener("load", () => {
  if(document.body.classList.contains("dark")) {

    dayNight.querySelector("i").classList.add("fa-sun");
  }
  else {
    dayNight.querySelector("i").classList.add("fa-moon")
  }
})


//------------------------------Typing Animation----------------------------------//

let typed = new Typed(".typing",{
  strings:["Web Designer","Web Developer","Data Analyst",], typeSpeed:100, BackSpeed:60, loop:true
})



//------------------------------Aside----------------------------------//

const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      allSection = document.querySelectorAll(".section");

         for(let i=0; i<navList.length; i++) {
          
          const a = navList[i].querySelector("a");
          a.addEventListener("click", ()=>{

            for(let i=0; i<allSection.length; i++) {
              allSection[i].classList.remove("back-section");
            }

            for(let j=0; j<navList.length; j++){

              if(navList[j].querySelector("a").classList.contains("active")) {

                allSection[j].classList.add("back-section");
              }

              navList[j].querySelector("a").classList.remove("active");
            }

            a.classList.add("active")
            showSection(a);
            if(window.innerWidth < 1200) {
              asideTogglerBtn();
            }
          })
         }


         function showSection(element) {

          for(let i=0; i<allSection.length; i++) {
            allSection[i].classList.remove("active");
          }

          const target = element.getAttribute("href").split("#")[1];
          document.querySelector("#" + target).classList.add("active")
         }

         function updateNav(element) {
          console.log(element.getAttribute("href").split("#")[1])
         }

         
          /*----------------------------------Nav Toggler Button --------------------------------*/

          const navTogglerBtn = document.querySelector(".nav-toggler"),
                aside = document.querySelector(".aside");

                navTogglerBtn.addEventListener("click", () => {
                  asideTogglerBtn()
                })

                function asideTogglerBtn() {
                  aside.classList.toggle("open");
                  navTogglerBtn.classList.toggle("open");
                  for(let i=0; i<allSection.length; i++) {
                    allSection[i].classList.toggle("open");
                  }
                }