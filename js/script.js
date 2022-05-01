let groups = [
    {
        groupId: 1,
        groupUrl: 'https://www.facebook.com/groups/3443734562391979',
        groupType: 'standart'
    },
    {
        groupId: 2,
        groupUrl: 'https://www.facebook.com/groups/expatsgeorgia',
        groupType: 'sale'
    },
    {
        groupId: 3,
        groupUrl: 'https://www.facebook.com/groups/461962624218579',
        groupType: 'standart'
    },
    {
        groupId: 4,
        groupUrl: 'https://www.facebook.com/groups/1430727040517949',
        groupType: 'sale'
    },
    {
        groupId: 5,
        groupUrl: 'https://www.facebook.com/groups/1773883749528752',
        groupType: 'standart'
    },
    {
        groupId: 6,
        groupUrl: 'https://www.facebook.com/groups/350357658821902',
        groupType: 'sale'
    },
]
let accounts = [
    {
        accountId: 1,
        accountUrl: 'archil.gulisashvili@gmail.com',
        gender: 'male',
    },
    {
        accountId: 2,
        accountUrl: 'achiko1460@gmail.com',
        gender: 'male',
    },
    {
        accountId: 3,
        accountUrl: 'marimari987@gmail.com',
        gender: 'female',
    },
    {
        accountId: 4,
        accountUrl: 'ninooo111@gmail.com',
        gender: 'female',
    },
]
const imageInput = document.querySelector('#image-uploader');
const imagesWrapper = document.querySelector('.images-wrapper');
const imagesCounter = document.querySelector('.images-counter');
const groupUrls = document.querySelector('.urls-wrapper');
const accountsWrapper = document.querySelector('.accounts-wrapper')
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



renderGroups(groups)
renderAccounts(accounts)

function renderGroups (arr) {
    arr.forEach(element => {
        const group = document.createElement('li')
        group.classList.add('url-wrapper')
        groupUrls.append(group)
        group.innerHTML =  
        `
            <input type="checkbox" id=${"group" + element.groupId} class="group-checkbox">
            <label for=${"group" + element.groupId} class="group-address">${element.groupUrl}</label>
            <span>${element.groupType}</span>
        `
    });
}

function renderAccounts (arr) {
    arr.forEach(item => {
        const account = document.createElement('li')
        account.classList.add('account-wrapper')
        accountsWrapper.append(account)
        account.innerHTML = 
        `
            <input id=${"account" + item.accountId} type="checkbox" class="account-checkbox">
            <label  for=${"account" + item.accountId} class="account-address">${item.accountUrl}</label>
            <span>${item.gender}</span>
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