var canvas = document.getElementById("signature-pad");

function resizeCanvas() {
  var ratio = Math.max(window.devicePixelRatio || 1, 1);
  canvas.width = canvas.offsetWidth * ratio;
  canvas.height = canvas.offsetHeight * ratio;
  canvas.getContext("2d").scale(ratio, ratio);
}

window.onresize = resizeCanvas;
resizeCanvas();

var signaturePad = new SignaturePad(canvas, {
  backgroundColor: "rgb(255, 255, 255)",
});

document.getElementById("save-png").addEventListener("click", function () {
  if (signaturePad.isEmpty()) {
    return alert("Please provide a signature first.");
  }

  var data = signaturePad.toDataURL("image/png");

  console.log(data);
  window.open(data);
});

document.getElementById("save-jpeg").addEventListener("click", function () {
  if (signaturePad.isEmpty()) {
    return alert("Please provide a signature first.");
  }

  var data = signaturePad.toDataURL("image/jpeg");
  console.log(data);
  window.open(data);
});

document.getElementById("save-svg").addEventListener("click", function () {
  if (signaturePad.isEmpty()) {
    return alert("Please provide a signature first.");
  }

  var data = signaturePad.toDataURL("image/svg+xml");
  console.log(data);
  console.log(atob(data.split(",")[1]));
  window.open(data);
});

document.getElementById("clear").addEventListener("click", function () {
  signaturePad.clear();
});

let d = new Date();
async function getTimeAndIp() {
  let resultat = await axios.get("https://api.ipify.org?format=json");
  let ip = resultat.data;
  console.log(d);
  console.log(ip);
}
