const DATA_URL = "data/events.json";
export async function fetchEvents() {
    const res = await fetch(DATA_URL);
    if (!res.ok) {
        throw new Error(`HTTP ${res.status} while fetching ${DATA_URL}`);
    }
    return res.json();
}
//# sourceMappingURL=fetcher.js.map