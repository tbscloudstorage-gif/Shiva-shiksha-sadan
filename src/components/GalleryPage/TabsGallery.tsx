
import { useState } from "react";

type Category = "All" |"Pre-primary" | "Sports" | "Activities" ;

interface GalleryImage {
  id: number;
  image: string;
  category: Exclude<Category, "All">;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    image: "/assets/img/gallery/pri-1.jpg",
    category: "Pre-primary",
  },
  {
    id: 2,
    image: "/assets/img/gallery/pri-2.jpg",
    category: "Pre-primary",
  },
  {
    id: 3,
    image: "/assets/img/gallery/sp-1.jpg",
    category: "Sports",
  },
  {
    id: 4,
    image: "/assets/img/gallery/ac-3.JPG",
    category: "Activities",
  },
  {
    id: 5,
    image: "/assets/img/gallery/sp-6.png",
    category: "Sports",
  },
  {
    id: 6,
    image: "/assets/img/gallery/1.png",
    category: "Activities",
  },
];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState<Category>("All");

  const tabs: Category[] = ["All","Pre-primary" ,"Sports", "Activities"];

  const filteredImages =
    activeTab === "All"
      ? galleryImages
      : galleryImages.filter(
          (item) => item.category === activeTab
        );

  return (
    <section className="school-gallery-section">
      <div className="container">
        <div className="school-gallery-heading">
          <h4 className="mb-2 it-breadcrumb-title it-split-text it-split-in-right">Explore Our School Gallery</h4>
          <p>
            Discover memorable moments from our sports
            activities, student clubs, and school life.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="school-gallery-tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              className={`school-gallery-tab ${
                activeTab === tab ? "active" : ""
              }`}
              onClick={() => setActiveTab(tab)}
              aria-pressed={activeTab === tab}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Gallery Images */}
        <div className="school-gallery-grid">
          {filteredImages.map((item) => (
            <div
              className="school-gallery-item"
              key={item.id}
            >
              <img
                src={item.image}
                alt={`${item.category} activity`}
                loading="lazy"
              />
              <div className="school-gallery-overlay">
                <span>{item.category}</span>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <p className="school-gallery-empty">
            No images available in this category.
          </p>
        )}
      </div>
    </section>
  );
}
