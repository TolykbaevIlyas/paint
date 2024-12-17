'use client'

import { useRef, useState } from "react";

export default function Home() {
  const canvasRef = useRef(null);
  const [isDrawing, setDrawing] = useState(false);

  const startDrawing = (e) => { 
    const contex = canvasRef.current.getContext("2d");
    contex.beginPath();
    contex.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    setDrawing(true);
  }

  const draw = (e) => {
    if (!isDrawing) return;
    const contex = canvasRef.current.getContext("2d");
    contex.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    contex.stroke();
  }

  const stopDrawing = () => {
    setDrawing(false);
  }

  return (
    <div>
      <canvas
      ref={canvasRef}
      width={800}
      height={600}
      style={{border: "1px solid black"}}
      onMouseDown={startDrawing}
      onMouseMove={draw}
      onMouseUp={stopDrawing}
      onMouseOut={stopDrawing}/>
    </div>
  );
}
