// Typing effect
const text = "Aspiring Software Engineer | Web Developer | Learner 💻";
let i = 0;
function typing() {
  if (i < text.length) {
    document.querySelector(".typing-text").textContent += text.charAt(i);
    i++;
    setTimeout(typing, 80);
  }
}
typing();

// Dark/Light mode toggle
const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});
