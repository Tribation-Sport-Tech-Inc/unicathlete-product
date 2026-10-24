/* =========================================================
   Shared UnicAthlete prototype helpers
   ========================================================= */

function openBackendNote(noteId) {
  if (typeof backendNotes === "undefined") return;

  const note = backendNotes[noteId];
  if (!note) return;

  const title = document.getElementById("backendModalTitle");
  const body = document.getElementById("backendModalBody");
  const modal = document.getElementById("backendNoteModal");

  if (!title || !body || !modal) return;

  title.textContent = note.title;
  body.textContent = note.body;
  modal.classList.add("visible");
}

function closeBackendNote(event) {
  const modal = document.getElementById("backendNoteModal");
  if (!modal) return;

  if (
    !event ||
    event.target === modal ||
    event.target.classList.contains("backend-modal-close")
  ) {
    modal.classList.remove("visible");
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    const modal = document.getElementById("backendNoteModal");
    if (modal) modal.classList.remove("visible");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector(".nav");
  if (!nav || nav.querySelector(".notification-nav-link")) return;

  const path = window.location.pathname;
  const isRecruiter = path.includes("/recruiter/");
  const isAthlete = path.includes("/athlete/");
  if (!isRecruiter && !isAthlete) return;

  const link = document.createElement("a");
  link.className = "notification-nav-link";
  link.href = "notifications.html";
  link.innerHTML = "<span aria-hidden=\"true\">🔔</span> Notifications <span class=\"notification-nav-count\">4</span>";
  nav.appendChild(link);
});
