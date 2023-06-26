import React from "react";
import { GoChevronRight, GoChevronDown } from "react-icons/go";
import { MdFileDownload } from "react-icons/md";

export const PdfGroup = ({
  groupId,
  selected,
  setSelected,
  brand,
  pdfList,
}) => {
  const selectPdfGroup = (e) => {
    const pdfGroup = e.currentTarget;
    const id = pdfGroup.getAttribute("data-group-id");

    if (selected === id) {
      setSelected("");
    } else {
      setSelected(pdfGroup.getAttribute("data-group-id"));
    }
  };

  return (
    <div
      data-group-id={groupId}
      onClick={selectPdfGroup}
      className={"pdfGroupSection"}
    >
      <div className={"pdfBrand"}>
        <div>{brand}</div>
        {selected === groupId ? (
          <GoChevronDown className="pdfIcon" />
        ) : (
          <GoChevronRight className="pdfIcon" />
        )}
      </div>
      <div className={`pdfGroup${selected === groupId ? " showPdfGroup" : ""}`}>
        {(pdfList ?? []).map((pdf) => {
          return (
            <div className="pdfLink">
              <MdFileDownload className="pdfIcon" />
              <a href={pdf.href} download={pdf.downloadName}>
                {pdf.displayName}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
