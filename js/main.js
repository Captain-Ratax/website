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