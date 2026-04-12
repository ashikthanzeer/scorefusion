(function () {
  const PAGE_FORMAT = "a4";
  const UNIT = "mm";
  const MARGIN = 14;

  function createDoc() {
    const jsPdfApi = window.jspdf?.jsPDF;
    if (!jsPdfApi) {
      throw new Error("PDF export library failed to load.");
    }

    const doc = new jsPdfApi({ unit: UNIT, format: PAGE_FORMAT });
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    return {
      doc,
      pageWidth,
      pageHeight,
      margin: MARGIN,
      cursorY: MARGIN
    };
  }

  function ensureSpace(pdf, heightNeeded) {
    if (pdf.cursorY + heightNeeded <= pdf.pageHeight - pdf.margin) return;
    pdf.doc.addPage();
    pdf.cursorY = pdf.margin;
  }

  function addTitle(pdf, title, subtitleLines) {
    pdf.doc.setFont("helvetica", "bold");
    pdf.doc.setFontSize(18);
    pdf.doc.text(title, pdf.margin, pdf.cursorY);
    pdf.cursorY += 8;

    if (!subtitleLines?.length) {
      pdf.cursorY += 2;
      return;
    }

    pdf.doc.setFont("helvetica", "normal");
    pdf.doc.setFontSize(10);
    subtitleLines.forEach((line) => {
      const wrapped = pdf.doc.splitTextToSize(String(line), pdf.pageWidth - (pdf.margin * 2));
      wrapped.forEach((part) => {
        ensureSpace(pdf, 5);
        pdf.doc.text(part, pdf.margin, pdf.cursorY);
        pdf.cursorY += 4.5;
      });
    });
    pdf.cursorY += 2;
  }

  function addSection(pdf, title) {
    ensureSpace(pdf, 10);
    pdf.doc.setDrawColor(220, 226, 236);
    pdf.doc.line(pdf.margin, pdf.cursorY, pdf.pageWidth - pdf.margin, pdf.cursorY);
    pdf.cursorY += 6;
    pdf.doc.setFont("helvetica", "bold");
    pdf.doc.setFontSize(12);
    pdf.doc.text(title, pdf.margin, pdf.cursorY);
    pdf.cursorY += 6;
  }

  function addParagraph(pdf, text) {
    const wrapped = pdf.doc.splitTextToSize(String(text), pdf.pageWidth - (pdf.margin * 2));
    pdf.doc.setFont("helvetica", "normal");
    pdf.doc.setFontSize(10);

    wrapped.forEach((line) => {
      ensureSpace(pdf, 5);
      pdf.doc.text(line, pdf.margin, pdf.cursorY);
      pdf.cursorY += 4.5;
    });
    pdf.cursorY += 1.5;
  }

  function addKeyValueLines(pdf, items) {
    pdf.doc.setFontSize(10);

    items.filter(Boolean).forEach((item) => {
      const label = `${item.label}: `;
      const fullText = `${label}${item.value}`;
      const availableWidth = pdf.pageWidth - (pdf.margin * 2);
      const lines = pdf.doc.splitTextToSize(fullText, availableWidth);

      lines.forEach((line, index) => {
        ensureSpace(pdf, 5);
        if (index === 0) {
          pdf.doc.setFont("helvetica", "bold");
          pdf.doc.text(label, pdf.margin, pdf.cursorY);
          const labelWidth = pdf.doc.getTextWidth(label);
          pdf.doc.setFont("helvetica", "normal");
          pdf.doc.text(line.slice(label.length), pdf.margin + labelWidth, pdf.cursorY);
        } else {
          pdf.doc.setFont("helvetica", "normal");
          pdf.doc.text(line, pdf.margin, pdf.cursorY);
        }
        pdf.cursorY += 4.5;
      });
    });

    pdf.cursorY += 1.5;
  }

  function addTable(pdf, columns, rows, options) {
    const tableWidth = pdf.pageWidth - (pdf.margin * 2);
    const columnWidths = columns.map((column) => tableWidth * column.width);
    const rowPadding = 2.5;
    const fontSize = 9;
    const boldLastRow = options?.boldLastRow || false;

    function renderRow(row, rowOptions) {
      const cellLines = row.map((cell, index) => (
        pdf.doc.splitTextToSize(String(cell), Math.max(columnWidths[index] - (rowPadding * 2), 10))
      ));
      const rowHeight = Math.max(...cellLines.map((lines) => lines.length), 1) * 4 + (rowPadding * 2);
      ensureSpace(pdf, rowHeight + 2);

      let cursorX = pdf.margin;
      pdf.doc.setDrawColor(220, 226, 236);
      pdf.doc.setFillColor(...(rowOptions.fillColor || [255, 255, 255]));
      pdf.doc.rect(pdf.margin, pdf.cursorY, tableWidth, rowHeight, rowOptions.fill ? "FD" : "S");

      row.forEach((cell, index) => {
        if (index > 0) {
          pdf.doc.line(cursorX, pdf.cursorY, cursorX, pdf.cursorY + rowHeight);
        }

        pdf.doc.setFont("helvetica", rowOptions.bold ? "bold" : "normal");
        pdf.doc.setFontSize(fontSize);
        const textLines = cellLines[index];
        let textY = pdf.cursorY + rowPadding + 3;
        textLines.forEach((line) => {
          pdf.doc.text(line, cursorX + rowPadding, textY);
          textY += 4;
        });
        cursorX += columnWidths[index];
      });

      pdf.cursorY += rowHeight;
    }

    renderRow(columns.map((column) => column.label), { bold: true, fill: true, fillColor: [241, 245, 249] });
    rows.forEach((row, index) => {
      const isLastRow = boldLastRow && index === rows.length - 1;
      renderRow(row, { bold: isLastRow, fill: false });
    });
    pdf.cursorY += 4;
  }

  function addCanvasImage(pdf, canvas, title) {
    if (!canvas) return;

    try {
      const dataUrl = canvas.toDataURL("image/png");
      const usableWidth = pdf.pageWidth - (pdf.margin * 2);
      const imageHeight = Math.min(80, usableWidth * 0.58);

      addSection(pdf, title);
      ensureSpace(pdf, imageHeight + 4);
      pdf.doc.addImage(dataUrl, "PNG", pdf.margin, pdf.cursorY, usableWidth, imageHeight);
      pdf.cursorY += imageHeight + 4;
    } catch (error) {
      console.error("Unable to embed chart in PDF:", error);
    }
  }

  function formatDateTime(value) {
    if (!value) return "Not available";

    const date = value instanceof Date ? value : new Date(value);
    if (Number.isNaN(date.getTime())) return "Not available";

    return date.toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short"
    });
  }

  function save(pdf, filename) {
    pdf.doc.save(filename);
  }

  window.PdfExportUtils = {
    createDoc,
    addTitle,
    addSection,
    addParagraph,
    addKeyValueLines,
    addTable,
    addCanvasImage,
    formatDateTime,
    save
  };
})();
