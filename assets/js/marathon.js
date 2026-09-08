document.querySelectorAll(".marathon-photo").forEach((photo) => {
  photo.addEventListener("click", () => {
    photo.setAttribute("aria-pressed", String(photo.getAttribute("aria-pressed") !== "true"));
  });

  photo.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      photo.setAttribute("aria-pressed", "false");
      photo.blur();
    }
  });
});
