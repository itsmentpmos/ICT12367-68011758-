const smallImages = document.querySelectorAll(".gallery img");
const fullImage = document.querySelector(".full-image");
const modal = document.querySelector(".modal");
const caption = document.querySelector(".caption");

smallImages.forEach(img => {
    img.addEventListener("click", () => {
        const fullSizePath = img.getAttribute("data-full");
        const altText = img.getAttribute("alt");
        
        fullImage.src = fullSizePath;
        caption.innerText = altText;
        
        modal.classList.add("open");
    });
});

modal.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
        modal.classList.remove("open");
    }
});