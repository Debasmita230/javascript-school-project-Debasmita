document.addEventListener("DOMContentLoaded", () => {
  const timeline = document.getElementById("timeline");
  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("modal-content");
  const modalClose = document.getElementById("modal-close");

  fetch("C:\Users\USER\Desktop\Timeline App\javascript-school-project-Debasmita\data\events.json")
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
            <img src="${event.imageURL}" alt="${event.title}">
            <small>Category: ${event.category}</small>
          `;
          modal.style.display = "block";
        });

        timeline.appendChild(marker);
      });
    });

  modalClose.addEventListener("click", () => modal.style.display = "none");
  window.addEventListener("click", e => {
    if (e.target === modal) modal.style.display = "none";
  });
});
