var element=document.getElementById("navbarSupportedContent");
var link=element.getElementsByClassName("nav-link");
for(i=0;i<link.length;i++) {
        link[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("active");
            current[0].classList.remove("active");
            console.log(this);
            this.classList.add("active");
        });
    }
