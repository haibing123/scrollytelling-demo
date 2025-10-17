// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Initial state - image starts hidden
gsap.set('.image-container img', {
    opacity: 0,
    scale: 1,
    x: 0,
    y: 0
});

// Create a timeline for smooth sequential animations
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.text-column',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true
    }
});

// Animation 1: Fade in the illustration (First scroll)
tl.to('.image-container img', {
    opacity: 1,
    duration: 1
});

// Animation 2: Zoom in to one area (Second scroll)
tl.to('.image-container img', {
    scale: 2.5,
    x: -200,
    y: -100,
    duration: 1
});

// Animation 3: Pan to a different area (Third scroll)
tl.to('.image-container img', {
    x: 200,
    y: 100,
    duration: 1
});

// Animation 4: Zoom out to full view (Fourth scroll)
tl.to('.image-container img', {
    scale: 1,
    x: 0,
    y: 0,
    duration: 1
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
