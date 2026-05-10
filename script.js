// script.js

const images = [
  {
    url: "https://images.unsplash.com/photo-1558979158-65a1eaa08691?auto=format&fit=crop&w=1350&q=80",
    text: "Explore the world",
  },
  {
    url: "https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?auto=format&fit=crop&w=1350&q=80",
    text: "Wild Forest",
  },
  {
    url: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=1350&q=80",
    text: "Sunny Beach",
  },
  {
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1353&q=80",
    text: "City on Winter",
  },
  {
    url: "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?auto=format&fit=crop&w=1351&q=80",
    text: "Mountain Cloud",
  },
];

// Correct method name: getElementById (capital B and I)
const container = document.getElementById("container");

// Create all panels
images.forEach((item, index) => {
  const panel = document.createElement("div");
  panel.className = index === 0 ? "panel active" : "panel";
  panel.id = `panel-${index + 1}`;
  panel.style.backgroundImage = `url('${item.url}')`;

  const text = document.createElement("h3");
  text.className = "img-text";
  text.textContent = item.text;

  panel.appendChild(text);
  container.appendChild(panel);
});

// Add click events
const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", function () {
    // Remove active class from all panels
    panels.forEach((p) => p.classList.remove("active"));

    // Add active class to clicked panel
    this.classList.add("active");
  });
});