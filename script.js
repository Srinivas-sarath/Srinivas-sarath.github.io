const canvas = document.getElementById('gravityCanvas');
const ctx = canvas.getContext('2d');

canvas.width = canvas.offsetWidth;
canvas.height = 400;

function drawGrid() {
  const spacing = 40;
  ctx.strokeStyle = '#555';
  for (let x = 0; x < canvas.width; x += spacing) {
    for (let y = 0; y < canvas.height; y += spacing) {
      let dx = x - canvas.width / 2;
      let dy = y - canvas.height / 2;
      let distance = Math.sqrt(dx * dx + dy * dy);
      let distortion = 50 * Math.exp(-distance * 0.01);
      ctx.beginPath();
      ctx.arc(x, y + distortion, 1, 0, 2 * Math.PI);
      ctx.stroke();
    }
  }
}

drawGrid();
