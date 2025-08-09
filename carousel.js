async function loadCaseStudies() {
  try {
    const res = await fetch("case-studies.json");
    const caseStudies = await res.json();
    const track = document.getElementById("case-study-carousel");

    caseStudies.forEach(cs => {
      const card = document.createElement("div");
      card.className = "carousel-card";
      card.innerHTML = `
        <img src="${cs.image}" alt="${cs.title}">
        <h3>${cs.title}</h3>
        <p>${cs.description}</p>
        <a href="${cs.link}">Find out more →</a>
      `;
      track.appendChild(card);
    });

    setupCarousel();
  } catch (error) {
    console.error("Error loading case studies:", error);
  }
}

function setupCarousel() {
  const track = document.querySelector(".carousel-track");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");
  let position = 0;
  const cardWidth = track.querySelector(".carousel-card").offsetWidth + 20;

  nextBtn.addEventListener("click", () => {
    if (position > -(track.scrollWidth - track.clientWidth)) {
      position -= cardWidth;
      track.style.transform = `translateX(${position}px)`;
    }
  });

  prevBtn.addEventListener("click", () => {
    if (position < 0) {
      position += cardWidth;
      track.style.transform = `translateX(${position}px)`;
    }
  });
}

loadCaseStudies();
