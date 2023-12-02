/* Menu Active Codes */

let targets = document.querySelectorAll("[data-target]");
targets.forEach((element) => {
  element.addEventListener("click", () => {
    var target = document.querySelector(element.dataset.target);
    targets.forEach((element2) => {
      var target2 = document.querySelector(element2.dataset.target);
      element2.style.color = "var(--menu_text_color)";
      target2.style.display = "none";
    });
    element.style.color = "var(--menu_active_text_color)";
    target.style.display = "flex";
  });
});

/* Image format detection and background image setting */

window.addEventListener('load', () => {
  const img = document.querySelector('#background-image-support img');
  let imageUrl;

  switch (img.currentSrc.split('.').pop()) {
    case 'avif':
      imageUrl = '../img/wallpaper.avif';
      break;
    case 'webp':
      imageUrl = '../img/wallpaper.webp';
      break;
    default:
      imageUrl = '../img/wallpaper.png';
      break;
  }

  document.documentElement.style.setProperty('--background_image', `url("${imageUrl}")`);
});