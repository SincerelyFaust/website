"use client";

import { type MouseEvent, useRef, useState } from "react";

import Image from "next/image";

import type { GalleryImage } from "../types";

type PhotoGalleryProps = Readonly<{
  conference: string;
  images: readonly GalleryImage[];
}>;

export default function PhotoGallery({ conference, images }: PhotoGalleryProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);

  function openImage(image: GalleryImage): void {
    setActiveImage(image);
    dialogRef.current?.showModal();
  }

  function closeImage(): void {
    dialogRef.current?.close();
  }

  function handleBackdropClick(event: MouseEvent<HTMLDialogElement>): void {
    const dialog = event.currentTarget;
    const rect = dialog.getBoundingClientRect();
    if (
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom
    ) {
      closeImage();
    }
  }

  return (
    <>
      <div className="grid grid-cols-3 gap-1.5 sm:gap-2" aria-label={`${conference} photos`}>
        {images.map((photo, index) => (
          <button
            className="group relative aspect-[1.35] cursor-pointer overflow-hidden rounded-sm bg-zinc-200 focus-visible:outline-2 focus-visible:outline-offset-2 dark:bg-zinc-800"
            key={photo.src}
            type="button"
            aria-label={`View photo ${index + 1}: ${photo.caption}`}
            onClick={() => openImage(photo)}
          >
            <Image
              src={photo.src}
              alt={photo.caption}
              fill
              sizes="(max-width: 600px) 33vw, 230px"
              className="object-cover grayscale group-hover:opacity-85"
            />
          </button>
        ))}
      </div>
      <p className="mt-3 text-[10px] text-zinc-500">Select a photo to view it larger.</p>

      <dialog
        ref={dialogRef}
        onClose={() => setActiveImage(null)}
        onClick={handleBackdropClick}
        aria-label="Appearance photo preview"
        className="m-auto max-h-[92dvh] w-[calc(100%-2rem)] max-w-225 overflow-y-auto rounded-md border border-zinc-200 bg-white p-4 text-zinc-950 shadow-2xl backdrop:bg-black/80 sm:w-[calc(100%-3rem)] dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
      >
        <div className="flex items-center justify-between gap-4 pb-3 font-mono text-[10px] font-semibold tracking-[.07em] text-zinc-500">
          <span>PHOTO PREVIEW</span>
          <button
            className="flex size-8 cursor-pointer items-center justify-center rounded border border-zinc-300 text-sm text-zinc-950 hover:bg-zinc-100 focus-visible:outline-2 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800"
            type="button"
            onClick={closeImage}
            aria-label="Close photo preview"
          >
            ✕
          </button>
        </div>
        {activeImage && (
          <>
            <div className="relative h-[min(64svh,630px)] w-full bg-zinc-200 dark:bg-zinc-800">
              <Image
                src={activeImage.src}
                alt={activeImage.caption}
                fill
                sizes="(max-width: 900px) 90vw, 850px"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col items-start justify-between gap-3 pt-4 sm:flex-row sm:items-center">
              <p className="text-[11px] leading-normal text-zinc-600 dark:text-zinc-400">
                {activeImage.caption}
              </p>
              <a
                className="shrink-0 border-b border-current pb-1 text-[11px] hover:text-zinc-500"
                href={activeImage.src}
                target="_blank"
                rel="noopener noreferrer"
              >
                View full image
              </a>
            </div>
          </>
        )}
      </dialog>
    </>
  );
}
