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
const groupUrlsStandart = document.querySelector('.urls-wrapper-standart');
const groupUrlsSale = document.querySelector('.urls-wrapper-sale');
const accountsWrapperMale = document.querySelector('.accounts-wrapper-male')
const accountsWrapperFemale = document.querySelector('.accounts-wrapper-female')
const selectAllCheckbox = document.querySelector('#select-all')
let selectAllLabel = document.querySelector('#select-unselect')

const accountArrowBtnMale = document.querySelector('.arrow-icon-male')
const accountArrowBtnFemale = document.querySelector('.arrow-icon-female')
const accountArrowBtnStandart = document.querySelector('.arrow-icon-standart')
const accountArrowBtnSale = document.querySelector('.arrow-icon-sale')


let expandedSale = false
accountArrowBtnSale.addEventListener('click', function () {
    if(!expandedSale) {
        accountArrowBtnSale.style.transform = 'rotate(270deg)'
        groupUrlsSale.classList.add('expanded')
        expandedSale = !expandedSale
    }else {
        accountArrowBtnSale.style.transform = 'rotate(0deg)'
        groupUrlsSale.classList.remove('expanded')
        expandedSale = !expandedSale
    }
})
let expandedStandart = false
accountArrowBtnStandart.addEventListener('click', function () {
    if(!expandedStandart) {
        accountArrowBtnStandart.style.transform = 'rotate(270deg)'
        groupUrlsStandart.classList.add('expanded')
        expandedStandart = !expandedStandart
    }else {
        accountArrowBtnStandart.style.transform = 'rotate(0deg)'
        groupUrlsStandart.classList.remove('expanded')
        expandedStandart = !expandedStandart
    }
})

let expandedMale = false
accountArrowBtnMale.addEventListener('click', function () {
    if(!expandedMale) {
        accountArrowBtnMale.style.transform = 'rotate(270deg)'
        accountsWrapperMale.classList.add('expanded')
        expandedMale = !expandedMale
    }else {
        accountArrowBtnMale.style.transform = 'rotate(0deg)'
        accountsWrapperMale.classList.remove('expanded')
        expandedMale = !expandedMale
    }
    
    
})
let expandedFemale = false
accountArrowBtnFemale.addEventListener('click', function () {
    if(!expandedFemale) {
        accountArrowBtnFemale.style.transform = 'rotate(270deg)'
        accountsWrapperFemale.classList.add('expanded')
        expandedFemale = !expandedFemale
    }else {
        accountArrowBtnFemale.style.transform = 'rotate(0deg)'
        accountsWrapperFemale.classList.remove('expanded')
        expandedFemale = !expandedFemale
    }
    
    
})


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



// renders Groups
function renderGroups (arr) {
    arr.forEach(element => {
        if(element.groupType === 'sale') {
            const group = document.createElement('li')
            group.classList.add('url-wrapper')
            groupUrlsSale.append(group)
            group.innerHTML =  
        `
            <input type="checkbox" id=${"group" + element.groupId} class="group-checkbox">
            <label for=${"group" + element.groupId} class="group-address">${element.groupUrl}</label>
        `
        }else {
            const group = document.createElement('li')
            group.classList.add('url-wrapper')
            groupUrlsStandart.append(group)
            group.innerHTML =  
            `
                <input type="checkbox" id=${"group" + element.groupId} class="group-checkbox">
                <label for=${"group" + element.groupId} class="group-address">${element.groupUrl}</label>
            `
        }
        
    });
}



// renders accounts
function renderAccounts (arr) {
    arr.forEach(item => {
        if(item.gender === 'male') {
            const account = document.createElement('li')
            account.classList.add('account-wrapper')
            accountsWrapperMale.append(account)
            account.innerHTML = 
            `
                <input id=${"account" + item.accountId} type="checkbox" class="account-checkbox">
                <label  for=${"account" + item.accountId} class="account-address">${item.accountUrl}</label>
            `
        }else {
            const account = document.createElement('li')
            account.classList.add('account-wrapper')
            accountsWrapperFemale.append(account)
            account.innerHTML = 
            `
                <input id=${"account" + item.accountId} type="checkbox" class="account-checkbox">
                <label  for=${"account" + item.accountId} class="account-address">${item.accountUrl}</label>
            `
        }
        
    });
}




// shows images while upload
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