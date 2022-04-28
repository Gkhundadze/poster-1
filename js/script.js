let imageInput = document.querySelector('#image-uploader');
let imagesWrapper = document.querySelector('.images-wrapper')
let imagesCounter = document.querySelector('.images-counter');

imageInput.addEventListener('change', function (e) {
    previewImages (e)
})


function previewImages (e) {
    imagesWrapper.innerHTML = ''
    imagesCounter.textContent = `${e.target.files.length} files selected`;
    for (i of e.target.files) {
        let reader = new FileReader();
        reader.onload = () => {
            let imgWrapper = document.createElement('div')
            imgWrapper.setAttribute('class', 'img-wrapper')
            let image = document.createElement('img')
            image.classList.add('preview-image')
            image.setAttribute('src', reader.result)
            imgWrapper.append(image)
            imagesWrapper.append(imgWrapper);
        }
        reader.readAsDataURL(i)
    }

}