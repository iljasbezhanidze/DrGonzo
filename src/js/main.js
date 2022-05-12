let burger = document.querySelector('.b-burger'),
    dropMenu = document.querySelector('.b-drop-menu')

burger.onclick = function() {
    this.classList.toggle('burger-toggle')
    dropMenu.classList.toggle('burger-toggle')
}

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