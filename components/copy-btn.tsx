"use client";
import { Clipboard } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const copyBtn = ({ text }: { text: string }) => {
  function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(() => {
      alert("Copied to clipboard");
    });
  }
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button onClick={() => copyToClipboard(text)} className="text-slate-50 absolute top-0 right-0 p-2">
          <Clipboard className="h-4" />
        </button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Copy Code</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default copyBtn;
