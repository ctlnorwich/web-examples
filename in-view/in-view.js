const inView = () => {

  const sections = document.querySelectorAll("section");

  if(!sections){
    return;
  }

  const options = {
    threshold: 0.75
  };

const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
    entry.target.classList.add("in-view");
    }
  }
}, options);

  sections.forEach((section) => {
    console.log(section)
    observer.observe(section)
  });
};

inView();
