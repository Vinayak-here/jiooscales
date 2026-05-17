import { MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={site.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-full bg-[#25D366]/20 p-2 transition hover:scale-110"
    >
      <div className="grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-white shadow-lg">
        <MessageCircle className="h-6 w-6" />
      </div>
    </a>
  );
}
