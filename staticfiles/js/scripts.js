const animateSections = () => {
    const sections = document.querySelectorAll("section")
    sections.forEach((section, index) => {
      motion.animate(
        section,
        {
          opacity: [0, 1],
          y: [50, 0],
        },
        {
          delay: index * 0.2,
          duration: 0.8,
          ease: "easeOut",
        },
      )
    })
  }
  
  document.addEventListener("DOMContentLoaded", animateSections)
  
  