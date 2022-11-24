document.querySelectorAll(".box").forEach((item) => {
  item.addEventListener("click", () => {
    if (item.classList.contains("light")) {
      item.classList.remove("light");
      item.classList.add("dark");
    } else if (item.classList.contains("dark")) {
      item.classList.remove("dark");
      item.classList.add("light");
    }
  });
});