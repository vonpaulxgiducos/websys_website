// Toggle mobile navbar
function toggleNavbar() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("open");
}

// Close menu when a nav link is clicked (mobile UX)
document.querySelectorAll(".nav-links a").forEach(function(link) {
  link.addEventListener("click", function() {
    document.querySelector(".nav-links").classList.remove("open");
  });
});

// Highlight active nav link based on scroll position
var sections = document.querySelectorAll("section[id], footer[id]");
var navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function() {
  var current = "";

  // If scrolled to the bottom, force Contact active
  var atBottom = window.scrollY + window.innerHeight >= document.body.scrollHeight - 5;
  if (atBottom) {
    current = "footer";
  } else {
    sections.forEach(function(section) {
      if (window.scrollY >= section.offsetTop - 90) {
        current = section.getAttribute("id");
      }
    });
  }

  navLinks.forEach(function(link) {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// Show current date & time
function showDate() {
  var now = new Date();
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  };
  document.getElementById("demo").textContent = now.toLocaleDateString("en-US", options);
}
