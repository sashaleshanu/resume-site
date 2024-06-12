document.addEventListener("DOMContentLoaded", function() {
  var contactBtn = document.getElementById("contact-btn");
  var contactForm = document.getElementById("contact-form");

  contactBtn.addEventListener("click", function(event) {
    event.stopPropagation(); 
    contactForm.style.display = "block";
  });

  contactForm.addEventListener("click", function(event) {
    event.stopPropagation(); 
  });

  window.addEventListener("click", function(event) {
    if (event.target !== contactBtn && event.target !== contactForm) {
      contactForm.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  var lastName = document.getElementById("last-name");
  var words = ["Leshanu", "Problem Solver", "UML Lover", "IT Passionate"];
  var typingSpeed = 150;
  var waitSpeed = 2000;
  var typedIndex = 0;
  var wordIndex = 0;

  function typeWriter() {
    var text = words[wordIndex];
    lastName.innerHTML = text.substring(0, typedIndex);;

    if (typedIndex >= text.length) {
      typedIndex = 0;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(typeWriter, waitSpeed);
    }
    else {
      typedIndex++;
      setTimeout(typeWriter, typingSpeed);
    }

  }

  typeWriter();
});




