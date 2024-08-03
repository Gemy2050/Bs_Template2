window.onload = () => {
  document.body.style.overflow = "auto";
  document.querySelector(".loading").style.cssText =
    "display: none !important;";
};

// Scroll To Top Button
let scrollBtn = document.querySelector(".scroll");
let speakersSection = document.querySelector(".speakers");
window.onscroll = () => {
  if (window.scrollY >= speakersSection.offsetTop) {
    scrollBtn.style.right = "15px";
  } else {
    scrollBtn.style.right = "-100px";
  }
};
scrollBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Animate Navbar
window.addEventListener("scroll", (e) => {
  if (window.scrollY > 50) {
    document.querySelector("nav").style.height = "60px";
    document.querySelector("nav").style.backgroundColor = "rgba(0 0 0)";
  } else {
    document.querySelector("nav").style.height = "75px";
    document.querySelector("nav").style.backgroundColor = "rgba(0 0 0 /0.7)";
  }
});

// Move Background on Scrolling
const backgroundImage = document.querySelector(".landing img");
window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  backgroundImage.style.transform = `translateY(-${scrollPosition * 0.5}px)`;
});

// Handle Event
let countDownDate = new Date("Jan 01, 2025 00:00:00").getTime();

let intervalId = setInterval(() => {
  let currentDate = new Date().getTime();
  let diff = countDownDate - currentDate;

  let months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
  let days = Math.floor(
    (diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
  );
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.querySelector(".about .months").innerHTML =
    months < 10 ? `0${months}` : months;
  document.querySelector(".about .days").innerHTML =
    days < 10 ? `0${days}` : days;
  document.querySelector(".about .hours").innerHTML =
    hours < 10 ? `0${hours}` : hours;
  document.querySelector(".about .minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".about .seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (diff <= 0) {
    clearInterval(intervalId);
  }
}, 1000);

// Filter Schedule
let tabs = document.querySelectorAll(".tabs .tab");

tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    document.querySelector(".tabs .active").classList.remove("active");
    e.currentTarget.classList.add("active");
    document.querySelectorAll(".schedule .box").forEach((box) => {
      if (box.dataset.day == e.currentTarget.dataset.day) {
        console.log(box);
        box.classList.remove("hide");
      } else {
        console.log("Deleted", box);
        box.classList.add("hide");
      }
    });
  });
});
