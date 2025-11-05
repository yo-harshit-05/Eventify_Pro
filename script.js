// script.js
document.addEventListener('DOMContentLoaded', function() {
    startCinematicAnimation();
});

function startCinematicAnimation() {
    const tl = gsap.timeline();
    
    // Create particles
    createParticles();
    
    // Logo reveal animation
    tl.to('#logoText', {
        y: 0,
        duration: 1.5,
        ease: "power4.out",
        delay: 0.5
    })
    .to('#logoSubtitle', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out"
    }, "-=0.5")
    
    // Animate floating icons
    .fromTo('.floating-icon', 
        { scale: 0, rotation: -180 },
        { 
            scale: 1, 
            rotation: 0, 
            opacity: 0.7,
            duration: 1, 
            stagger: 0.2,
            ease: "back.out(1.7)"
        }
    )
    
    // Pulse animation for icons
    .to('.floating-icon', {
        scale: 1.2,
        duration: 0.5,
        yoyo: true,
        repeat: 3,
        stagger: 0.1,
        ease: "power1.inOut"
    })
    
    // Progress bar animation
    .to('#progressFill', {
        width: "100%",
        duration: 3,
        ease: "power2.inOut"
    })
    
    // Final logo emphasis
    .to('#logoText', {
        scale: 1.1,
        duration: 0.5,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut"
    })
    
    // Transition to main content
    .to('.cinematic-loader', {
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        onComplete: showMainContent
    });
}

function createParticles() {
    const container = document.getElementById('particlesContainer');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random position
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        
        // Random size
        const size = Math.random() * 3 + 1;
        
        // Random delay
        const delay = Math.random() * 2;
        
        gsap.set(particle, {
            left: `${posX}%`,
            top: `${posY}%`,
            width: size,
            height: size,
            opacity: 0
        });
        
        // Animate particle
        gsap.to(particle, {
            opacity: Math.random() * 0.5 + 0.2,
            duration: Math.random() * 2 + 1,
            delay: delay,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut"
        });
        
        container.appendChild(particle);
    }
}

function showMainContent() {
    // Hide cinematic loader
    document.getElementById('cinematicLoader').style.display = 'none';
    
    // Show main content with animation
    gsap.to('#mainContent', {
        opacity: 1,
        visibility: 'visible',
        duration: 1
    });
    
    // Animate hero section
    const heroTl = gsap.timeline();
    
    heroTl.from('.nav-logo', {
        y: -50,
        opacity: 0,
        duration: 0.8
    })
    .from('.nav-links a', {
        y: -50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1
    }, "-=0.4")
    .from('.hero-content h1', {
        x: -100,
        opacity: 0,
        duration: 1
    })
    .from('.hero-content p', {
        x: -100,
        opacity: 0,
        duration: 0.8
    }, "-=0.5")
    .from('.cta-button', {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.7)"
    })
    .from('.floating-card', {
        y: 100,
        opacity: 0,
        rotation: 10,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
    });
    
    // Continuous floating animation for cards
    gsap.to(['#card1', '#card2', '#card3'], {
        y: -20,
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        stagger: 0.3
    });
}

// Add interactive cursor effect
document.addEventListener('mousemove', function(e) {
    gsap.to('.floating-icon', {
        x: (e.clientX - window.innerWidth / 2) * 0.01,
        y: (e.clientY - window.innerHeight / 2) * 0.01,
        duration: 1,
        ease: "power2.out"
    });
});

// Add scroll-triggered animations for future sections
gsap.registerPlugin(ScrollTrigger);

// Example for future sections
gsap.utils.toArray('.feature-section').forEach(section => {
    gsap.from(section, {
        opacity: 0,
        y: 100,
        duration: 1,
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });
});