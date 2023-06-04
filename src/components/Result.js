import React from "react";

const Result = () => {
  return (
    <div>
      <div className="tip">
        <div>
          <h3>Tip Amount</h3>
          <p> / person</p>
        </div>
        <h1>$0.00</h1>
      </div>
      <div className="total">
        <div>
          <h3>Total</h3>

          <p> / person</p>
        </div>
        <h1>$0.00</h1>
      </div>
      <button>Reset</button>
    </div>
  );
};

export default Result;
