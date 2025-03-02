import { Button } from "@/components/ui/button";
import { EraserIcon } from "lucide-react";
import Image from "next/image";
import { CHAT_HEADER, CLEAR_BUTTON_TEXT } from "@/configuration/ui";
import { AI_NAME } from "@/configuration/identity";

export const NatrolLogo = () => (
  <div className="w-20 h-20 relative"> {/* Adjust size as needed */}
    <Image src="/Natrol_logo.png" alt="Natrol Logo" width={80} height={80} />
  </div>
);

export const AILogo = () => (
  <div className="w-12 h-12 relative">
    <Image src="/ai-logo.png" alt={AI_NAME} width={48} height={48} />
    <div className="w-2 h-2 rounded-full bg-green-500 absolute -bottom-0.5 -right-0.5"></div>
  </div>
);  

export default function ChatHeader({ clearMessages }: { clearMessages: () => void }) {
  return (
    <div className="z-10 flex justify-between items-center fixed top-0 w-full px-5 py-3 bg-white shadow-md">
      <div className="flex items-center gap-4"> 
        <NatrolLogo /> 
      </div>
      <div className="flex-1 flex justify-center items-center gap-2">
        <AILogo />
        <p className="text-lg font-medium">{CHAT_HEADER}</p>
      </div>
      <div className="flex justify-end items-center">
        <Button onClick={clearMessages} className="gap-2 shadow-sm bg-white" variant="outline" size="sm">
          <EraserIcon className="w-4 h-4" />
          <span>{CLEAR_BUTTON_TEXT}</span>
        </Button>
      </div>
    </div>
  );
}

