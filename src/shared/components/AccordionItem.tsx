import { useState } from "react";

interface Iprops {
  title: string;
  content: string;
  icon: React.ReactElement;
}

function AccordionItem({ title, content, icon }: Iprops) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="value__accordion">
      <div className="value__accordion-item">
        <header className="value__accordion-header">
          <i className="bx bxs-star value__accordion-icon">{icon}</i>
          <h3 className="value__accordion-title">{title}</h3>
          <div className="value__accordion-arrow">
            <button onClick={toggleAccordion}>
            <i >
              {isOpen ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
  <path fillRule="evenodd" d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z" clipRule="evenodd" />
</svg>

 :  <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>}
             
            </i>

            </button>
          </div>
        </header>

        {isOpen && (
          <div className={`value__accordion-content ${isOpen ? "accordion-open" : ""}`}>
          <p className="value__accordion-description">{content}</p>
        </div>
        )}
      </div>
    </div>
  );
}

export default AccordionItem;
