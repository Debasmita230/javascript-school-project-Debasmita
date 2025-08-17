import { EventData } from "./types";
import { showModal } from "./modal";

export function renderEvents(events: EventData[]): void {
  const container = document.getElementById("timeline") as HTMLDivElement | null;
  if (!container) throw new Error("#timeline not found");

  container.innerHTML = "";

  events.forEach((ev) => {
    const el = document.createElement("div");
    el.className = "event";
    el.style.border = "1px solid #ddd";
    el.style.padding = "12px";
    el.style.borderRadius = "8px";
    el.style.margin = "8px 0";
    el.style.cursor = "pointer";

    el.innerHTML = `
      <h3 style="margin:0 0 6px">${ev.year} — ${ev.title}</h3>
      <p style="margin:0">${ev.description}</p>
    `;

    el.addEventListener("click", () => {
      showModal(`
        <h3 style="margin:0 0 8px">${ev.title} (${ev.year})</h3>
        <p style="margin:0 0 8px">${ev.description}</p>
        <small>Category: ${ev.category}</small>
      `);
    });

    container.appendChild(el);
  });
}
