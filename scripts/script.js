
const hasRedirected = sessionStorage.getItem('hasRedirected');
if (!hasRedirected) {
    let lang = navigator.language.slice(0, 2); // Get the first two letters of user's language preference

    const englishURL = '../english/index.html';
    const spanishURL = '../español/index.html';

    if (lang === 'es') {
        // Redirect to the Spanish version if the user's language is Spanish
        
        window.location.href = spanishURL;
    } else if (lang === 'en') {
        // Redirect to the English version if the user's language is English
        
        window.location.href = englishURL;
    } else {
        // Handle other languages or provide a default language here
        
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
          } else if (linkText === 'Rehabilitación Oral') {
            orthodonticsDiv.querySelector('h2').textContent = 'Rehabilitación Oral';
            orthodonticsDiv.querySelector('p').textContent =
                'Se trata de un enfoque integral que busca restaurar la función y la estética de la boca. Incluye tratamientos como la colocación de coronas, puentes y prótesis para mejorar la salud oral y restaurar la sonrisa de los pacientes.';
            const listItems = orthodonticsDiv.querySelectorAll('li');
            listItems[0].textContent = 'Restauración oral';
            listItems[1].textContent = 'Prótesis dentales';
            listItems[2].textContent = 'Mejoras estéticas';
            listItems[3].textContent = 'Salud oral óptima';
        } else if (linkText === 'Endodoncia') {
            orthodonticsDiv.querySelector('h2').textContent = 'Endodoncia';
            orthodonticsDiv.querySelector('p').textContent =
                'Se enfoca en el tratamiento de enfermedades y lesiones de la pulpa dental (el tejido interno del diente). Este servicio incluye tratamientos de conducto para salvar los dientes que de lo contrario se perderían.';
            const listItems = orthodonticsDiv.querySelectorAll('li');
            listItems[0].textContent = 'Tratamientos de conducto';
            listItems[1].textContent = 'Especialistas en endodoncia';
            listItems[2].textContent = 'Alivio del dolor';
            listItems[3].textContent = 'Preservación dental';
        } else if (linkText === 'Cirugía Dental') {
            orthodonticsDiv.querySelector('h2').textContent = 'Cirugía Dental';
            orthodonticsDiv.querySelector('p').textContent =
                'Aborda una variedad de procedimientos quirúrgicos en la boca, como extracciones de muelas del juicio, cirugía de implantes dentales y corrección de problemas periodontales. Ofrece soluciones efectivas para varios problemas dentales.';
            const listItems = orthodonticsDiv.querySelectorAll('li');
            listItems[0].textContent = 'Extracciones dentales';
            listItems[1].textContent = 'Cirugía de implantes dentales';
            listItems[2].textContent = 'Tratamientos periodontales';
            listItems[3].textContent = 'Cuidado postoperatorio';
        } else if (linkText === 'Restauradora y Estética') {
            orthodonticsDiv.querySelector('h2').textContent = 'Restauradora y Estética';
            orthodonticsDiv.querySelector('p').textContent =
                'Se enfoca en mejorar la apariencia de los dientes y la sonrisa. Incluye servicios como el blanqueamiento dental, carillas dentales y restauraciones dentales para lograr una sonrisa más hermosa y saludable.';
            const listItems = orthodonticsDiv.querySelectorAll('li');
            listItems[0].textContent = 'Blanqueamiento dental';
            listItems[1].textContent = 'Carillas dentales';
            listItems[2].textContent = 'Restauraciones dentales';
            listItems[3].textContent = 'Estética dental mejorada';
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
          } else if (linkText === 'Oral rehabilitation') {
            orthodonticsDiv.querySelector('h2').textContent = 'Oral Rehabilitation';
            orthodonticsDiv.querySelector('p').textContent =
                'It is a comprehensive approach that seeks to restore the function and aesthetics of the mouth. It includes treatments such as the placement of crowns, bridges, and prostheses to improve oral health and restore the smile of patients.';
            const listItems = orthodonticsDiv.querySelectorAll('li');
            listItems[0].textContent = 'Oral restoration';
            listItems[1].textContent = 'Dental prostheses';
            listItems[2].textContent = 'Aesthetic improvements';
            listItems[3].textContent = 'Optimal oral health';
        } else if (linkText === 'Endodontics') {
            orthodonticsDiv.querySelector('h2').textContent = 'Endodontics';
            orthodonticsDiv.querySelector('p').textContent =
                'It focuses on the treatment of diseases and injuries of the dental pulp (the internal tissue of the tooth). This service includes root canal treatments to save teeth that would otherwise be lost.';
            const listItems = orthodonticsDiv.querySelectorAll('li');
            listItems[0].textContent = 'Root canal treatments';
            listItems[1].textContent = 'Endodontic specialists';
            listItems[2].textContent = 'Pain relief';
            listItems[3].textContent = 'Dental preservation';
        } else if (linkText === 'Dental surgery') {
            orthodonticsDiv.querySelector('h2').textContent = 'Dental Surgery';
            orthodonticsDiv.querySelector('p').textContent =
                'It addresses a variety of surgical procedures in the mouth, such as wisdom tooth extractions, dental implant surgery, and correction of periodontal problems. It provides effective solutions for various dental problems.';
            const listItems = orthodonticsDiv.querySelectorAll('li');
            listItems[0].textContent = 'Dental extractions';
            listItems[1].textContent = 'Dental implant surgery';
            listItems[2].textContent = 'Periodontal treatments';
            listItems[3].textContent = 'Postoperative care';
        } else if (linkText === 'Restorative and aesthetic') {
            orthodonticsDiv.querySelector('h2').textContent = 'Restorative and Aesthetic';
            orthodonticsDiv.querySelector('p').textContent =
                'It focuses on improving the appearance of the teeth and smile. It includes services such as teeth whitening, dental veneers, and dental restorations to achieve a more beautiful and healthy smile.';
            const listItems = orthodonticsDiv.querySelectorAll('li');
            listItems[0].textContent = 'Teeth whitening';
            listItems[1].textContent = 'Dental veneers';
            listItems[2].textContent = 'Dental restorations';
            listItems[3].textContent = 'Enhanced smile aesthetics';
        }
    }
    
    });
  });
}

document.addEventListener('DOMContentLoaded', function () {
  var secondCarousel = new bootstrap.Carousel(document.querySelector('#secondCarousel'), {
    interval: 4000, // Set the autoplay interval in milliseconds (e.g., 4000ms or 4 seconds)
  });

  // Adjust the number of cards displayed based on screen size
  window.addEventListener('resize', function () {
    var cardContainers = document.querySelectorAll('.carousel-item .row');

    cardContainers.forEach(function (container) {
      if (window.innerWidth < 576) {
        // Mobile screens: Display 1 card per slide
        container.classList.remove('col-md-4');
        container.classList.add('col-12');
      } else {
        // Larger screens: Display 3 cards per slide
        container.classList.remove('col-12');
        container.classList.add('col-md-4');
      }
    });

    // Refresh the carousel to apply changes
    secondCarousel.refresh();
  });
});


  // Function to change the image source of a specific element
  function updateSpecificImage() {
    const carouselItem1= document.querySelector('.carousel-content .carousel-item:nth-child(1)'); 
    const imgElement1 = carouselItem1.querySelector('img');
    const carouselItem2= document.querySelector('.carousel-content .carousel-item:nth-child(3)'); 
    const imgElement2 = carouselItem2.querySelector('img');
    const carouselItem3= document.querySelector('.index-about-us-carousel .carousel-item:nth-child(1)'); 
    const imgElement3 = carouselItem3.querySelector('img');

    // Check if the window width is 600 pixels or less
    if (window.innerWidth <= 600) {
      imgElement1.src = "../images/nuestraatencion2.jpg";
      imgElement2.src = "../images/airbnb.png"; 
      imgElement3.src = "../images/cirugiadental2.png"; 
    } else {
      imgElement1.src = "../images/nuestratencion.jpg"
      imgElement2.src = "../images/airbnbwithlogo.png";
      imgElement3.src = "../images/cirugiadental2.png";
    }
  }

  // Attach the function to the window's resize event
  window.addEventListener('resize', updateSpecificImage);
  if (currentPageURL.includes("index.html")) {
  updateSpecificImage();
  }

