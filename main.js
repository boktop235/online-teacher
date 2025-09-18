const scrollContainer = document.querySelector(".keys_grid");

scrollContainer.addEventListener("scroll", () => {
  scrollLeftBtn.style.opacity = scrollContainer.scrollLeft > 0 ? "1" : "0.5";
  scrollRightBtn.style.opacity =
    scrollContainer.scrollLeft <
    scrollContainer.scrollWidth - scrollContainer.clientWidth ? "1" : "0.5";
});
