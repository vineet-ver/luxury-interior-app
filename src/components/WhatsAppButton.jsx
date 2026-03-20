"use client";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919876543210" // 👈 apna number daal (91 + number)
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 
      flex items-center gap-2 
      bg-[#25D366] text-white 
      px-4 py-3 rounded-full 
      shadow-lg hover:shadow-2xl 
      hover:scale-105 transition duration-300"
    >
      {/* Icon */}
      <span className="text-lg">💬</span>

      {/* Text (mobile pe hide) */}
      <span className="text-sm font-medium hidden sm:block">
        Chat with us
      </span>
    </a>
  );
}
