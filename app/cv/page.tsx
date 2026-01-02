import Link from "next/link";

export default function CVPage() {
  const pdfPath = "/cv/cv.pdf";

  return (
    <div className="min-h-svh flex justify-center items-start p-3 sm:p-6 overflow-auto">
      <div className="window w-full max-w-5xl h-[94svh] sm:h-[90svh] flex flex-col">
        <div className="title-bar">
          <div className="title-bar-text">CV</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize" />
            <button aria-label="Maximize" />
            <button aria-label="Close" />
          </div>
        </div>

        <div className="window-body flex flex-col gap-3 flex-1 min-h-0">
          <div className="field-row" style={{ flexWrap: "wrap", gap: 8 }}>
            <Link href="/">
              <button>Back</button>
            </Link>
            <a href={pdfPath} download>
              <button>Download PDF</button>
            </a>
            <a href={pdfPath} target="_blank" rel="noopener noreferrer">
              <button>Open in new tab</button>
            </a>
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
