gsap.registerPlugin(ScrollTrigger);

const mm = gsap.matchMedia();

mm.add(
  {
    motion: "(prefers-reduced-motion: no-preference)",
    wide: "(min-width: 900px)",
  },
  (context) => {
    const { motion, wide } = context.conditions;
    if (!motion) return;

    // 1. Hero: las tintas llegan desfasadas y se alinean (como el registro en una imprenta)
    const intro = gsap.timeline({ defaults: { ease: "power3.out" }, delay: 0.2 });
    intro
      .from(".plate--c", { xPercent: -9, yPercent: -6, duration: 1.6, ease: "power4.inOut" })
      .from(".plate--m", { xPercent: 7, yPercent: 5, duration: 1.6, ease: "power4.inOut" }, "<0.1")
      .from(".plate--y", { xPercent: -4, yPercent: 9, duration: 1.6, ease: "power4.inOut" }, "<0.1")
      .to(".plate--k", { opacity: 1, duration: 0.35, ease: "none" }, "-=0.2")
      .from(".crop", { scale: 0, duration: 0.4, stagger: 0.05, ease: "back.out(2)" }, "<")
      .from(".hero__copy > *", { y: 24, opacity: 0, duration: 0.6, stagger: 0.08 }, "<0.1");

    // 2. Servicios: la fila de carteles se mueve de lado mientras bajas
    if (wide) {
      const track = document.querySelector(".services__track");
      gsap.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: ".services__pin",
          pin: true,
          start: "top top",
          end: () => "+=" + (track.scrollWidth - window.innerWidth),
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      });
    }

    // 3. Proceso: la barra de colores se llena conforme avanzas
    gsap.from(".process__rule span", {
      scaleX: 0,
      ease: "none",
      scrollTrigger: {
        trigger: ".process",
        start: "top 70%",
        end: "bottom 80%",
        scrub: true,
      },
    });
  }
);

// Si las fuentes cambian el tamaño del texto al cargar, recalcular posiciones
document.fonts?.ready.then(() => ScrollTrigger.refresh());
