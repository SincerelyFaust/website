import type { ComponentProps } from "react";

import Link from "next/link";

import { cn } from "@/lib/utils";

type ActionLinkProps = ComponentProps<typeof Link>;
type ActionAnchorProps = ComponentProps<"a">;

const actionClassName =
  "inline-flex min-h-11 items-center border-b border-zinc-400 px-0.5 text-sm font-medium tracking-[-0.02em] transition-colors hover:border-zinc-950 hover:text-zinc-600 focus-visible:outline-2 focus-visible:outline-offset-4 dark:border-zinc-600 dark:hover:border-zinc-100 dark:hover:text-zinc-300";

export function ActionAnchor({ className, ...props }: ActionAnchorProps) {
  return <a {...props} className={cn(actionClassName, className)} />;
}

export default function ActionLink({ className, ...props }: ActionLinkProps) {
  return <Link {...props} className={cn(actionClassName, className)} />;
}
