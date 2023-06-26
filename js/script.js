const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

const copyright = document.getElementById("copyright");
const d = new Date();
const year = d.getFullYear();
copyright.innerText = `Copyright ©2023 - ${year}`;

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

const filterContainer = document.querySelector(".gallery-filter");
const galleryItems = document.querySelectorAll(".fotka");

filterContainer.addEventListener("click", (event) =>{
  if(event.target.classList.contains("filter-item")){

    // deaktivuje 'filter-item'
   filterContainer.querySelector(".active").classList.remove("active");

    // aktivuje 'filter-item'
   event.target.classList.add("active");

   const filterValue = event.target.getAttribute("data-filter");

   galleryItems.forEach((item) =>{

      if(item.classList.contains(filterValue) || filterValue === 'all'){
       item.classList.remove("hide");
        item.classList.add("show");
      }

      else{
       item.classList.remove("show");
       item.classList.add("hide");
      }

    });
  }
});
