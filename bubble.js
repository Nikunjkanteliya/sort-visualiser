let bubble = document.getElementById("B");

let swap = (el1, el2) => {
  let temp = el1.style.height;
  el1.style.height = el2.style.height;
  el2.style.height = temp;
};

let bubblesort = async () => {
  //   let ele = document.getElementById("dnav");
  let ele = document.getElementsByClassName("divclass");

  for (let i = 0; i < ele.length - 1; i++) {
   
    for (let j = 0; j < ele.length - i - 1; j++) {
      ele[j].style.background = "red";
      ele[j + 1].style.background = "green";
      if (parseInt(ele[j].style.height) > parseInt(ele[j + 1].style.height)) {
        await waits(10);
        swap(ele[j], ele[j + 1]);
      }
      ele[j].style.background = "green";
      ele[i].style.background = "green";
    }
  }
};
let waits = (milisec) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, milisec);
  });
};

bubble.addEventListener("click", bubblesort);
