import React from "react";

const PurchaseEntryInputs = ({ renderInput, renderDatePicker }) => {
  return (
    <div className="row">
      <div className="col-3">{renderDatePicker("date")}</div>

      <div className="col-3">{renderInput("billNumber", "Bill Number")}</div>
      <div className="col-3">{renderInput("partyName", "Party name")} </div>
      <div className="col-3">{renderInput("gstNumber", "GST Number")}</div>
    </div>
  );
};

export default PurchaseEntryInputs;
