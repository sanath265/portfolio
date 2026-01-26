import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/../Assets/Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [isVisible, setIsVisible] = useState(false);
  const pdfWrapperRef = React.useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (pdfWrapperRef.current) {
      observer.observe(pdfWrapperRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <section className="section-shell resume-section" id="resume">

      <Container>
        <Row className="resume-cta" style={{ justifyContent: "center" }}>
          <Button variant="primary" href={pdf} target="_blank" style={{ maxWidth: "250px" }}>
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume" ref={pdfWrapperRef} style={{ minHeight: "500px" }}>
          {isVisible && (
            <Document file={pdf} className="resume-document">
              <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
            </Document>
          )}
        </Row>

        <Row className="resume-cta" style={{ justifyContent: "center" }}>
          <Button variant="primary" href={pdf} target="_blank" style={{ maxWidth: "250px" }}>
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </section>
  );
}

export default ResumeNew;
