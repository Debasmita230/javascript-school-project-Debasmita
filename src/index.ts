import { fetchEvents } from "./fetcher";
import { renderEvents } from "./renderer";

async function initApp(): Promise<void> {
  try {
    const events = await fetchEvents();
    renderEvents(events);
  } catch (err) {
    console.error("Failed to initialize app:", err);
  }
}

document.addEventListener("DOMContentLoaded", initApp);


