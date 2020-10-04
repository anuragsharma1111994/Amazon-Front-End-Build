import React from "react";
import "./Subtitle.css";
import CurrencyFormat from "react-currency-format";

function Subtitle() {
  return (
    <div className="subtitle">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal (0 items):
              <strong>0</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This Order Contain gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousendSepator={true}
        prefix={"$"}
      />
      <button>Procees to Checkout</button>
    </div>
  );
}

export default Subtitle;
