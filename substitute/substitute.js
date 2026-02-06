const substitute = () => {
  const button = document.querySelector("button");
  const userText = document.querySelector("textarea");
  const article = document.querySelector("article");

  button.addEventListener("click", (event) => {
    const userString = userText.value;
    const myArray = userString.split(" ");

    const rand = ([...arr], percent) => {
      let ins = {};
      let len = Math.floor(arr.length * (percent / 100));

      while (Object.keys(ins).length < len) {
        let r = ~~(Math.random() * arr.length);
        if (!ins[r]) ins[r] = true;
      }

      for (let i = 0; i < arr.length; i++)
        // if (ins[i]) arr[i] = arr[i].replace(/[a-zA-Z0-9]/g, "_");
        if (ins[i]) arr[i] = arr[i].replace(/([a-zA-Z0-9\-\_]+)/g, "<span>$1</span>");

      return arr;
    };

    const output = rand(myArray, 50).join(" ").toString();

    // console.log(output);
    article.innerHTML = output.replace(/\n/g, "<br>\n");
  });
};

substitute();
