// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Search Form Handler
const searchForm = document.getElementById('searchForm');
if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = {
            location: document.getElementById('location').value,
            type: document.getElementById('type').value,
            sortBy: document.getElementById('sortBy').value,
            bedrooms: document.getElementById('bedrooms').value,
            baths: document.getElementById('baths').value,
            minPrice: document.getElementById('minPrice').value,
            maxPrice: document.getElementById('maxPrice').value
        };
        
        // In a real application, this would send data to a server
        console.log('Search submitted:', formData);
        
        // Show success message
        alert('Search functionality would connect to a listings database. Your search criteria has been logged to the console.');
    });
}

// Contact Form Handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('contactName').value,
            email: document.getElementById('contactEmail').value,
            message: document.getElementById('contactMessage').value
        };
        
        // In a real application, this would send data to a server
        console.log('Contact form submitted:', formData);
        
        // Show success message
        alert('Thank you for your message! In a production environment, this would be sent to Marci Metzger. Your message has been logged to the console.');
        
        // Reset form
        contactForm.reset();
    });
}

// Scroll Progress Indicator
const scrollProgress = document.createElement('div');
scrollProgress.className = 'scroll-progress';
document.body.appendChild(scrollProgress);

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.pageYOffset / windowHeight) * 100;
    scrollProgress.style.width = scrolled + '%';
});

// Counter Animation for Stats
function animateCounter(element, target, duration = 2000) {
    const isMoney = target.includes('$');
    const isPlus = target.includes('+');
    const numericTarget = parseFloat(target.replace(/[^0-9.]/g, ''));
    const suffix = isMoney ? '$' : '';
    const suffixAfter = isPlus ? '+' : '';
    const isDecimal = numericTarget % 1 !== 0;
    
    let start = 0;
    const increment = numericTarget / (duration / 16);
    const timer = setInterval(() => {
        start += increment;
        if (start >= numericTarget) {
            element.textContent = isMoney 
                ? `$${numericTarget.toFixed(isDecimal ? 1 : 0)}M` 
                : `${Math.floor(numericTarget)}${suffixAfter}`;
            clearInterval(timer);
        } else {
            if (isMoney) {
                element.textContent = `$${start.toFixed(isDecimal ? 1 : 0)}M`;
            } else {
                element.textContent = `${Math.floor(start)}${suffixAfter}`;
            }
        }
    }, 16);
}

// Stats Observer
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            entry.target.classList.add('counted');
            const statNumber = entry.target.querySelector('.stat-number');
            if (statNumber) {
                const targetValue = statNumber.textContent;
                statNumber.textContent = statNumber.textContent.includes('$') ? '$0M' : '0';
                setTimeout(() => {
                    animateCounter(statNumber, targetValue);
                }, 200);
            }
        }
    });
}, { threshold: 0.5 });

// Intersection Observer for luxurious fade-in animations
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) scale(1)';
            }, index * 100);
        }
    });
}, observerOptions);

// Staggered animation observer
const staggerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 150);
        }
    });
}, observerOptions);

// Gallery Lightbox
function createLightbox() {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <span class="lightbox-close">&times;</span>
            <img src="" alt="" class="lightbox-image">
            <button class="lightbox-prev">‹</button>
            <button class="lightbox-next">›</button>
        </div>
    `;
    document.body.appendChild(lightbox);
    
    let currentIndex = 0;
    const galleryImages = Array.from(document.querySelectorAll('.gallery-item img'));
    
    function openLightbox(index) {
        currentIndex = index;
        lightbox.classList.add('active');
        updateLightboxImage();
        document.body.style.overflow = 'hidden';
    }
    
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    function updateLightboxImage() {
        if (galleryImages[currentIndex]) {
            const img = lightbox.querySelector('.lightbox-image');
            img.src = galleryImages[currentIndex].src;
            img.alt = galleryImages[currentIndex].alt || 'Gallery Image';
        }
    }
    
    function nextImage() {
        currentIndex = (currentIndex + 1) % galleryImages.length;
        updateLightboxImage();
    }
    
    function prevImage() {
        currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        updateLightboxImage();
    }
    
    // Event listeners
    lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
    lightbox.querySelector('.lightbox-next').addEventListener('click', nextImage);
    lightbox.querySelector('.lightbox-prev').addEventListener('click', prevImage);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (lightbox.classList.contains('active')) {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
        }
    });
    
    // Attach click handlers to gallery images
    galleryImages.forEach((img, index) => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => openLightbox(index));
    });
}

// Image Lazy Loading
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    // Single elements
    const animateElements = document.querySelectorAll('.stat-card, .service-card, .gallery-item');
    
    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px) scale(0.95)';
        el.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(el);
    });

    // Observe stats for counter animation
    document.querySelectorAll('.stat-card').forEach(card => {
        statsObserver.observe(card);
    });

    // Staggered grid elements
    const gridElements = document.querySelectorAll('.feature-card');
    gridElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateX(-30px)';
        el.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        staggerObserver.observe(el);
    });

    // Parallax effect for hero
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const heroContent = document.querySelector('.hero-content');
            if (heroContent && scrolled < window.innerHeight) {
                heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
                heroContent.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
            }
        });
    }
    
    // Initialize gallery lightbox
    createLightbox();
    
    // Initialize lazy loading
    lazyLoadImages();
});

// Phone number formatting
document.querySelectorAll('.phone-link, .phone-link-large').forEach(link => {
    link.addEventListener('click', (e) => {
        // Analytics tracking could go here
        console.log('Phone link clicked');
    });
});

// Gallery image loading (placeholder for actual images)
// In production, you would load actual images here
document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-image-placeholder');
    
    // Example: You could fetch images from an API or load them dynamically
    // For now, the placeholders will remain
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            console.log(`Gallery item ${index + 1} clicked`);
            // Could open a lightbox or modal here
        });
    });
});

// Add luxurious loading state to buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        if (this.type === 'submit') {
            const originalText = this.textContent;
            this.innerHTML = '<span style="opacity: 0.7">Processing...</span>';
            this.disabled = true;
            this.style.cursor = 'wait';
            
            // Reset after a delay (in production, this would be after server response)
            setTimeout(() => {
                this.innerHTML = originalText;
                this.disabled = false;
                this.style.cursor = 'pointer';
            }, 2000);
        }
    });

    // Add ripple effect on click
    btn.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            left: ${x}px;
            top: ${y}px;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Enhanced Form Validation
document.querySelectorAll('input[type="email"]').forEach(input => {
    const formGroup = input.closest('.form-group');
    let errorMessage = formGroup?.querySelector('.error-message');
    
    if (!errorMessage && formGroup) {
        errorMessage = document.createElement('span');
        errorMessage.className = 'error-message';
        formGroup.appendChild(errorMessage);
    }
    
    input.addEventListener('blur', function() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (this.value && !emailPattern.test(this.value)) {
            this.classList.add('error');
            if (errorMessage) {
                errorMessage.textContent = 'Please enter a valid email address';
                errorMessage.style.display = 'block';
            }
        } else {
            this.classList.remove('error');
            if (errorMessage) {
                errorMessage.style.display = 'none';
            }
        }
    });
    
    input.addEventListener('input', function() {
        if (this.classList.contains('error')) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailPattern.test(this.value)) {
                this.classList.remove('error');
                if (errorMessage) {
                    errorMessage.style.display = 'none';
                }
            }
        }
    });
});

// Add success state to form inputs
document.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('focus', function() {
        this.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
        if (this.value) {
            this.classList.add('filled');
        } else {
            this.classList.remove('filled');
        }
        this.classList.remove('focused');
    });
});

// Number input formatting for price fields
document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('input', function() {
        // Remove non-numeric characters except decimal point
        this.value = this.value.replace(/[^0-9.]/g, '');
    });
});

// Scroll to top functionality (optional enhancement)
let scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '↑';
scrollToTopBtn.className = 'scroll-to-top';
document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
