// ==========================================
//  GRAPES JOURNEY - CLONE SCRIPT
// ==========================================

/**
 * Simulated farm data (in a real app this would come from an API or URL params)
 */
const farmData = {
  farmerName: "",
  variety: "",
  location: "",
};

/**
 * Populate hero info fields.
 * Values can be passed via URL query params:
 *   ?farmer=John+Doe&variety=Thompson+Seedless&location=Nashik
 */
function loadFarmData() {
  const params = new URLSearchParams(window.location.search);

  const farmer = params.get("farmerName") || farmData.farmerName;
  const variety = params.get("variety") || farmData.variety;
  const location = params.get("location") || farmData.location;

  document.getElementById("farmer-name").textContent = farmer;
  document.getElementById("variety").textContent = variety;
  document.getElementById("location").textContent = location;
}

/**
 * Handle "Get Report" button click
 */
function handleGetReport() {
  const farmerName = document.getElementById("farmer-name").textContent.trim();
  const variety = document.getElementById("variety").textContent.trim();
  const location = document.getElementById("location").textContent.trim();

  const message = farmerName
    ? `Generating report for ${farmerName} (${variety || "N/A"}) at ${location || "N/A"}...`
    : "Generating report...";

  alert(message);
}

/**
 * Scroll-based entrance animation for stage cards
 */
function initScrollAnimations() {
  const cards = document.querySelectorAll(".stage-card, .resource-card, .footer-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  cards.forEach((card) => {
    card.classList.add("animate-on-scroll");
    observer.observe(card);
  });
}

// ==========================================
//  INIT
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  loadFarmData();
  initScrollAnimations();
});
