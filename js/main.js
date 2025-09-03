// MusiShop - JavaScript Interactions
document.addEventListener('DOMContentLoaded', function() {
    
    // Hamburger Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });
        
        // Close menu when clicking on a link
        const menuLinks = navLinks.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.classList.remove('no-scroll');
            });
        });
    }
    
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Intersection Observer for animations on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);
    
    // Observe animated elements
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .bounce-in');
    animatedElements.forEach(element => {
        observer.observe(element);
    });
    
    // Form validation and submission
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const requiredFields = contactForm.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });
            
            if (isValid) {
                // Simulate form submission
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                
                submitBtn.textContent = 'Enviando...';
                submitBtn.disabled = true;
                
                setTimeout(() => {
                    alert('¡Mensaje enviado correctamente! Te contactaremos pronto.');
                    contactForm.reset();
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }, 2000);
            } else {
                alert('Por favor completa todos los campos obligatorios.');
            }
        });
    }
    
    // Product card hover effects
    const productCards = document.querySelectorAll('.product-card, .instrument-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Gallery item interactions
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            const overlay = this.querySelector('.overlay h3');
            
            if (img && overlay) {
                // Simple lightbox effect
                const lightbox = document.createElement('div');
                lightbox.className = 'lightbox';
                lightbox.innerHTML = `
                    <div class="lightbox-content">
                        <span class="lightbox-close">&times;</span>
                        <img src="${img.src}" alt="${img.alt}">
                        <h3>${overlay.textContent}</h3>
                    </div>
                `;
                
                document.body.appendChild(lightbox);
                document.body.classList.add('no-scroll');
                
                // Close lightbox
                const closeBtn = lightbox.querySelector('.lightbox-close');
                closeBtn.addEventListener('click', () => {
                    document.body.removeChild(lightbox);
                    document.body.classList.remove('no-scroll');
                });
                
                lightbox.addEventListener('click', (e) => {
                    if (e.target === lightbox) {
                        document.body.removeChild(lightbox);
                        document.body.classList.remove('no-scroll');
                    }
                });
            }
        });
    });
    
    // Add loading animation to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        if (!button.type || button.type !== 'submit') {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                const originalText = this.textContent;
                this.textContent = 'Cargando...';
                this.disabled = true;
                
                setTimeout(() => {
                    this.textContent = originalText;
                    this.disabled = false;
                    
                    // Simulate navigation or action
                    if (this.href && this.href !== '#') {
                        window.location.href = this.href;
                    }
                }, 1000);
            });
        }
    });
});

// Lightbox CSS (injected dynamically)
const lightboxStyles = `
    .lightbox {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        animation: fadeIn 0.3s ease;
    }
    
    .lightbox-content {
        position: relative;
        max-width: 90%;
        max-height: 90%;
        text-align: center;
    }
    
    .lightbox-content img {
        max-width: 100%;
        max-height: 80vh;
        object-fit: contain;
        border-radius: 8px;
    }
    
    .lightbox-content h3 {
        color: white;
        margin-top: 1rem;
        font-size: 1.5rem;
    }
    
    .lightbox-close {
        position: absolute;
        top: -40px;
        right: 0;
        color: white;
        font-size: 2rem;
        cursor: pointer;
        font-weight: bold;
        transition: color 0.3s ease;
    }
    
    .lightbox-close:hover {
        color: #ff6b35;
    }
    
    .error {
        border-color: #e74c3c !important;
        background-color: #fdf2f2 !important;
    }
`;

// Inject lightbox styles
const styleSheet = document.createElement('style');
styleSheet.textContent = lightboxStyles;
document.head.appendChild(styleSheet);
