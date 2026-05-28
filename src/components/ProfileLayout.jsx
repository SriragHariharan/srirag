export function ProfileLayout({ sidebar, children }) {
  return (
    <div className="mx-auto max-w-[1280px] px-4 py-0">
      <div className="flex flex-col gap-6 pt-6 lg:flex-row lg:gap-8">
        <aside className="w-full shrink-0 lg:w-[296px] lg:pt-2">{sidebar}</aside>
        <main className="min-w-0 flex-1">{children}</main>
      </div>
    </div>
  )
}
