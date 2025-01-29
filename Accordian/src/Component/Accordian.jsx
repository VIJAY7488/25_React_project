import React, { useState } from "react";
import data from "./data";

function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [slectMultiple, setSelectMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function multipleSelection(getCurrentId) {
    let copyMultiple = [...slectMultiple];
    let findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);

    if (findIndexOfCurrentId === -1) {
      copyMultiple.push(getCurrentId);
    } else {
      copyMultiple.splice(findIndexOfCurrentId, 1);
    }

    setSelectMultiple(copyMultiple);
  }
  return (
    <div className="container">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        {enableMultiSelection
          ? "Disable Multi Selection"
          : "Enable Multi Selection"}
      </button>
      <div className="box">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div className="item" key={item.id}>
              <div
                className="title"
                onClick={
                  enableMultiSelection
                    ? () => multipleSelection(item.id)
                    : () => handleSingleSelection(item.id)
                }
              >
                <h3>{item.question}</h3>
                <span
                  style={{
                    fontSize: "30px",
                    fontWeight: "700",
                    cursor: "pointer",
                  }}
                >
                  +
                </span>
              </div>
              {enableMultiSelection
                ? slectMultiple.includes(item.id) && (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <h4 style={{ textAlign: "center" }}>{item.answer}</h4>
                    </div>
                  )
                : selected === item.id && (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <h4 style={{ textAlign: "center" }}>{item.answer}</h4>
                    </div>
                  )}
            </div>
          ))
        ) : (
          <div>Data is not Found!</div>
        )}
      </div>
    </div>
  );
}

export default Accordian;
