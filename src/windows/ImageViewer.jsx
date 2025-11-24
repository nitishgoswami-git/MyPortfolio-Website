import React from "react";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";
import { WindowControls } from "#components";
import { ChevronDown } from "lucide-react";

function ImageViewer() {
  const { windows } = useWindowStore();
  const data = windows.imgfile?.data;

  if (!data) return null;

  const { name, imageUrl, subtitle } = data;

  return (
    <>
      <div id="window-header">
        {/* Left dropdown */}
        <div className="flex bg-gray-900 p-1 items-center rounded shadow-white-2xl border-black">
          <p>Actions</p>
          <ChevronDown className="icon" />
        </div>

        {/* File / image name */}
        <h2>{name || "Image"}</h2>

        {/* Window close / minimize / expand */}
        <WindowControls target="imgfile" />
      </div>

      {/* CONTENT */}
      <div className="p-3 bg-gray-950 max-h-[70vh] overflow-auto flex flex-col gap-4">
        
        {/* IMAGE */}
        <div className="w-full flex justify-center">
          <img
            src={imageUrl}
            alt={name}
            className="max-w-full max-h-[65vh] object-contain rounded shadow"
          />
        </div>

        {/* OPTIONAL SUBTITLE */}
        {subtitle ? (
          <p className="text-center text-sm text-gray-600">{subtitle}</p>
        ) : null}
      </div>
    </>
  );
}

const ImageViewerWindow = WindowWrapper(ImageViewer, "imgfile");
export default ImageViewerWindow;
