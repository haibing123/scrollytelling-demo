// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Initial state - image starts hidden
gsap.set('.image-container img', {
    opacity: 0,
    scale: 1,
    x: 0,
    y: 0
});

// Animation 1: Fade in the illustration
gsap.to('.image-container img', {
    scrollTrigger: {
        trigger: '#section1',
        start: 'top center',
        end: 'bottom center',
        scrub: true
    },
    opacity: 1,
    duration: 1
});

// Animation 2: Zoom in to first location
gsap.to('.image-container img', {
    scrollTrigger: {
        trigger: '#section2',
        start: 'top center',
        end: 'bottom center',
        scrub: true
    },
    scale: 2.5,
    x: -200,
    y: -100
});

// Animation 3: Pan to second location
gsap.to('.image-container img', {
    scrollTrigger: {
        trigger: '#section3',
        start: 'top center',
        end: 'bottom center',
        scrub: true
    },
    x: 200,
    y: 100
});

// Animation 4: Zoom out to full view
gsap.to('.image-container img', {
    scrollTrigger: {
        trigger: '#section3',
        start: 'bottom center',
        end: '+=100%',
        scrub: true
    },
    scale: 1,
    x: 0,
    y: 0
});

// Handle active state for text sections
const sections = document.querySelectorAll('.story-section');
sections.forEach(section => {
    ScrollTrigger.create({
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        toggleClass: {
            targets: section,
            className: 'active'
        }
    });
});
