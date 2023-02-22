let selectionbtn = document.getElementById("S");
// let swaps = (el1, el2) => {
//   let temp = el1.style.height;
//   el1.style.height = el2.style.height;
//   el2.style.height = temp;
// };

let selectionsort = async () => {
  let ele = document.getElementsByClassName("divclass");
  for (let i = 0; i < ele.length; i++) {
    let index = i;
    ele[i].style.background = "blue";
    for (let j = i + 1; j < ele.length; j++) {
      ele[j].style.background = "red";
      await waits(10);
      if (parseInt(ele[j].style.height) < parseInt(ele[index].style.height)) {
        index = j;
      }
    }
    await waits(20);
    swap(ele[index], ele[i]);
    ele[index].style.background = "green";
    ele[i].style.background = "green";
  }
};
selectionbtn.addEventListener("click", selectionsort);
