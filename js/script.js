let groups = [
    {
        id: 1,
        url: 'https://www.facebook.com/groups/3443734562391979',
    },
    {
        id: 2,
        url: 'https://www.facebook.com/groups/expatsgeorgia',
    },
    {
        id: 3,
        url: 'https://www.facebook.com/groups/461962624218579',
    },
    {
        id: 4,
        url: 'https://www.facebook.com/groups/1430727040517949',
    },
    {
        id: 5,
        url: 'https://www.facebook.com/groups/1773883749528752',
    },
    {
        id: 6,
        url: 'https://www.facebook.com/groups/350357658821902',
    },
]
const imageInput = document.querySelector('#image-uploader');
const imagesWrapper = document.querySelector('.images-wrapper');
const imagesCounter = document.querySelector('.images-counter');
const groupUrls = document.querySelector('.urls-wrapper');
const selectAllCheckbox = document.querySelector('#select-all')
let selectAllLabel = document.querySelector('#select-unselect')


selectAllCheckbox.addEventListener('change', function () {
    const checkBoxes = document.querySelectorAll('.group-checkbox');
    checkBoxes.forEach((checkbox) => {
        if(selectAllCheckbox.checked) {
            checkbox.checked = true
            selectAllLabel.textContent = 'Uncheck all'
        }else {
            checkbox.checked = false
            selectAllLabel.textContent = 'Check all'
        }
    })
})
imageInput.addEventListener('change', function (e) {
    previewImages (e)
})



renderItems(groups)


function renderItems (arr) {
    arr.forEach(element => {
        const group = document.createElement('li')
        group.classList.add('url-wrapper')
        groupUrls.append(group)
        group.innerHTML =  
        `
            <input type="checkbox" id=${"group" + element.id} class="group-checkbox">
            <label for=${"group" + element.id} class="group-address">${element.url}</label>
        `
    });
}








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