"use client";

import ThemeProvider from "@/components/theme/theme-provider";

import ErrorContent from "@/features/errors/components/error-content";

import "./globals.css";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-svh bg-[#fafafa] font-sans text-zinc-950 antialiased dark:bg-[#101010] dark:text-zinc-100">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ErrorContent
            eyebrow="ERROR / SOMETHING WENT WRONG"
            title="Something went wrong."
            description="The site couldn't load. Please try refreshing this page."
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
        </ThemeProvider>
      </body>
    </html>
  );
}
