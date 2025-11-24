import React from "react";
import WindowWrapper from '#hoc/WindowWrapper'
import useWindowStore from '#store/window';
import { WindowControls } from "#components";
import { ChevronDown } from "lucide-react";

function TextViewer() {
    const { windows } = useWindowStore();
    const data = windows.txtfile?.data;

    if (!data) return null;

    const { name, image, subtitle, description } = data;

    return (
        <>
            <div id="window-header">
                <div className="flex bg-gray-900 p-1 items-center rounded shadow-white-2xl border-black">
                    <p>Open </p><ChevronDown className="icon"/>
                </div>
                <h2>{name}</h2>
                <WindowControls target="txtfile" />
            </div>

            <div className="p-5 space-y-6 bg-white">
                {image ? (
                    <div className="w-full">
                        <img src={image} alt={name} className="w-full h-auto rounded" />
                    </div>
                ):null}

                {subtitle ? (
                    <h3 className="text-lg font-semibold">{subtitle}</h3>
                ):null}

                {Array.isArray(description) && description.length > 0 ?  (
                    <div className="space-y-3 leading-relaxed text-base text-gray-800">
                        {description.map((para, idx) => (
                            <p key={idx}>{para}</p>
                        ))}
                    </div>
                ):null}
            </div>
        </>
    );
}

const TextViewerWindow = WindowWrapper(TextViewer, 'txtfile');
export default TextViewerWindow;
