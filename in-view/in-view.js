const inView = () => {
  const sections = document.querySelectorAll("section");

  if (!sections) {
    return;
  }

  const options = {
    threshold: 0.75,
  };

  const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, options);

  sections.forEach(section => {
    sectionObserver.observe(section);
  });
};

inView();
