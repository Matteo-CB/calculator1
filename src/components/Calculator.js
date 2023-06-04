import React, { useState, useEffect } from "react";
import { setResultData } from "../feature/result.slice";
import { useSelector, useDispatch } from "react-redux";

const Calculator = () => {
  const dispatch = useDispatch();
  const [bill, setBill] = useState("");
  const resData = useSelector((state) => state);

  const updateBill = (e) => {
    const newBill = e.target.value;
    if (newBill === "" || /^\d+(\.\d*)?$/.test(newBill)) {
      setBill(newBill);
      dispatch(setResultData(newBill));
    }
  };

  useEffect(() => {
    dispatch(setResultData(bill));
  }, [bill]);

  const validateInput = (e) => {
    const value = e.target.value;
    if (value !== "" && !/^\d+$/.test(value)) {
      e.target.setCustomValidity("Invalid input");
    } else {
      e.target.setCustomValidity("");
    }
  };

  return (
    <div>
      <h3>Bill</h3>
      <form>
        <input
          onInput={updateBill}
          onBlur={validateInput}
          value={bill}
          type="text"
          className="dollar input"
          required
          pattern="^(?!.*\.$)\d*\.?\d*$"
        />
        <h3>Select Tip %</h3>
        <label htmlFor="radio1">5%</label>
        <input type="radio" name="percent" className="radio" id="radio1" />
        <label htmlFor="radio2">10%</label>
        <input type="radio" className="radio" id="radio2" name="percent" />
        <label htmlFor="radio3">15%</label>
        <input type="radio" className="radio" id="radio3" name="percent" />
        <label htmlFor="radio4">25%</label>
        <input type="radio" className="radio" id="radio4" name="percent" />
        <label htmlFor="radio5">50%</label>
        <input type="radio" className="radio" id="radio5" name="percent" />
        <input
          type="text"
          placeholder="Custom"
          className="custom input"
          pattern="^\d*$"
          onBlur={validateInput}
          onInput={(e) =>
            (e.target.value = e.target.value.replace(/[^\d]/g, ""))
          }
        />
        <h3>Number of People</h3>
        <input
          type="text"
          className="person input"
          required
          pattern="^\d*$"
          onBlur={validateInput}
          onInput={(e) =>
            (e.target.value = e.target.value.replace(/[^\d]/g, ""))
          }
        />
      </form>
    </div>
  );
};

export default Calculator;
