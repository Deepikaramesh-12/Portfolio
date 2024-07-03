// let menuIcon = document.querySelector("#menu-icon");
// let navbar = document.querySelector('.navbar');

// menuIcon.onclick = () => (
//     menuIcon.classList.toogle('bx bx-x');
//     navbar.classList.toggle('active')


// let section = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');

// window.onscroll = () => {
//     section.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if(top >= offset && top < offset + height) {
//             navLinks.forEach.apply(Links => {
//                 Links.classList.remove('active');
//                 document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
//             });
//             };
//         });


// let header = document.querySelector('header');
// header.classList.tooglr('sticky', window.scrollY > 100);



// menuIcon.classList.remove('bx bx-x');
// navbar.classList.remove('active');
// });

// // ###############################################################

// ScrollReveal().reveal('.home-content, heading' , { orgin: 'top'});
// ScrollReveal().reveal('.home-img, .experience-container, .portfolio-box, .contact form' , { orgin: 'left'});
// ScrollReveal().reveal('.home-contact h1, .about-img',  { orgin: 'left'});
// ScrollReveal().reveal('.home-contact p, .about-content', { orgin: 'right'});

// // #######################################################################################################

let typed = new typed(".typing",{
    strings: ["Frontend Developer", "Web Designer", "Python Full Stack Developer"],
    typespeed: 100,
    Backspeed: 70,
    backDelay: 1000,
    loop: true
});