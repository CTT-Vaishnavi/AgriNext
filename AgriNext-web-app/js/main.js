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
    showToast("📲 Please use a mobile device to make this call", "error");
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
  authDomain: "agrinextplant-68852.firebaseapp.com",
  projectId: "agrinextplant-68852",
  storageBucket: "agrinext-smart-farming.firebasestorage.app",
  messagingSenderId: "685958519850",
  appId: "1:685958519850:web:3bafe3a5de1282a2547753",
  measurementId: "G-6DY3X4ZRZ3"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();

// ======================
// LOGIN POPUP
// ======================
const loginPopup = document.getElementById("loginPopup");
const openLoginBtn = document.getElementById("openLogin");
const closePopup = document.getElementById("closePopup");

openLoginBtn.onclick = () => (loginPopup.style.display = "flex");
closePopup.onclick = () => (loginPopup.style.display = "none");

// ======================
// TAB ELEMENTS
// ======================
const emailTab = document.getElementById("emailTab");
const phoneTab = document.getElementById("phoneTab");
const signupTab = document.getElementById("signupTab");

const emailBox = document.getElementById("emailBox");
const phoneBox = document.getElementById("phoneBox");
const signupBox = document.getElementById("signupBox");

const popupImage = document.getElementById("popupImage");

// ======================
// LOGIN / SIGNUP TABS
// ======================
emailTab.onclick = () => {
  toggleTab(emailTab, [phoneTab, signupTab]);
  showBox(emailBox, [phoneBox, signupBox]);
  popupImage.src = "./images/login1.png";
};

phoneTab.onclick = () => {
  toggleTab(phoneTab, [emailTab, signupTab]);
  showBox(phoneBox, [emailBox, signupBox]);
  popupImage.src = "./images/login1.png";
};

signupTab.onclick = () => {
  toggleTab(signupTab, [emailTab, phoneTab]);
  showBox(signupBox, [emailBox, phoneBox]);
  popupImage.src = "./images/sing1.png";
};

function toggleTab(active, others) {
  active.classList.add("active");
  others.forEach((btn) => btn.classList.remove("active"));
}

function showBox(show, hideBoxes) {
  show.style.display = "block";
  hideBoxes.forEach((box) => (box.style.display = "none"));
}

// ======================
// EMAIL LOGIN
// ======================
document.getElementById("loginBtn2").onclick = () => {
  const emailVal = document.getElementById("email").value.trim();
  const passwordVal = document.getElementById("password").value.trim();

  if (!emailVal || !passwordVal) {
    showToast("Please enter email and password 📧", "error");
    return;
  }

  auth
    .signInWithEmailAndPassword(emailVal, passwordVal)
    .then(() => successLogin())
    .catch((err) => {
      // Show friendly messages
      if (err.code === "auth/user-not-found") {
        showToast("No account found with this email ❌", "error");
      } else if (err.code === "auth/wrong-password") {
        showToast("Wrong password ❌ Try again", "error");
      } else if (err.code === "auth/invalid-email") {
        showToast("Invalid email format 📧", "error");
      } else {
        showToast(err.message, "error");
      }
    });
};

// ======================
// FORGOT PASSWORD
// ======================
document.getElementById("forgotPasswordBtn").onclick = (e) => {
  e.preventDefault();
  const userEmail = document.getElementById("email").value.trim().toLowerCase();

  if (!userEmail) {
    showToast("Enter your email first 📧", "error");
    return;
  }

  auth
    .sendPasswordResetEmail(userEmail)
    .then(() => showToast("Reset link sent ✅ Check your email", "success"))
    .catch((error) => showToast(error.message, "error"));
};

// ======================
// SIGNUP  ← MAIN FIX HERE
// ======================
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

document.getElementById("createAccountBtn").onclick = () => {
  // Use unique variable names to avoid conflict with global input elements
  const newEmail = document.getElementById("signupEmail").value.trim().toLowerCase();
  const newPassword = document.getElementById("signupPassword").value.trim();
  const confirmPass = document.getElementById("signupConfirm").value.trim();
  const signupMsg = document.getElementById("signupMsg");

  // ✅ Validation (phone field removed — it's commented out in HTML)
  if (!newEmail) {
    showSignupMsg("Please enter your email 📧", "red");
    return;
  }

  if (!validateEmail(newEmail)) {
    showSignupMsg("Invalid email format ❌", "red");
    return;
  }

  if (newPassword.length < 6) {
    showSignupMsg("Password must be at least 6 characters 🔒", "red");
    return;
  }

  if (newPassword !== confirmPass) {
    showSignupMsg("Passwords do not match ❌", "red");
    return;
  }

  // ✅ Firebase create account
  auth
    .createUserWithEmailAndPassword(newEmail, newPassword)
    .then((userCredential) => {
      console.log("Account created:", userCredential.user.email);
      showSignupMsg("Account Created Successfully ✔", "green");
      showToast("Welcome to AgriNext 🌱 Account created!", "success");

      // Switch to email login tab after 1.5s
      setTimeout(() => {
        toggleTab(emailTab, [signupTab, phoneTab]);
        showBox(emailBox, [signupBox, phoneBox]);
        popupImage.src = "./images/login1.png";
        document.getElementById("signupEmail").value = "";
        document.getElementById("signupPassword").value = "";
        document.getElementById("signupConfirm").value = "";
        showSignupMsg("", "");
      }, 1500);
    })
    .catch((err) => {
      console.error("Signup error:", err.code, err.message);

      // Friendly error messages
      if (err.code === "auth/email-already-in-use") {
        showSignupMsg("Email already registered. Try logging in ✉️", "orange");
      } else if (err.code === "auth/invalid-email") {
        showSignupMsg("Invalid email format ❌", "red");
      } else if (err.code === "auth/weak-password") {
        showSignupMsg("Password too weak. Use 6+ characters 🔒", "red");
      } else if (err.code === "auth/network-request-failed") {
        showSignupMsg("Network error. Check your internet 🌐", "red");
      } else {
        showSignupMsg(err.message, "red");
      }
    });
};

function showSignupMsg(msg, color) {
  const signupMsg = document.getElementById("signupMsg");
  signupMsg.innerText = msg;
  signupMsg.style.color = color;
}

// ======================
// PHONE OTP LOGIN
// ======================
let recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha-container");

document.getElementById("sendOtpBtn").onclick = () => {
  const phoneVal = document.getElementById("phone").value.trim();
  auth
    .signInWithPhoneNumber(phoneVal, recaptcha)
    .then((res) => {
      window.confirmationResult = res;
      document.getElementById("otpSection").style.display = "block";
      document.getElementById("otpMsg").innerText = "OTP Sent ✔";
      document.getElementById("otpMsg").style.color = "green";
    })
    .catch((err) => showToast(err.message, "error"));
};

document.getElementById("verifyOtpBtn").onclick = () => {
  const otpVal = document.getElementById("otp").value.trim();
  confirmationResult
    .confirm(otpVal)
    .then(() => successLogin())
    .catch(() => showToast("Invalid OTP ❌", "error"));
};

// ======================
// SUCCESS LOGIN
// ======================
function successLogin() {
  loginPopup.style.display = "none";
  showToast("Login Successful 👨‍🌾", "success");
}

// ======================
// AUTH STATE & PROFILE
// ======================
const profileBtn = document.getElementById("profileBtn");
profileBtn.style.display = "none";

auth.onAuthStateChanged((user) => {
  if (user) {
    profileBtn.style.display = "block";
    openLoginBtn.style.display = "none";
  } else {
    profileBtn.style.display = "none";
    openLoginBtn.style.display = "block";
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
  const user = auth.currentUser;
  if (user) {
    profileName.innerHTML = "👨‍🌾 " + user.email;
    openLoginFromProfile.style.display = "none";
    logoutFromProfile.style.display = "block";
  } else {
    profileName.innerHTML = "You are not logged in";
    openLoginFromProfile.style.display = "block";
    logoutFromProfile.style.display = "none";
  }
};

closeProfile.onclick = () => (profilePopup.style.display = "none");

openLoginFromProfile.onclick = () => {
  profilePopup.style.display = "none";
  loginPopup.style.display = "flex";
};

logoutFromProfile.onclick = () => {
  auth.signOut().then(() => {
    showToast("Logged Out Successfully 👨‍🌾", "success");
    profilePopup.style.display = "none";
  });
};

// ======================
// LOGIN REQUIRED ON FEATURES
// ======================
function requireLogin(callback) {
  const user = auth.currentUser;
  if (user) {
    callback();
  } else {
    loginPopup.style.display = "flex";
  }
}

document.querySelectorAll("a.btn, a.buttonn").forEach((link) => {
  link.addEventListener("click", function (e) {
    const target = this.getAttribute("href");
    e.preventDefault();
    requireLogin(() => {
      window.location.href = target;
    });
  });
});

// ======================
// GOOGLE LOGIN
// ======================
document.addEventListener("DOMContentLoaded", function () {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const googleBtn = document.getElementById("googleLoginBtn");

  if (googleBtn) {
    googleBtn.addEventListener("click", function () {
      auth
        .signInWithPopup(googleProvider)
        .then((result) => {
          loginPopup.style.display = "none";
          showToast("Google Login Successful 👨‍🌾", "success");
          console.log(result.user);
        })
        .catch((error) => {
          console.error(error);
          showToast(error.message, "error");
        });
    });
  }
});

// ======================
// TOAST NOTIFICATION
// ======================
function showToast(message, type = "info") {
  const old = document.getElementById("agrinext-assist");
  if (old) old.remove();

  const toast = document.createElement("div");
  toast.id = "agrinext-assist";

  const icon =
    type === "error" ? "🙆" : type === "success" ? "🌱" : "🌿";

  toast.innerHTML = `
    <div class="agri-card">
      <div class="agri-icon">${icon}</div>
      <div class="agri-content">
        <div class="agri-title">AgriNext Assist</div>
        <div class="agri-message">${message}</div>
      </div>
    </div>
  `;

  Object.assign(toast.style, {
    position: "fixed",
    top: "85px",
    right: "28px",
    width: "320px",
    padding: "16px",
    borderRadius: "20px",
    background: "rgba(255,255,255,0.88)",
    backdropFilter: "blur(14px)",
    WebkitBackdropFilter: "blur(14px)",
    boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
    borderLeft: "6px solid #2e7d32",
    zIndex: "99999999",
    opacity: "0",
    transform: "translateY(-15px)",
    transition: "all 0.5s ease",
  });

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "1";
    toast.style.transform = "translateY(0)";
  }, 60);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(-15px)";
    setTimeout(() => toast.remove(), 500);
  }, 3800);
}