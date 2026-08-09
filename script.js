// ============================================================
// Initialize EmailJS
// NOTE: Restrict this key to your domain in the EmailJS dashboard
// to prevent unauthorized usage. Also enable rate limiting there.
// ============================================================
(function () {
    emailjs.init('rRJ1m82MPu3c2h5bd');
})();

// ============================================================
// DOM Content Loaded
// ============================================================
document.addEventListener('DOMContentLoaded', function () {
    renderIcons();
    setFooterYear();
    initNavigation();
    initContactForm();
    initScrollAnimations();
    initImageModal();
});

// ============================================================
// Footer — dynamic copyright year
// ============================================================
function setFooterYear() {
    const el = document.getElementById('footerCopyright');
    if (el) {
        el.textContent = `© ${new Date().getFullYear()} Devendra Ambalkar. All rights reserved.`;
    }
}

// ============================================================
// Navigation
// ============================================================
function initNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu   = document.getElementById('navMenu');

    if (!navToggle || !navMenu) return;

    navToggle.addEventListener('click', function () {
        const isOpen = navMenu.classList.toggle('active');
        navToggle.setAttribute('aria-expanded', isOpen);

        const icon = navToggle.querySelector('[data-lucide]');
        if (icon) {
            icon.setAttribute('data-lucide', isOpen ? 'x' : 'menu');
            renderIcons();
        }
    });

    // Close mobile menu when a nav link is clicked
    document.querySelectorAll('.nav-link').forEach(function (link) {
        link.addEventListener('click', function () {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
                const icon = navToggle.querySelector('[data-lucide]');
                if (icon) {
                    icon.setAttribute('data-lucide', 'menu');
                    renderIcons();
                }
            }
        });
    });

    // Close mobile menu on Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
            navToggle.focus();
            const icon = navToggle.querySelector('[data-lucide]');
            if (icon) {
                icon.setAttribute('data-lucide', 'menu');
                renderIcons();
            }
        }
    });
}

// ============================================================
// Smooth scrolling
// ============================================================
function scrollToSection(sectionId) {
    const element = document.querySelector(sectionId);
    if (element) {
        const offsetTop = element.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
}

// ============================================================
// Contact Form
// ============================================================
function initContactForm() {
    const form      = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');

    if (!form || !submitBtn) return;

    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        const name    = document.getElementById('name').value.trim();
        const email   = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // --- Validation ---
        if (!name || !email || !message) {
            showToast('Please fill in all required fields.', 'error');
            return;
        }

        if (!isValidEmail(email)) {
            showToast('Please enter a valid email address.', 'error');
            return;
        }

        if (message.length < 10) {
            showToast('Your message is too short. Please add more detail.', 'error');
            return;
        }

        // --- Loading state ---
        const originalHTML = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i data-lucide="loader-2" class="animate-spin"></i> Sending...';
        submitBtn.disabled = true;
        renderIcons();

        try {
            const templateParams = {
                from_name:  name,
                from_email: email,
                message:    message,
                to_email:   'devendraambalkar11@gmail.com'
            };

            const response = await emailjs.send(
                'service_44aonun',
                'template_a68homq',
                templateParams
            );

            if (response.status === 200) {
                showToast("Message sent! I'll get back to you soon.", 'success');
                form.reset();
            } else {
                throw new Error('Unexpected response status: ' + response.status);
            }
        } catch (error) {
            console.error('EmailJS error:', error);
            showToast('Failed to send message. Please try emailing me directly.', 'error');
        } finally {
            submitBtn.innerHTML = originalHTML;
            submitBtn.disabled = false;
            renderIcons();
        }
    });
}

// Email format validation
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ============================================================
// Toast Notifications
// ============================================================
function showToast(message, type) {
    type = type || 'info';
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const iconMap = {
        success: 'check-circle',
        error:   'alert-circle',
        info:    'info'
    };

    const toast = document.createElement('div');
    toast.className = 'toast ' + type;
    toast.setAttribute('role', 'alert');
    toast.innerHTML =
        '<div style="display:flex;align-items:center;gap:0.5rem;">' +
        '<i data-lucide="' + (iconMap[type] || 'info') + '"></i>' +
        '<span>' + escapeHTML(message) + '</span>' +
        '</div>';

    container.appendChild(toast);
    renderIcons();

    // Auto-remove after 5 seconds
    setTimeout(function () {
        if (toast.parentNode) {
            toast.parentNode.removeChild(toast);
        }
    }, 5000);
}

// Prevent XSS in toast messages
function escapeHTML(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
}

// ============================================================
// Image Modal
// ============================================================
function initImageModal() {
    const modal      = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');

    if (!modal || !modalImage) return;

    // Close when clicking the dark backdrop (not the image itself)
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            closeImageModal();
        }
    });

    // Close on Escape key (also handled in nav, both can coexist)
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeImageModal();
        }
    });
}

function openImageModal(imageSrc) {
    const modal      = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');

    if (!modal || !modalImage) return;

    modalImage.src = imageSrc;
    modalImage.alt = 'Project Screenshot';
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    if (!modal) return;
    modal.style.display = 'none';
    document.body.style.overflow = '';
}

// ============================================================
// Scroll Animations
// ============================================================
function initScrollAnimations() {
    // Slightly darken navbar background on scroll
    window.addEventListener('scroll', debounce(function () {
        const nav = document.querySelector('.nav');
        if (nav) {
            nav.style.background = window.scrollY > 50
                ? 'hsla(220, 27%, 8%, 0.98)'
                : 'hsla(220, 27%, 8%, 0.95)';
        }
    }, 50));

    // Intersection Observer — reveal cards as they enter the viewport
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity  = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target); // only animate once
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll(
        '.section-header, .skill-card, .project-card, .service-card, .contact-card, .cert-card'
    ).forEach(function (el) {
        el.style.opacity   = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
}

// ============================================================
// Utility
// ============================================================
function debounce(func, wait) {
    var timeout;
    return function () {
        var args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            func.apply(this, args);
        }, wait);
    };
}

function renderIcons() {
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
        return;
    }

    document.querySelectorAll('[data-lucide]').forEach(function (el) {
        var name = el.getAttribute('data-lucide');
        var svg = getFallbackIcon(name);
        if (!svg) return;

        var classes = el.className ? ' class="' + el.className + '"' : '';
        el.outerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"' + classes + ' aria-hidden="true">' + svg + '</svg>';
    });
}

function getFallbackIcon(name) {
    var icons = {
        shield: '<path d="M12 3l7 4v5c0 5-3.5 8.5-7 9-3.5-.5-7-4-7-9V7l7-4z"></path>',
        menu: '<path d="M4 6h16"></path><path d="M4 12h16"></path><path d="M4 18h16"></path>',
        x: '<path d="M18 6 6 18"></path><path d="M6 6l12 12"></path>',
        github: '<path d="M9 19c-5 1.5-5-2.5-7-3"></path><path d="M15 22v-3.5c0-1 .1-1.4-.5-2 2-.2 4-1 4-4.5 0-1-.3-1.8-1-2.5.1-.3.4-1.5-.1-3-1 0-1.8.4-2.5 1-1-.2-2-.3-3-.3s-2 .1-3 .3c-.7-.6-1.5-1-2.5-1-.5 1.5-.2 2.7-.1 3-.7.7-1 1.5-1 2.5 0 3.5 2 4.3 4 4.5-.5.5-.5 1.2-.5 2V22"></path>',
        linkedin: '<path d="M16 8a6 6 0 0 1 6 6v8h-4v-7a2 2 0 0 0-4 0v7h-4V8h4v2"></path><path d="M2 9h4v13H2z"></path><circle cx="4" cy="4" r="2"></circle>',
        mail: '<path d="M4 4h16v16H4z"></path><path d="m4 6 8 7 8-7"></path>',
        'graduation-cap': '<path d="m22 10-10 5L2 10l10-5 10 5z"></path><path d="M6 12v4c0 1 3 3 6 3s6-2 6-3v-4"></path>',
        award: '<circle cx="12" cy="8" r="5"></circle><path d="M8.5 13.5 7 22l5-3 5 3-1.5-8.5"></path>',
        network: '<rect x="3" y="3" width="6" height="6" rx="1"></rect><rect x="15" y="3" width="6" height="6" rx="1"></rect><rect x="9" y="15" width="6" height="6" rx="1"></rect><path d="M6 9v2c0 2 2 4 6 4s6-2 6-4V9"></path>',
        terminal: '<path d="m4 5 7 7-7 7"></path><path d="M12 19h8"></path>',
        code: '<path d="m8 9-4 3 4 3"></path><path d="m16 9 4 3-4 3"></path><path d="M14 5 10 19"></path>',
        server: '<rect x="3" y="4" width="18" height="6" rx="1"></rect><rect x="3" y="14" width="18" height="6" rx="1"></rect><path d="M7 7h.01"></path><path d="M7 17h.01"></path>',
        brain: '<path d="M9 19a4 4 0 0 1-4-4v-1a3 3 0 0 1 0-6 4 4 0 0 1 7-2 4 4 0 0 1 7 2 3 3 0 0 1 0 6v1a4 4 0 0 1-4 4"></path><path d="M9 12h.01M15 12h.01M12 16v3"></path>',
        search: '<circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path>',
        users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.9"></path><path d="M16 3.3a4 4 0 0 1 0 7.4"></path>',
        send: '<path d="m22 2-7 20-4-9-9-4 20-7z"></path><path d="M22 2 11 13"></path>',
        'loader-2': '<path d="M12 2v4"></path><path d="M12 18v4"></path><path d="M4.9 4.9 7.8 7.8"></path><path d="m16.2 16.2 2.9 2.9"></path><path d="M2 12h4"></path><path d="M18 12h4"></path><path d="m4.9 19.1 2.9-2.9"></path><path d="m16.2 7.8 2.9-2.9"></path>',
        'check-circle': '<circle cx="12" cy="12" r="9"></circle><path d="m9 12 2 2 4-4"></path>',
        'alert-circle': '<circle cx="12" cy="12" r="9"></circle><path d="M12 8v5"></path><path d="M12 16h.01"></path>',
        info: '<circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M12 12v4"></path>',
        'external-link': '<path d="M14 3h7v7"></path><path d="M10 14 21 3"></path><path d="M21 14v7H3V3h7"></path>',
        'map-pin': '<path d="M12 21s6-5.2 6-11a6 6 0 0 0-12 0c0 5.8 6 11 6 11z"></path><circle cx="12" cy="10" r="2"></circle>',
        phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .6 3a2 2 0 0 1-.5 2.1L8 9a16 16 0 0 0 7 7l.2-.3a2 2 0 0 1 2.1-.5c1 .3 2 .5 3 .6a2 2 0 0 1 1.7 2.1z"></path>',
    };

    return icons[name] || '';
}
