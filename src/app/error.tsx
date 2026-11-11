"use client";

import ErrorContent from "@/features/errors/components/error-content";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <ErrorContent
      eyebrow="ERROR / SOMETHING WENT WRONG"
      title="Something went wrong."
      description="This page couldn't be displayed right now. Please try again."
      action={
        <button
          type="button"
          onClick={reset}
          className="inline-flex min-h-11 cursor-pointer items-center border-b border-zinc-400 px-0.5 text-sm font-medium transition-colors hover:border-zinc-950 hover:text-zinc-600 focus-visible:outline-2 focus-visible:outline-offset-4 dark:border-zinc-600 dark:hover:border-zinc-100 dark:hover:text-zinc-300"
        >
          Try again
        </button>
      }
    />
  );
}
