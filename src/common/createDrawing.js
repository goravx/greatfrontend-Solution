export default function createDrawing(canvas, savedImage, saveDrawing) {
  if (!canvas) return;
  
  const ctx = canvas.getContext("2d");

  // Restore old drawing if it exists
  if (savedImage) {
    const img = new Image();
    img.src = savedImage;
    img.onload = () => {
      ctx.drawImage(img, 0, 0);
    };
  }

  let drawing = false;

  const startDraw = (e) => {
    drawing = true;
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
  };

  const draw = (e) => {
    if (!drawing) return;
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.strokeStyle = "black";
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
  };

  const stopDraw = () => {
    drawing = false;
  
    saveDrawing(canvas.toDataURL()); 
  };


  canvas.addEventListener("mousedown", startDraw);
  canvas.addEventListener("mousemove", draw);
  canvas.addEventListener("mouseup", stopDraw);
  canvas.addEventListener("mouseleave", stopDraw);
}
