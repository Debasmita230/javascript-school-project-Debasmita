export function showModal(html: string): void {
  const overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.inset = "0";
  overlay.style.background = "rgba(0,0,0,0.35)"; // background remains visible
  overlay.style.display = "grid";
  overlay.style.placeItems = "center";
  overlay.style.zIndex = "9999";

  const box = document.createElement("div");
  box.setAttribute("role", "dialog");
  box.setAttribute("aria-modal", "true");
  box.style.maxWidth = "600px";
  box.style.width = "90%";
  box.style.background = "white";
  box.style.padding = "16px";
  box.style.borderRadius = "12px";
  box.innerHTML = `${html}
    <div style="text-align:right;margin-top:12px">
      <button id="close-modal" style="padding:6px 12px">Close</button>
    </div>`;

  overlay.appendChild(box);
  document.body.appendChild(overlay);

  const close = () => overlay.remove();
  overlay.addEventListener("click", (e) => { if (e.target === overlay) close(); });
  box.querySelector("#close-modal")?.addEventListener("click", close);
}
