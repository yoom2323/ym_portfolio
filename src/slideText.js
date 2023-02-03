let roller = document.querySelector(".flowWrap");
roller.id = "roller1";

let clone = roller.cloneNode(true);
clone.id = "roller2";
document.querySelector(".flowText").appendChild(clone);

document.querySelector("#roller1").style.left = "0px";
document.querySelector("#roller2").style.left =
  document.querySelector(".roller").offsetWidth + "px";

roller.classList.add("original");
clone.classList.add("clone");
