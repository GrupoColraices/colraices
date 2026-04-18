export default function InmueblesLayout({
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