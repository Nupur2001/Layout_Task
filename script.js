 // document.addEventListener('DOMContentLoaded', () => {
      //   const hamburger = document.querySelector('.hamburger');
      //   const sidebar = document.querySelector('.sidebar');
        
      //   // hamburger.addEventListener('click', () => {
      //   //   // Toggle the 'active' class on both the hamburger and the sidebar
      //   //   console.log("hamburger button tapped!")
      //   //   hamburger.classList.toggle('active');
      //   //   sidebar.classList.toggle('active');
      //   // });
      // });

      document.getElementById("hamburger").addEventListener("click", myFunction);

      function myFunction() {
        var x = document.getElementsByClassName("sidebar")[0]; // Access the first element with class 'sidebar'
    
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
      }
