const substitute = () => {
  const button = document.querySelector("button");
  const userText = document.querySelector("textarea");
  const article = document.querySelector("article");

  button.addEventListener("click", (event) => {
    const userString = userText.value;
    const myArray = userString.split(" ");

    const wrapRandomWords = ([...arr], percent) => {
      let selectedIndices = {};
      let count = Math.floor(arr.length * (percent / 100));

      while (Object.keys(selectedIndices).length < count) {
        let r = Math.floor(Math.random() * arr.length);
        if (!selectedIndices[r]) selectedIndices[r] = true;
      }

      for (let i = 0; i < arr.length; i++)
        // if (selectedIndices[i]) arr[i] = arr[i].replace(/[a-zA-Z0-9]/g, "_");
        if (selectedIndices[i]) arr[i] = arr[i].replace(/([a-zA-Z0-9_-]+)/g, "<span>$1</span>");

      return arr;
    };

    const output = wrapRandomWords(myArray, 50).join(" ").toString();

    // console.log(output);
    article.innerHTML = output.replace(/\n/g, "<br>\n");
  });
};

substitute();
