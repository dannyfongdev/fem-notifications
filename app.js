// Define UI Vars
const markToggle = document.querySelector(".mark-toggle");
const numberUnread = document.querySelector(".number-unread");

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  // Toggle click event
  markToggle.addEventListener("click", markAllAsRead);
}

// Mark All Notifications As Read
function markAllAsRead(e) {
  document.querySelectorAll(".card.unread").forEach(function (card) {
    card.classList.remove("unread");
  });
  document.querySelectorAll("i.unread-dot").forEach(function (dot) {
    dot.remove();
  });
  numberUnread.innerHTML = "0";
  e.preventDefault();
}
