document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopButton = document.getElementById("scroll-to-top");

  // Add a click event listener to the image
  scrollToTopButton.addEventListener("click", function () {
    // Scroll the page to the top
    window.scrollTo({
      top: 1000,
      behavior: "smooth", // Smooth scrolling effect
    });
  });
});
