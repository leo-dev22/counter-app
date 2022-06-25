const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
//console.log(value, btns);

let count = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const style = e.currentTarget.classList;
    if (style.contains("dislike")) {
      count--;
    } else if (style.contains("like")) {
      count++;
    } else {
      count = 0;
    }

    value.textContent = count;

    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "gold";
    }
  });
});
