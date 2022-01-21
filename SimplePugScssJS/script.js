const features = document.querySelectorAll('.feature');

observer = new IntersectionObserver(sections => {
  sections.forEach(section => {
    console.log(section)
    if (section.intersectionRatio > 0.4) {
      section.target.classList.add('show-feature');
    } else {
      section.target.classList.remove('show-feature');
    }
  });
}, { threshold: 0.4 });

features.forEach(feature => observer.observe(feature))
