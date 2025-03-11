"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/components/ui/tooltip";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/components/ui/popover";
import { Slider } from "@/components/components/ui/slider";
import {
  PenLine,
  Pencil,
  Eraser,
  Square,
  Circle,
  Type,
  Download,
  Trash2,
  Palette,
  ArrowLeft,
} from "lucide-react";

export default function CanvasPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [tool, setTool] = useState("pen");
  const [color, setColor] = useState("#000000");
  const [size, setSize] = useState(5);
  const [prevPos, setPrevPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set canvas to full size minus toolbar
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 64;

    const context = canvas.getContext("2d");
    if (context) {
      context.lineCap = "round";
      context.lineJoin = "round";
      context.strokeStyle = color;
      context.lineWidth = size;
      setCtx(context);
    }

    const handleResize = () => {
      if (canvas) {
        // Save current drawing
        const tempCanvas = document.createElement("canvas");
        const tempCtx = tempCanvas.getContext("2d");
        tempCanvas.width = canvas.width;
        tempCanvas.height = canvas.height;
        if (tempCtx && context) {
          tempCtx.drawImage(canvas, 0, 0);
        }

        // Resize canvas
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight - 64;

        // Restore drawing
        if (context && tempCtx) {
          context.lineCap = "round";
          context.lineJoin = "round";
          context.strokeStyle = color;
          context.lineWidth = size;
          context.drawImage(tempCanvas, 0, 0);
        }
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [color, size]);

  useEffect(() => {
    if (ctx) {
      ctx.strokeStyle = color;
      ctx.lineWidth = size;
    }
  }, [ctx, color, size]);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!ctx) return;

    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setIsDrawing(true);
    setPrevPos({ x, y });

    // For shapes and text, we'll just set the starting position
    if (tool === "pen" || tool === "pencil" || tool === "eraser") {
      ctx.beginPath();
      ctx.moveTo(x, y);
    }
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !ctx) return;

    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (tool === "eraser") {
      ctx.globalCompositeOperation = "destination-out";
    } else {
      ctx.globalCompositeOperation = "source-over";
    }

    if (tool === "pen" || tool === "pencil" || tool === "eraser") {
      ctx.lineTo(x, y);
      ctx.stroke();
    } else if (tool === "square") {
      // Preview square (will be drawn on mouse up)
      const width = x - prevPos.x;
      const height = y - prevPos.y;

      // Clear and redraw
      const canvas = canvasRef.current;
      if (canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeRect(prevPos.x, prevPos.y, width, height);
      }
    } else if (tool === "circle") {
      // Preview circle (will be drawn on mouse up)
      const radius = Math.sqrt(
        Math.pow(x - prevPos.x, 2) + Math.pow(y - prevPos.y, 2)
      );

      // Clear and redraw
      const canvas = canvasRef.current;
      if (canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(prevPos.x, radius, radius, 0, 2 * Math.PI);
        ctx.stroke();
      }
    }
  };

  const stopDrawing = () => {
    if (!isDrawing || !ctx) return;

    ctx.closePath();
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    if (!ctx || !canvasRef.current) return;
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  };

  const downloadCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement("a");
    link.download = "drawing.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  const handleToolChange = (newTool: string) => {
    setTool(newTool);
  };

  return (
    <div className="flex flex-col w-full h-full">
      <header className="border-b bg-[#FFFFFF] sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5 text-[#333333]" />
              </Button>
            </Link>
            <span className="text-xl font-bold text-[#333333]">PenPencil</span>
          </div>
          <div className="flex items-center space-x-1">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant={tool === "pen" ? "default" : "outline"}
                    className={
                      tool === "pen" ? "bg-[#FACC2E] hover:bg-[#FACC2E]" : ""
                    }
                    size="icon"
                    onClick={() => handleToolChange("pen")}
                  >
                    <PenLine className="h-5 w-5 text-[#333333]" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Pen</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant={tool === "pencil" ? "default" : "outline"}
                    size="icon"
                    className={
                      tool === "pencil" ? "bg-[#FACC2E] hover:bg-[#FACC2E]" : ""
                    }
                    onClick={() => handleToolChange("pencil")}
                  >
                    <Pencil className="h-5 w-5 text-[#333333]" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Pencil</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant={tool === "eraser" ? "default" : "outline"}
                    size="icon"
                    onClick={() => handleToolChange("eraser")}
                    className={
                      tool === "eraser" ? "bg-[#FACC2E] hover:bg-[#FACC2E]" : ""
                    }
                  >
                    <Eraser className="h-5 w-5 text-[#333333]" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Eraser</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant={tool === "square" ? "default" : "outline"}
                    size="icon"
                    onClick={() => handleToolChange("square")}
                    className={
                      tool === "square" ? "bg-[#FACC2E] hover:bg-[#FACC2E]" : ""
                    }
                  >
                    <Square className="h-5 w-5 text-[#333333]" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Square</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant={tool === "circle" ? "default" : "outline"}
                    size="icon"
                    onClick={() => handleToolChange("circle")}
                    className={
                      tool === "circle" ? "bg-[#FACC2E] hover:bg-[#FACC2E]" : ""
                    }
                  >
                    <Circle className="h-5 w-5 text-[#333333]" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Circle</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant={tool === "text" ? "default" : "outline"}
                    size="icon"
                    onClick={() => handleToolChange("text")}
                    className={
                      tool === "text" ? "bg-[#FACC2E] hover:bg-[#FACC2E]" : ""
                    }
                  >
                    <Type className="h-5 w-5 text-[#333333]" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Text</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <div className="mx-2 h-6 w-px bg-muted-foreground/20" />

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="icon">
                  <div
                    className="h-4 w-4 rounded-full border"
                    style={{ backgroundColor: color }}
                  />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-64">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none text-[#333333]">
                      Color
                    </h4>
                    <input
                      type="color"
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                      className="h-8 w-full"
                    />
                  </div>
                  <div className="grid grid-cols-6 gap-2">
                    {[
                      "#000000",
                      "#FF0000",
                      "#00FF00",
                      "#0000FF",
                      "#FFFF00",
                      "#FF00FF",
                      "#00FFFF",
                      "#FFFFFF",
                      "#FFA500",
                      "#800080",
                      "#008000",
                      "#A52A2A",
                    ].map((c) => (
                      <div
                        key={c}
                        className="h-6 w-6 cursor-pointer rounded-full border"
                        style={{ backgroundColor: c }}
                        onClick={() => setColor(c)}
                      />
                    ))}
                  </div>
                </div>
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="icon">
                  <Palette className="h-5 w-5 text-[#333333]" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-64">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none text-[#333333]">
                      Brush Size
                    </h4>
                    <Slider
                      value={[size]}
                      min={1}
                      max={50}
                      step={1}
                      onValueChange={(value) => setSize(value[0])}
                    />
                    <div className="text-center text-[#333333]">{size}px</div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>

            <div className="mx-2 h-6 w-px bg-muted-foreground/20" />

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon" onClick={clearCanvas}>
                    <Trash2 className="h-5 w-5 text-[#333333]" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Clear Canvas</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={downloadCanvas}
                  >
                    <Download className="h-5 w-5 text-[#333333]" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Download</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </header>
      <main className="flex-1 overflow-hidden">
        <canvas
          ref={canvasRef}
          className="touch-none"
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
        />
      </main>
    </div>
  );
}
