const throttle = (fn, delay) => {

  // https://johnkavanagh.co.uk/articles/throttling-scroll-events-in-javascript/

  let time = Date.now();

  return () => {
    if (time + delay - Date.now() <= 0) {
      fn();
      time = Date.now();
    }
  };
};

function runOnScroll() {
  const bodyElem = document.querySelector("body");

  console.log("Scrolling");
  bodyElem.classList.add("is-scrolling");

  clearTimeout(runOnScroll.scrollTimeout);

  // Timeout needs to be set heigher than throttle delay
  runOnScroll.scrollTimeout = setTimeout(() => {
    console.log("Not Scrolling");
    bodyElem.classList.remove("is-scrolling");
  }, 1200);
}

window.addEventListener("scroll", throttle(runOnScroll, 1000));
