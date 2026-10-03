import { FaDownload, FaPrint } from "react-icons/fa";

const BookList = () => {
  const bookLists = [

    {
      title: "Pre-Primary Book List",
      description:
        "Download the complete list of books and stationery requirements for Pre-Primary students.",
      pdf: "/assets/pdf/pre-primary.pdf",
    },
    {
      title: "Class I Book List",
      description:
        "Download the complete list of books and stationery requirements for Class I students.",
      pdf: "/assets/pdf/class-1.pdf",
    },
    {
      title: "Class II Book List",
      description:
        "Download the complete list of books and stationery requirements for Class II students.",
      pdf: "/assets/pdf/class-2.pdf",
    },
    {
      title: "Class III Book List",
      description:
        "Download the complete list of books and stationery requirements for Class III students.",
      pdf: "/assets/pdf/class-3.pdf",
    },
    {
      title: "Class IV Book List",
      description:
        "Download the complete list of books and stationery requirements for Class IV students.",
      pdf: "/assets/pdf/class-4.pdf",
    },
    {
      title: "Class V Book List",
      description:
        "Download the complete list of books and stationery requirements for Class V students.",
      pdf: "/assets/pdf/class-5.pdf",
    },
    {
      title: "Class VI Book List",
      description:
        "Download the complete list of books and stationery requirements for Class VI students.",
      pdf: "/assets/pdf/class-6.pdf",
    },
    {
      title: "Class VII Book List",
      description:
        "Download the complete list of books and stationery requirements for Class VII students.",
      pdf: "/assets/pdf/class-7.pdf",
    },
    {
      title: "Class VIII Book List",
      description:
        "Download the complete list of books and stationery requirements for Class VIII students.",
      pdf: "/assets/pdf/class-8.pdf",
    },
    {
      title: "Class IX Book List",
      description:
        "Download the complete list of books and stationery requirements for Class IX students.",
      pdf: "/assets/pdf/class-9.pdf",
    },
    {
      title: "Class X Book List",
      description:
        "Download the complete list of books and stationery requirements for Class X students.",
      pdf: "/assets/pdf/class-10.pdf",
    },
  ];

  // Open PDF and show browser print dialog
  const handlePrint = (pdf: string) => {
    const printWindow = window.open(pdf, "_blank");

    if (printWindow) {
      printWindow.onload = () => {
        setTimeout(() => {
          printWindow.print();
        }, 500);
      };
    }
  };

  return (
    <div className="book-list-page">
      {bookLists.map((item, index) => (
        <section className="book-download-section" key={index}>
          <div className="book-container">
            <div className="book-download-box">

              {/* Heading */}
              <h2 className="book-download-title">
                {item.title}
              </h2>

              {/* Description */}
              <p className="book-download-description">
                {item.description}
              </p>

              {/* Buttons */}
              <div className="book-download-buttons">

                {/* Download Button */}
                <a
                  href={item.pdf}
                  download
                  className="book-download-btn book-pdf-btn"
                >
                  <FaDownload />
                  <span>Download PDF</span>
                </a>

                {/* Print Button */}
                <button
                  type="button"
                  className="book-download-btn book-print-btn"
                  onClick={() => handlePrint(item.pdf)}
                >
                  <FaPrint />
                  <span>Print List</span>
                </button>

              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default BookList;