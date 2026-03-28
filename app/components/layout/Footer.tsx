import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#091D3E] text-white py-10 text-center">
      <p>© 2026 Colraices</p>

      <div className="flex justify-center gap-4 mt-4">
        <Link href="/privacidad">Privacidad</Link>
        <Link href="/terminos">Términos</Link>
        <Link href="/cookies">Cookies</Link>
      </div>
    </footer>
  );
}