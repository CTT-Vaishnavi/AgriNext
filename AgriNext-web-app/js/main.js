let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

// number
document.getElementById("callButton").addEventListener("click", function(e) {
                e.preventDefault();
                const phone = "18001801551";
                if (/Mobi|Android/i.test(navigator.userAgent)) {
                  // Mobile device
                  window.location.href = "tel:" + phone;
                } else {
                  // Not a mobile device
                  alert("Please use a mobile device to make this call.");
                }
              });

// background color change

  const body = document.body;

  document.getElementById("sun").onclick = () => {
    body.style.background = "linear-gradient(to bottom right, #ffeb99, #ffcc00)";
    body.style.color = "#000";
  };

  document.getElementById("forest").onclick = () => {
    body.style.background = "linear-gradient(to bottom right, #b7ffb7, #07a63a)";
    body.style.color = "#000";
  };

  document.getElementById("ocean").onclick = () => {
    body.style.background = "linear-gradient(to bottom right, #b3e5ff, #0077ff)";
    body.style.color = "#fff";
  };

  document.getElementById("black").onclick = () => {
    body.style.background = "#000";
    body.style.color = "#ffffff";
  };

  document.getElementById("white").onclick = () => {
    body.style.background = "#ffffff";
    body.style.color = "#000";
  };


  document.getElementById("contactForm").addEventListener("submit", function() {
    setTimeout(() => {
        this.reset();     // 🔥 Form Reset After Submit
    }, 1000);
});


// whatsapp icon
document.querySelector(".whatsapp-float").addEventListener("click", () => {
  if (window.navigator.vibrate) {
    window.navigator.vibrate(120);
  }
});


              