gsap.registerPlugin(ScrollTrigger);

const heroTimeline = gsap.timeline({
  defaults: {
    duration: 2,
    ease: "power2.out"
  }
});

heroTimeline
  .to("#tree", {
    scale: 1.4,
    bottom: "3vw",
    left: "-0.6vw",
    onComplete: () => {
      gsap.to("#tree", {
        y: "-25%",
        scale: 2.8,
        bottom: "-25rem",
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
    }
  })
  .to(
    "#mountain",
    {
      y: "0%",
      scale: window.innerHeight / 350,
      bottom: `-${window.innerHeight * 0.005}vh`,
      opacity: 1,
      onComplete: () => {
        gsap.to("#mountain", {
          y: "-20%",
          scale: 1.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#hero",
            start: "top top",
            end: "bottom top",
            scrub: true
          }
        });
      }
    },
    "<"
  )
  .to(
    "#title",
    {
      y: "0%",
      scale: 1,
      opacity: 1,
      top: "1vh",
      onComplete: () => {
        gsap.to("#title", {
          y: "60%",
          scale: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#hero",
            start: "top top",
            end: "bottom top",
            scrub: true
          }
        });
      }
    },
    "<"
  )
  .to(
    "#sky",
    {
      y: "0",
      opacity: 1
    },
    "<"
  )
  .to(
    "#grass",
    {
      y: "10%",
      scale: 1,
      opacity: 1,
      onComplete: () => {
        gsap.to("#grass", {
          y: "-20%",
          scale: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#hero",
            start: "top top",
            end: "bottom top",
            scrub: true
          }
        });
      }
    },
    "<"
  );

const aboutTimeline = gsap.timeline({
  defaults: {
    duration: 1,
    ease: "power2.inOut"
  },
  scrollTrigger: {
    trigger: "#about",
    start: "top 90%",
    end: "bottom 98%",
    scrub: true
  }
});

aboutTimeline
  .from("#about .about-text", {
    x: -100,
    opacity: 0,
    duration: 1
  })
  .from("#about .about-image img", { x: 100, opacity: 0 }, "<");

gsap
  .timeline({
    scrollTrigger: {
      trigger: "#activities",
      start: "top 80%",
      end: "bottom bottom",
      scrub: true
    }
  })
  .to("#activities h5", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out"
  })
  .to("#activities h2", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out"
  });

gsap.utils.toArray(".activity-card").forEach((card, index) => {
  const delay = index * 0.3;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: card,
      start: "top 80%",
      end: "bottom top",
      scrub: true
    }
  });

  tl.from(card, {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power3.out",
    delay: delay
  });

  tl.from(card.querySelector("h3"), {
    duration: 1.5,
    ease: "power3.out",
    delay: delay
  });
});

const ctaTimeline = gsap.timeline({
  defaults: {
    duration: 1,
    ease: "power2.inOut"
  },
  scrollTrigger: {
    trigger: "#cta",
    start: "top 75%",
    end: "bottom bottom",
    scrub: true
  }
});

ctaTimeline
  .from("#cta h2", {
    opacity: 0,
    y: -100
  })
  .from(
    "#cta p",
    {
      opacity: 0,
      y: -100
    },
    "+=0.1"
  )
  .from(
    "#cta button",
    {
      opacity: 0,
      y: 40
    },
    "+=0.5"
  );

function updateBottomPosition() {
  const viewportHeight = window.innerHeight;
  const dynamicBottom = -1 * 32 - viewportHeight * 0.1;
  document.documentElement.style.setProperty(
    "--dynamic-bottom",
    `${dynamicBottom}px`
  );
}

window.addEventListener("resize", updateBottomPosition);
updateBottomPosition();
