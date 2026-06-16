"use client";

interface FormSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
}

export default function FormSuccessModal({
  isOpen,
  onClose,
  title = "Gracias por contactarnos.",
  message = "Muy pronto uno de nuestros asesores se comunicará contigo para ayudarte con tus procesos legales y migratorios.",
}: FormSuccessModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 px-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-[660px] rounded-tl-[16px] rounded-tr-none rounded-bl-none rounded-br-[16px] bg-white px-8 py-14 shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mx-auto mb-8 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#E7EFE6]">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M5 12.5L10 17L19 6"
              stroke="#1B1B1B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h2 className="text-center text-[28px] font-bold leading-none text-[#334684] md:text-[30px]">
          {title}
        </h2>

        <p className="mx-auto mt-8 max-w-[500px] text-center text-[18px] leading-[1.6] text-[#5A6B9A]">
          {message}
        </p>
      </div>
    </div>
  );
}