export default function MonetizacionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <style jsx global>{`
        footer {
          display: none !important;
        }
      `}</style>
    </>
  );
}