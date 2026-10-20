const WHATSAPP_LINK = "https://wa.me/6596651503";

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-4 md:bottom-7 md:right-7 z-40 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-[#25D366] hover:bg-[#1EBE5B] text-white transition-colors cursor-pointer"
    >
      <i className="ri-whatsapp-line text-2xl md:text-3xl"></i>
    </a>
  );
}