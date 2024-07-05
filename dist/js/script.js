// Navbar Fixed
window.onscroll = function () { 
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
}

// Humberger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// Click diluar hamburger
window.addEventListener('click', function(e) {
    if(e.target != hamburger && e.target != navMenu){
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});

// Darkmode
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () { 
    if (darkToggle.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
});


// Pindah posisi toggle
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
} else {
    darkToggle.checked = false;
}

// Form
const form = document.querySelector("form");
const name = document.getElementById("name");
const subject = document.getElementById("subject");
const email = document.getElementById("email");
const message = document.getElementById("message");

function sendEmail(){
    const bodyMessage = `Name: ${name.value}<br> Email: ${email.value}<br> Message: ${message.value}`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "sigitkhoirunnizam11@gmail.com",
        Password : "5E33DC068F20D1DAC040AB6A41691A58ADAF",
        To : 'sigitkhoirunnizam11@gmail.com',
        From : 'sigitkhoirunnizam11@gmail.com',
        Subject : subject.value,
        Body : bodyMessage
    }).then(
        message => {
            if (message == "OK"){
                Swal.fire({
                    title: "Sukses!",
                    text: "Pesan berhasil dikirim!",
                    icon: "success"
                });
            }
        }
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
});