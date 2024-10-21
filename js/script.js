    window.addEventListener("scroll", function () {
            var nav = this.document.querySelector("nav");
            nav.classList.toggle("sticky", window.scrollY > 0);
        });


        // untuk hamburger

        const menuToggle = document.querySelector('.menu-toggle input');
        const nav = document.querySelector('nav ul');

        menuToggle.addEventListener('click', function () {
            nav.classList.toggle('slide')
        });


        // Untuk animasi mengetik
        var typed = new Typed('.typing-text', {
            strings: ["‎ peduli terhadap mereka", "‎ Bantu mereka yang kesulitan.", "‎ hijaukan bersama."],
            typeSpeed: 60,
            backSpeed: 25,
            backDelay: 2000,
            loop: true
        });