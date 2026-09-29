
interface PdfViewerProps {
  pdfUrl: string;
}

export default function PdfViewer({ pdfUrl }: PdfViewerProps) {
  return (
    <section className="pdf-viewer-section">
      <div className="container">
        <div className="pdf-viewer-wrapper">
          <iframe
            src={pdfUrl}
            title="PDF Document"
            className="pdf-iframe"
          />
        </div>
      </div>
    </section>
  );
}
