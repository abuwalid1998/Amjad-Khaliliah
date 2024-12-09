document.addEventListener("DOMContentLoaded", function () {
    new SweetScroll({}); // Smooth scroll initialization
    particlesJS("particles-js", {
        particles: {
            number: { value: 50, density: { enable: false, value_area: 400 } },
            color: { value: "#7e1d1d" }, // Green color to symbolize neural nodes
            shape: {
                type: "square", // Neural nodes as circles
                stroke: { width: 0, color: "#b3a033" },
                polygon: { nb_sides: 5 },
                image: { src: "img/github.svg", width: 100, height: 100 }
            },
            opacity: { value: 0.6, random: false },
            size: { value: 5, random: true },
            line_linked: {
                enable: true, // Simulate connections between nodes
                distance: 120,
                color: "#050404", // White lines for connections
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 1, // Slow speed for a smooth effect
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                attract: { enable: true, rotateX: 600, rotateY: 1200 }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "repulse" }, // Repulse on hover for interaction
                onclick: { enable: true, mode: "push" },
                resize: true
            },
            modes: {
                grab: { distance: 400, line_linked: { opacity: 1 } },
                bubble: { distance: 200, size: 10, duration: 1, opacity: 0.8 },
                repulse: { distance: 100, duration: 0.4 },
                push: { particles_nb: 4 },
                remove: { particles_nb: 2 }
            }
        },
        retina_detect: true
    });
}, true);
