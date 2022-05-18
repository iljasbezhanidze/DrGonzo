//burger
let burger = document.querySelector('.b-burger'),
    dropMenu = document.querySelector('.b-drop-menu')

burger.onclick = function () {
    this.classList.toggle('burger-toggle')
    dropMenu.classList.toggle('burger-toggle')
}



//copy in buffer
try {
    const copyBtn = document.querySelector('.b-increase-balance__copy-btn'),
        copyTarget = document.querySelector('.b-increase-balance__coin-addresss')

    function copyInBuffer(btn, copy) {
        btn.onclick = () => navigator.clipboard.writeText(copy)
    }
    copyInBuffer(copyBtn, copyTarget.value)
} catch {}



//responsive menu
const mainMenu = document.querySelector('.b-menu__list_mob')
const dropDown = document.querySelector('.b-drop-menu__list')

function wrapMenu() {
    if(mainMenu.children.length > 3) {
        dropDown.prepend(mainMenu.lastElementChild)
        wrapMenu()
    }
}

window.addEventListener('DOMContentLoaded', wrapMenu)




















// let logo = document.querySelector('.b-logo'),
//     menu = document.querySelector('.b-menu__list'),
//     header = document.querySelector('.b-header_pc'),
//     flag = false

// window.onload = function () {
//     let allWidth = window.innerWidth
//     logoWidth = logo.clientWidth;
//     menuWidth = menu.clientWidth;
//     let widthContent = logoWidth + menuWidth
//     if (widthContent + 60 >= allWidth) {
//         flag = true
//         if (flag) {
//             const breakpoint = window.innerWidth
//             header.classList.add('toggle-menu')
//             console.log('Desktop')

//             if (window.innerWidth >= breakpoint) {
//                 header.classList.remove('toggle-menu')
//                 console.log('Mobile')
//             }
//         }
//     }
// };