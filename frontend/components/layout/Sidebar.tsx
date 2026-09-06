"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const nav = [
  { href: "/", label: "Dashboard", icon: "◈" },
  { href: "/requests", label: "Interviews", icon: "◇" },
  { href: "/requests/new", label: "New Request", icon: "+" },
  { href: "/panelists", label: "Panelists", icon: "◉" },
  { href: "/analytics", label: "Analytics", icon: "◎" },
];

export default function Sidebar() {
  const path = usePathname();
  return (
    <aside className="w-56 shrink-0 h-screen sticky top-0 flex flex-col border-r border-white/[0.07] bg-white/[0.02] backdrop-blur-xl px-4 py-6">
      <div className="mb-8 px-2">
        <div className="text-white font-semibold text-sm tracking-widest uppercase opacity-80">
          Interview Scheduler
        </div>
        <div className="text-white/30 text-xs mt-1">Smart Scheduling Platform</div>
      </div>
      <nav className="flex flex-col gap-1 flex-1">
        {nav.map((item) => {
          const active = item.href === "/" ? path === "/" : path.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all duration-150",
                active
                  ? "bg-white/10 text-white border border-white/15"
                  : "text-white/40 hover:text-white/70 hover:bg-white/05"
              )}
            >
              <span className="text-base leading-none">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
      <div className="px-2 pt-4 border-t border-white/[0.07]">
        <p className="text-white/20 text-xs">Powered by Llama 3.1 via Groq</p>
      </div>
    </aside>
  );
}
