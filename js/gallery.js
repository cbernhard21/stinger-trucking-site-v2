export async function displayGallery() {
  const photoGrid = document.querySelector('.photo-grid');

  try {
    const response = await fetch('./js/gallery.json');
    const data = await response.json();
    const images = data.images;

    let imagesHTML = images
      .map((image) => {
        return `
        <div class="card ${image.class}">
          <img src="${image.src}">
        </div>
      `;
      })
      .join('');

    photoGrid.innerHTML = imagesHTML;
  } catch (error) {
    console.log(error);
  }
}
