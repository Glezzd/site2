document.addEventListener("DOMContentLoaded", () => {
  const dropdownButtons = document.querySelectorAll(".dropdown-btn");

  dropdownButtons.forEach(button => {
    button.addEventListener("click", () => {
      const parent = button.parentElement;
      parent.classList.toggle("active");
    });
  });
});
