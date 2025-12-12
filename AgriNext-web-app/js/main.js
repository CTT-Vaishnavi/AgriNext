
// ======================
// NAVBAR TOGGLE
// ======================
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

// ======================
// CALL BUTTON
// ======================
document.getElementById("callButton").addEventListener("click", function (e) {
  e.preventDefault();
  const phone = "18001801551";
  if (/Mobi|Android/i.test(navigator.userAgent)) {
    window.location.href = "tel:" + phone;
  } else {
    alert("Please use a mobile device to make this call.");
  }
});

// ======================
// THEME HANDLER
// ======================
const body = document.body;

document.getElementById("sun").onclick = () => {
  body.style.background = "linear-gradient(to bottom right, #ffeb99, #ffcc00)";
};

document.getElementById("forest").onclick = () => {
  body.style.background = "linear-gradient(to bottom right, #b7ffb7, #07a63a)";
};

document.getElementById("ocean").onclick = () => {
  body.style.background = "linear-gradient(to bottom right, #b3e5ff, #0077ff)";
  body.style.color = "#fff";
};

document.getElementById("white").onclick = () => {
  body.style.background = "#ffffff";
  body.style.color = "#000";
};

// ======================
// CONTACT FORM RESET
// ======================
document.getElementById("contactForm").addEventListener("submit", function () {
  setTimeout(() => this.reset(), 1000);
});

// ======================
// FIREBASE CONFIG
// ======================
const firebaseConfig = {
  apiKey: "AIzaSyBQ_cUOvn7gB2kq6R85V5WKqja4s-tCZjo",
  authDomain: "agrinext-smart-farming.firebaseapp.com",
  projectId: "agrinext-smart-farming",
  storageBucket: "agrinext-smart-farming.firebasestorage.app",
  messagingSenderId: "685958519850",
  appId: "1:685958519850:web:3bafe3a5de1282a2547753",
  measurementId: "G-6DY3X4ZRZ3",
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// ======================
// LOGIN POPUP
// ======================
const loginPopup = document.getElementById("loginPopup");
const openLoginBtn = document.getElementById("openLogin");
const closePopup = document.getElementById("closePopup");

openLoginBtn.onclick = () => loginPopup.style.display = "flex";
closePopup.onclick = () => loginPopup.style.display = "none";

// ======================
// LOGIN / SIGNUP TABS
// ======================
emailTab.onclick = () => {
  toggleTab(emailTab, [phoneTab, signupTab]);
  showBox(emailBox, [phoneBox, signupBox]);
};

phoneTab.onclick = () => {
  toggleTab(phoneTab, [emailTab, signupTab]);
  showBox(phoneBox, [emailBox, signupBox]);
};

signupTab.onclick = () => {
  toggleTab(signupTab, [emailTab, phoneTab]);
  showBox(signupBox, [emailBox, phoneBox]);
};

function toggleTab(active, others) {
  active.classList.add("active");
  others.forEach(btn => btn.classList.remove("active"));
}

function showBox(show, hideBoxes) {
  show.style.display = "block";
  hideBoxes.forEach(box => box.style.display = "none");
}

// ======================
// EMAIL LOGIN
// ======================
loginBtn2.onclick = () => {
  auth.signInWithEmailAndPassword(email.value, password.value)
    .then(() => successLogin())
    .catch(err => alert(err.message));
};

// ======================
// SIGNUP
// ======================
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

createAccountBtn.onclick = () => {

  let email = signupEmail.value.trim();
  let phone = signupPhone.value.trim();
  let password = signupPassword.value.trim();
  let confirm = signupConfirm.value.trim();

  if (!validateEmail(email))
    return showSignupMsg("Invalid Email", "red");

  if (phone.length !== 10)
    return showSignupMsg("Phone Number must be 10 digits", "red");

  if (password.length < 6)
    return showSignupMsg("Password must be at least 6 characters", "red");

  if (password !== confirm)
    return showSignupMsg("Passwords do not match", "red");

  auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      showSignupMsg("Account Created Successfully ✔", "green");

      setTimeout(() => {
        signupTab.classList.remove("active");
        emailTab.classList.add("active");
        showBox(emailBox, [signupBox, phoneBox]);
      }, 1500);
    })
    .catch(err => showSignupMsg(err.message, "red"));
};

function showSignupMsg(msg, color) {
  signupMsg.innerText = msg;
  signupMsg.style.color = color;
}

// ======================
// PHONE OTP LOGIN
// ======================
let recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha-container");

sendOtpBtn.onclick = () => {
  auth.signInWithPhoneNumber(phone.value, recaptcha)
    .then(res => {
      window.confirmationResult = res;
      otpSection.style.display = "block";
      otpMsg.innerText = "OTP Sent ✔";
      otpMsg.style.color = "green";
    })
    .catch(err => alert(err.message));
};

verifyOtpBtn.onclick = () => {
  confirmationResult.confirm(otp.value)
    .then(() => successLogin())
    .catch(() => alert("Invalid OTP ❌"));
};

// ======================
// SUCCESS LOGIN
// ======================
function successLogin() {
  loginPopup.style.display = "none";
}

// =====================================================
// LOGIN UI TOGGLE SYSTEM
// =====================================================
const profileBtn = document.getElementById("profileBtn");

// MAKE PROFILE HIDDEN BY DEFAULT
profileBtn.style.display = "none";

auth.onAuthStateChanged(user => {
  if (user) {
    // LOGIN → PROFILE SHOW, LOGIN BUTTON HIDE
    profileBtn.style.display = "block";
    openLoginBtn.style.display = "none";
  } else {
    // LOGOUT → PROFILE HIDE, LOGIN BUTTON SHOW
    profileBtn.style.display = "none";
    // openLoginBtn.style.display = "block";
  }
});

// ======================
// PROFILE POPUP
// ======================
const profilePopup = document.getElementById("profilePopup");
const closeProfile = document.getElementById("closeProfile");
const openLoginFromProfile = document.getElementById("openLoginFromProfile");
const logoutFromProfile = document.getElementById("logoutFromProfile");
const profileName = document.getElementById("profileName");

profileBtn.onclick = () => {
  profilePopup.style.display = "block";

  auth.onAuthStateChanged(user => {
    if (user) {
      profileName.innerHTML = "👨‍🌾 " + user.email;
      openLoginFromProfile.style.display = "none";
      logoutFromProfile.style.display = "block";
    } else {
      profileName.innerHTML = "You are not logged in";
      openLoginFromProfile.style.display = "block";
      logoutFromProfile.style.display = "none";
    }
  });
};

closeProfile.onclick = () => {
  profilePopup.style.display = "none";
};

openLoginFromProfile.onclick = () => {
  profilePopup.style.display = "none";
  loginPopup.style.display = "flex";
};

logoutFromProfile.onclick = () => {
  auth.signOut().then(() => {
    alert("Logged Out Successfully!");
    profilePopup.style.display = "none";
  });
};

// ======================
// LOGIN REQUIRED ON FEATURES
// ======================
function requireLogin(callback) {
  auth.onAuthStateChanged(user => {
    if (user) callback();
    else loginPopup.style.display = "flex";
  });
}


// ======================
// UNIVERSAL LOGIN PROTECTION FOR ALL FEATURE BUTTONS
// ======================
document.querySelectorAll("a.btn, a.buttonn").forEach(link => {
  link.addEventListener("click", function (e) {
    const target = this.getAttribute("href");
    
    // Prevent opening link
    e.preventDefault();

    requireLogin(() => {
      window.location.href = target;
    });
  });
});


// // EXPLORE NOW
// document.querySelector("a.btn[href='explore/index.html']").onclick = (e) => {
//   e.preventDefault();
//   requireLogin(() => {
//     window.location.href = "explore/index.html";
//   });
// };

// // WEATHER FORECAST
// document.querySelector("a.buttonn[href='weather-forecast/index.html']").onclick = (e) => {
//   e.preventDefault();
//   requireLogin(() => {
//     window.location.href = "weather-forecast/index.html";
//   });
// };

// // CROP RECOMMENDATION
// document.querySelector("a.buttonn[href='https://crop-recomm.streamlit.app/']").onclick = (e) => {
//   e.preventDefault();
//   requireLogin(() => {
//     window.location.href = "https://crop-recomm.streamlit.app/";
//   });
// };

// // DISEASE DETECTION
// document.querySelector("a.buttonn[href='https://agrisens-crop-disease-pred.streamlit.app/']").onclick = (e) => {
//   e.preventDefault();
//   requireLogin(() => {
//     window.location.href = "https://agrisens-crop-disease-pred.streamlit.app/";
//   });
// };

// document.querySelector("a.buttonn[href='Agriculture Learning Hub/index.html']").onclick = (e) => {
//   e.preventDefault();
//   requireLogin(() => {
//     window.location.href = "Agriculture Learning Hub/index.html";
//   });
// };

// document.querySelector("a.buttonn[href='developing-phase/index.html']").onclick = (e) => {
//   e.preventDefault();
//   requireLogin(() => {
//     window.location.href = "developing-phase/index.html";
//   });
// };

// document.querySelector("a.buttonn[href='guide/index.html']").onclick = (e) => {
//   e.preventDefault();
//   requireLogin(() => {
//     window.location.href = "guide/index.html";
//   });
// };

// document.querySelector("a.buttonn[href='Agrohub/index.html']").onclick = (e) => {
//   e.preventDefault();
//   requireLogin(() => {
//     window.location.href = "Agrohub/index.html";
//   });
// };




