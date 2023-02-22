let arr = [];

let narrfun = () => {
  empty();
  arr = [];
  for (let i = 1; i <= 100; i++) {
    arr.push(Math.floor(Math.random(i) * 100));
  }

  for (let i = 1; i <= 100; i++) {
    let cre = document.createElement("div");

    cre.style.height = `${arr[i] * 5}px`;
    //   cre.style.width = "5px"
    cre.style.display = "inline-block";
    cre.classList.add("divclass");
    // cre.innerHTML = ".";
    document.getElementById("dnav").appendChild(cre);
  }
};
let empty = () => {
  document.getElementById("dnav").innerHTML = "";
};

let narr = document.querySelector("#na");
narr.addEventListener("click", narrfun);
