let colour = "red";
const colours = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "deeppink",
  "purple"
];

setInterval(() => {
  const drop = document.createElement("div");
  drop.className = "drop";

  drop.style.backgroundColor = colour;
  drop.style.boxShadow = `0px 0px 50px 5px ${colour}`;

  drop.style.left = `${(Math.random() * 100)}%`;

  document.body.appendChild(drop);

  setTimeout(() => {
    drop.remove();
  }, 5000);
}, 10);

setTimeout(() => {
  document.getElementById("container").style.backdropFilter = "blur(0px)";
  document.getElementById("container").style.opacity = "0";
  document.getElementById("container").style.filter = "blur(100px)";

  setTimeout(() => {
    document.getElementById("container").remove();
  }, 2500);
}, 5000);

setInterval(() => {
  colour = colours[Math.floor(Math.random() * colours.length)];
}, 10000);

document.onclick = () => {
  document.getElementById("music").play();
}

setTimeout(() => {
  document.body.innerHTML += `
    <div id="container" class="container">
      <h1>END</h1>
    </div>
  `;

  document.getElementById("container").style.opacity = "0";
  document.getElementById("container").style.filter = "blur(100px)";
  document.getElementById("container").style.backdropFilter = "blur(0px)";

  document.getElementById("container").style.transition = "2.5s ease";

  document.getElementById("container").style.opacity = "1";
  document.getElementById("container").style.filter = "blur(0px)";
  document.getElementById("container").style.backdropFilter = "blur(100px)";
}, 422000);