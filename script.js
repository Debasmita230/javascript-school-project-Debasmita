document.addEventListener("DOMContentLoaded", () => {
  const timeline = document.querySelector(".timeline"); 
  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("modal-content");
  const modalClose = document.getElementById("modal-close");

  fetch("data/events.json")
    .then(res => res.json())
    .then(events => {
      events.forEach(event => {
        const marker = document.createElement("div");
        marker.className = "event-marker";
        marker.innerHTML = `
          <h3>${event.title}</h3>
          <time>${event.year}</time>
        `;

        marker.addEventListener("click", () => {
          modalContent.innerHTML = `
            <h2>${event.title}</h2>
            <time>${event.year}</time>
            <p>${event.description}</p>
            ${event.imageURL ? `<img src="${event.imageURL}" alt="${event.title}">` : ""}
            <small>Category: ${event.category}</small>
          `;
          modal.style.display = "block";
        });

        timeline.appendChild(marker);
      });
    })
    .catch(err => console.error("Error loading events.json:", err));

  modalClose.addEventListener("click", () => modal.style.display = "none");
  window.addEventListener("click", e => {
    if (e.target === modal) modal.style.display = "none";
  });

  // (Optional) Let users close modal with ESC key
  window.addEventListener("keydown", e => {
    if (e.key === "Escape") modal.style.display = "none";
  });
});
