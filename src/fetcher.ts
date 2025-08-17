import { EventData } from "./types";

const DATA_URL = "data/events.json";

export async function fetchEvents(): Promise<EventData[]> {
  const res = await fetch(DATA_URL);
  if (!res.ok) {
    throw new Error(`HTTP ${res.status} while fetching ${DATA_URL}`);
  }
  return res.json() as Promise<EventData[]>;
}
