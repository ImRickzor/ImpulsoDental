
const hasRedirected = sessionStorage.getItem('hasRedirected');
if (!hasRedirected) {
    let lang = navigator.language.slice(0, 2); // Get the first two letters of user's language preference

    const englishURL = '../english/index.html';
    const spanishURL = '../español/index.html';

    if (lang === 'es') {
        // Redirect to the Spanish version if the user's language is Spanish
        document.querySelectorAll('.english').forEach(elem => elem.style.display = 'none');
        window.location.href = spanishURL;
    } else if (lang === 'en') {
        // Redirect to the English version if the user's language is English
        document.querySelectorAll('.spanish').forEach(elem => elem.style.display = 'none');
        window.location.href = englishURL;
    } else {
        // Handle other languages or provide a default language here
        document.querySelectorAll('.spanish').forEach(elem => elem.style.display = 'none');
        window.location.href = englishURL;
    }
  // Set the redirection flag in session storage to prevent further redirection
  sessionStorage.setItem('hasRedirected', 'true');
}


// JavaScript for toggling the mobile menu
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector(".mobile-menu");
const address = document.querySelector(".address");

hamburger.addEventListener('click', () => {
    
    hamburger.classList.toggle('active');
    if(mobileMenu.style.display ==="none" || mobileMenu === "" ){
        mobileMenu.style.display ="block";
        address.style.display = "none"
        hamburger.style.marginTop= "0.5rem";
        hamburger.style.marginBottom= "-3rem"
    
    } else {
            mobileMenu.style.display ="none";
            address.style.display = "block";
            hamburger.style.marginTop = "-3.5rem";
            hamburger.style.marginBottom= "0.5rem"
        }
});

        function toggleContent(button) {
        let lang = navigator.language.slice(0, 2);
        const contenidoOculto = button.parentElement.querySelector('.contenido-oculto');
        if (contenidoOculto.style.display === 'none' || contenidoOculto.style.display === '') {
            contenidoOculto.style.display = 'block';
            if(lang ==="es"){
                button.textContent = 'Leer menos';
            } else{
                    button.textContent = "Read less"
                }
           
        } else {
            contenidoOculto.style.display = 'none';
            if (lang ==="es"){
                button.textContent = 'Leer más';
            } else{
                button.textContent = "Read more"
            }
            
        }
    }

    const carousel = document.querySelector(".carousel");
    if(carousel.style.display==="none" || carousel.style.display===""){

        }else {
                let currentSlide = 0;
                const slides = document.querySelectorAll('.slide');
                
                function showSlide(n) {
                    slides[currentSlide].style.display = 'none';
                    currentSlide = (n + slides.length) % slides.length;
                    slides[currentSlide].style.display = 'block';
                }
                function nextSlide() {
                    showSlide(currentSlide + 1);
                }
                setInterval(nextSlide, 5000);
                showSlide(0);     
              }



const currentPageURL = window.location.href;


if (currentPageURL.includes("services.html")) {
 
  const orthodonticsDiv = document.querySelector('.orthodontics');
  const listItems = document.querySelectorAll('.list-group-item');
  let lang = navigator.language.slice(0, 2);
  
  listItems.forEach((item) => {
    item.addEventListener('click', function (event) {
      event.preventDefault(); 

      
      const linkText = this.querySelector('a').textContent;

     
    if (lang === 'es') {
        if (linkText === 'Ortodoncia') {
            orthodonticsDiv.querySelector('h2').textContent = 'Ortodoncista';
            orthodonticsDiv.querySelector('p').textContent =
              'Ofrecemos servicios de ortodoncia de alta calidad para corregir problemas de alineación dental. Nuestro equipo de ortodoncistas altamente capacitados se encargará de tu sonrisa.';
            const listItems = orthodonticsDiv.querySelectorAll('li');
            listItems[0].textContent = 'Corrección de mordida';
            listItems[1].textContent = 'Alineación de dientes';
            listItems[2].textContent = 'Tratamientos personalizados';
            listItems[3].textContent = 'Seguimiento continuo';
          } else if (linkText === 'Implantes dentales') {
            orthodonticsDiv.querySelector('h2').textContent = 'Implantes dentales';
            orthodonticsDiv.querySelector('p').textContent =
              'Ofrecemos servicios de implantes dentales de primera calidad para restaurar tus dientes perdidos. Nuestro experimentado equipo te ayudará a recuperar tu hermosa sonrisa.';
            const listItems = orthodonticsDiv.querySelectorAll('li');
            listItems[0].textContent = 'Consulta de implantes';
            listItems[1].textContent = 'Colocación quirúrgica';
            listItems[2].textContent = 'Restauración de implantes';
          } else if (linkText === 'Blanqueamiento dental') {
            orthodonticsDiv.querySelector('h2').textContent = 'Blanqueamiento dental';
            orthodonticsDiv.querySelector('p').textContent =
              'Transforma tu sonrisa con nuestro tratamiento de blanqueamiento dental de última generación. Te ayudamos a conseguir dientes más blancos y radiantes de manera segura y efectiva, realzando tu belleza natural.';
            const listItems = orthodonticsDiv.querySelectorAll('li');
            listItems[0].textContent = 'Servicios de blanqueamiento profesional';
            listItems[1].textContent = 'Tratamiento seguro y efectivo';
            listItems[2].textContent = 'Realza tu belleza natural';
            listItems[3].textContent = 'Sonrisa radiante y segura';
          } else if (linkText === 'Extracciones') {
            orthodonticsDiv.querySelector('h2').textContent = 'Extracciones';
            orthodonticsDiv.querySelector('p').textContent =
              'Nuestros hábiles profesionales dentales realizan extracciones con precisión y cuidado. Ya sea que necesites una extracción simple o una extracción quirúrgica más compleja, estamos aquí para ayudarte.';
            const listItems = orthodonticsDiv.querySelectorAll('li');
            listItems[0].textContent = 'Extracciones simples y quirúrgicas';
            listItems[1].textContent = 'Equipo dental experimentado';
            listItems[2].textContent = 'Cómodo y sin dolor';
            listItems[3].textContent = 'Orientación posterior a la extracción';
          }
          
    } else {
        if (linkText === 'Orthodontics') {
            orthodonticsDiv.querySelector('h2').textContent = 'Orthodontist';
            orthodonticsDiv.querySelector('p').textContent =
              'We offer high-quality orthodontic services to correct dental alignment problems. Our team of highly trained orthodontists will take care of your smile.';
            const listItems = orthodonticsDiv.querySelectorAll('li');
            listItems[0].textContent = 'Bite correction';
            listItems[1].textContent = 'Teeth alignment';
            listItems[2].textContent = 'Personalized treatments';
            listItems[3].textContent = 'Continuous monitoring';
          } else if (linkText === 'Dental implants') {
            
            orthodonticsDiv.querySelector('h2').textContent = 'Dental Implants';
            orthodonticsDiv.querySelector('p').textContent =
              'We provide top-notch dental implant services to restore your missing teeth. Our experienced team will help you regain your beautiful smile.';
            const listItems = orthodonticsDiv.querySelectorAll('li');
            listItems[0].textContent = 'Implant consultation';
            listItems[1].textContent = 'Surgical placement';
            listItems[2].textContent = 'Implant restoration';
          } else if (linkText === 'Dental Whitening') {
            orthodonticsDiv.querySelector('h2').textContent = 'Dental Whitening';
            orthodonticsDiv.querySelector('p').textContent =
              'Transform your smile with our cutting-edge teeth whitening treatment. We help you achieve whiter, more radiant teeth safely and effectively, enhancing your natural beauty.';
            const listItems = orthodonticsDiv.querySelectorAll('li');
            listItems[0].textContent = 'Professional whitening services';
            listItems[1].textContent = 'Safe and effective treatment';
            listItems[2].textContent = 'Enhance your natural beauty';
            listItems[3].textContent = 'Radiant and confident smile';
          } else if (linkText === 'Extractions') {
            orthodonticsDiv.querySelector('h2').textContent = 'Extractions';
            orthodonticsDiv.querySelector('p').textContent =
              'Our skilled dental professionals perform extractions with precision and care. Whether you need a simple extraction or a more complex surgical extraction, we are here to help.';
            const listItems = orthodonticsDiv.querySelectorAll('li');
            listItems[0].textContent = 'Simple and surgical extractions';
            listItems[1].textContent = 'Experienced dental team';
            listItems[2].textContent = 'Comfortable and painless';
            listItems[3].textContent = 'Post-extraction care guidance';
          }
    }
    
    });
  });
}
