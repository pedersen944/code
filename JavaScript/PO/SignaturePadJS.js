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

  var data = signaturePad.toDataURL();
  console.log(data);
});

document.getElementById("clear").addEventListener("click", function () {
  signaturePad.clear();
});

async function getTimeAndIp() {
  let d = new Date().toLocaleTimeString();

  let result = await axios.get("https://api.ipify.org?format=json");
  let ip = result.data;
  let myJSON = JSON.stringify(ip);

  let totalpakkestring = d + myJSON;
  var c = document.getElementById("signature-pad");
  var ctx = c.getContext("2d");
  ctx.font = "8px Arial";
  ctx.fillText(totalpakkestring, 10, 40);
}
