import React, { useState, useEffect, useRef } from "react";
import { setResultData, setTipData } from "../feature/result.slice";
import { useSelector, useDispatch } from "react-redux";



const Calculator = () => {
  const dispatch = useDispatch();
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const resData = useSelector((state) => state);
  const radiosRef = useRef(null);

  const updateBill = (e) => {
    const newBill = e.target.value;
    if (newBill === "" || /^\d{0,5}(\.\d{0,2})?$/.test(newBill)) {
      setBill(newBill);
      dispatch(setResultData(newBill));
    }
  };

  const updateTip = (e) => {
    const newTip = e.target.value;
    if (newTip === "" || /^\d+(\.\d*)?$/.test(newTip)) {
      setTip(newTip);
      dispatch(setTipData(newTip));
    }
  };

  useEffect(() => {
    dispatch(setResultData(bill));
  }, [bill]);

  useEffect(() => {
    dispatch(setTipData(tip));
  }, [tip]);

  useEffect(() => {
    console.log(radiosRef.current.childElementCount);
  }, [radiosRef]);

  const validateInput = (e) => {
    const value = e.target.value;
    if (value !== "" && !/^\d+$/.test(value)) {
      e.target.setCustomValidity("Invalid input");
    } else if (value.length > 3) {
      e.target.setCustomValidity("Maximum 3 digits allowed");
    } else {
      e.target.setCustomValidity("");
    }
  };

  const handleRadioChange = (e) => {
    const newTip = e.target.value;
    setTip(newTip);
    dispatch(setTipData(newTip));
  };

  return (
    <div className="calculator">
      <h3>Bill</h3>
      <form>
        <input
          onInput={updateBill}
          onBlur={validateInput}
          value={bill}
          type="text"
          className="dollar input"
          pattern="^(?!.*\.$)\d{0,5}(\.\d{0,2})?$"
        />
        <div className="selectip">
        <h3>Select Tip %</h3>
        <div ref={radiosRef} className="gridradio">
          
          <input
            type="radio"
            name="percent"
            className="radio label"
            value={"5"}
            id="radio1"
            onChange={handleRadioChange}
          /><label htmlFor="radio1">5%</label>
          
          <input
            type="radio"
            className="radio label"
            value={"10"}
            id="radio2"
            name="percent"
            onChange={handleRadioChange}
          /><label htmlFor="radio2">10%</label>
          
          <input
            type="radio"
            className="radio label"
            value={"15"}
            id="radio3"
            name="percent"
            onChange={handleRadioChange}
          /><label htmlFor="radio3">15%</label>
          
          <input
            type="radio"
            className="radio label"
            id="radio4"
            value={"25"}
            name="percent"
            onChange={handleRadioChange}
          /><label htmlFor="radio4">25%</label>
          
          <input
            type="radio"
            className="radio label"
            value={"50"}
            id="radio5"
            name="percent"
            onChange={handleRadioChange}
          /><label htmlFor="radio5">50%</label>
        <input
          type="text"
          placeholder="Custom"
          className="custom input label"
          pattern="^\d*$"
          onBlur={validateInput}
          onInput={(e) =>
            (e.target.value = e.target.value.replace(/[^\d]/g, ""))
          }
          maxLength={3}
          value={tip}
          onChange={updateTip}
        />
        </div></div>
        <h3>Number of People</h3>
        <input
          type="text"
          className="person input"
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
