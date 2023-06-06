import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetResultData } from "../feature/result.slice";

const Result = () => {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.result.result);
  const tip = useSelector((state) => state.result.tip);
  const tipAmount = (parseFloat(tip) / 100) * parseFloat(result);

  const handleReset = () => {
    dispatch(resetResultData());
  };

  return (
    <div className="result">
      <div className="tip">
        <div>
          <h3>Tip Amount</h3>
          <p> / person</p>
        </div>
        <h1 className="price">${!isNaN(tipAmount) ? tipAmount.toFixed(2) : "0.00"}</h1>
      </div>
      <div className="total">
        <div>
          <h3>Total</h3>
          <p> / person</p>
        </div>
        <h1 className="price">${!isNaN(result) && !isNaN(tipAmount) ? (parseFloat(result) + tipAmount).toFixed(2) : "0.00"}</h1>
      </div>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Result;
