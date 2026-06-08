export default function BlogLoading() {
  return (
    <main className="bg-white">
      <section className="px-6 py-20">
        <div className="mx-auto max-w-[1088px]">
          <div className="mx-auto mb-10 h-10 w-64 animate-pulse rounded bg-[#F1F4F8]" />

          <div className="mx-auto mb-8 h-10 w-full max-w-[408px] animate-pulse rounded-[10px] bg-[#F1F4F8]" />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-[1fr_300px]">
            <div className="grid gap-6 sm:grid-cols-2">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="h-[260px] animate-pulse rounded-[12px] bg-[#F1F4F8]"
                />
              ))}
            </div>

            <div className="hidden space-y-4 lg:block">
              {[1, 2, 3, 4, 5].map((item) => (
                <div
                  key={item}
                  className="h-[58px] animate-pulse rounded-[8px] bg-[#F1F4F8]"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}