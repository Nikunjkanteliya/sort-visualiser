let btn = document.getElementById("I");

let insertionsort = async () => {
  let ele = document.getElementsByClassName("divclass");

  for (let i = 1; i < ele.length; i++) {
    let a = ele[i].style.height;
    ele[i].style.background = "red";

    await waits(10);
    let j;

    for (
      j = i - 1;
      j >= 0 && parseInt(ele[j].style.height) > parseInt(a);
      j--
    ) {
      await waits(10);

      ele[j + 1] = ele[j];

      ele[j + 1].style.height = ele[j].style.height;
    }
    ele[j + 1].style.height = a;
    ele[i].style.background = "green";
    ele[j + 1].style.background = "green";
  }
};
btn.addEventListener("click", insertionsort);
