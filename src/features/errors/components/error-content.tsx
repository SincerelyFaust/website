import type { ReactNode } from "react";

import ActionLink from "@/components/ui/action-link";

type ErrorContentProps = Readonly<{
  eyebrow: string;
  title: string;
  description: string;
  action?: ReactNode;
}>;

export default function ErrorContent({ eyebrow, title, description, action }: ErrorContentProps) {
  return (
    <main
      id="main"
      className="mx-auto flex min-h-svh w-[calc(100%-2.5rem)] max-w-280 items-center py-20 sm:w-[calc(100%-4rem)] lg:w-[calc(100%-6rem)]"
    >
      <div className="w-full max-w-145 border-t border-zinc-300 pt-10 dark:border-zinc-700">
        <p className="mb-6 font-mono text-[11px] font-semibold tracking-[0.12em] text-zinc-500">
          {eyebrow}
        </p>
        <h1 className="text-[clamp(2.5rem,7vw,4.5rem)] leading-tight font-semibold tracking-[-0.055em]">
          {title}
        </h1>
        <p className="mt-6 max-w-115 text-sm leading-[1.9] text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-7">
          {action}
          <ActionLink href="/">Go home</ActionLink>
        </div>
      </div>
    </main>
  );
}
