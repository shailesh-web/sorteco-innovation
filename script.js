document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  let name = document.getElementById("name").value;
  document.getElementById("message").textContent = `Thank you, ${name}, for visiting Sorteco Innovation!`;
});
