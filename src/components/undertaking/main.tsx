
interface MainPageProps {
  pdfUrl: string;
  coverImage: string;
  title?: string;
}

export default function MainPage({
  pdfUrl,
  coverImage,
  title = "School Document",
}: MainPageProps) {
  const pdfPath = pdfUrl.startsWith("/")
    ? pdfUrl
    : `/${pdfUrl}`;

  return (
    <section className="magazine-section">
      <div className="container">

        {/* Desktop PDF Viewer */}
        <div className="magazine-desktop">
          <iframe
            src={pdfPath}
            title={title}
            width="100%"
            height="800px"
            style={{
              border: "none",
              borderRadius: "8px",
            }}
          />
        </div>

        {/* Mobile Cover Image */}
        <div className="magazine-mobile">
          <img
            src={coverImage}
            alt={`${title} Cover`}
            className="magazine-cover"
          />

          <a
            href={pdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className="magazine-open-btn"
          >
            Open PDF
          </a>
        </div>

      </div>
    </section>
  );
}
