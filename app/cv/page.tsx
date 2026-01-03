import Link from "next/link";

export default function CVPage() {
  const pdfPath = "/cv/cv.pdf";

  return (
    <div className="min-h-svh flex items-center justify-center p-3 sm:p-6 overflow-auto bg-[url('/images/bg/image.webp')] bg-cover bg-center bg-no-repeat">
      <div className="window w-full max-w-5xl h-[94svh] sm:h-[90svh] flex flex-col">
        <div className="title-bar">
          <div className="title-bar-text">CV</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize" />
            <button aria-label="Maximize" />
            <button aria-label="Close" />
          </div>
        </div>

        <div className="window-body flex flex-col gap-2 flex-1 min-h-0">
          <div className="flex flex-wrap items-center justify-between gap-2 px-2">
            <Link href="/">
              <button>Back</button>
            </Link>

            <div className="flex flex-wrap items-center gap-2">
              <a href={pdfPath} target="_blank" rel="noopener noreferrer">
                <button>Open</button>
              </a>
              <a href={pdfPath} download>
                <button>Download</button>
              </a>
            </div>
          </div>

          <div className="sunken-panel p-2 flex-1 min-h-0">
            <object
              data={pdfPath}
              type="application/pdf"
              width="100%"
              height="100%"
            >
              <p>
                Your browser can’t display PDFs inline.{" "}
                <a href={pdfPath} target="_blank" rel="noopener noreferrer">
                  Open the PDF
                </a>{" "}
                or{" "}
                <a href={pdfPath} download>
                  download it
                </a>
                .
              </p>
            </object>
          </div>

          <div className="status-bar">
            <p className="status-bar-field">CV</p>
            <p className="status-bar-field">PDF</p>
          </div>
        </div>
      </div>
    </div>
  );
}
