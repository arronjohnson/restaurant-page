// fix incorrect view height on mobile devices
function calculateViewHeight() {
  const vh = window.innerHeight;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

export default function setViewHeight() {
  calculateViewHeight();
  window.addEventListener("resize", calculateViewHeight);
  window.addEventListener("orientationchange", calculateViewHeight);
}
