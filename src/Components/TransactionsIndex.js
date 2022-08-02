import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./TransactionsIndex.css";

const API = process.env.REACT_APP_API_URL;

export default function TransactionsIndex() {
  const [total, setTotal] = useState(0);
  const [transactionsData, setTransactionsData] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((response) => {
        setTransactionsData(response.data);
        let grandTotal = 0;
        let accumulator = response.data.map(
          (transaction) => transaction.amount
        );

        for (let i = 0; i < accumulator.length; i++) {
          grandTotal += accumulator[i];
        }
        console.log(grandTotal);
        setTotal(grandTotal.toFixed(2));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log(transactionsData)

  return (
    <div className='transactions'>
      <h1>Bank Account Total: <br></br><span className={total > 0 ? 'positive':'negative'}>{`$${total}`}</span></h1>

      {transactionsData.map((transaction, index) => {
        return (
          <div className="transaction" key={index}>
            <p className="date">{transaction.date.toPrimitive}</p>
            <Link to={`/transactions/${index}`}>
              <p className="name">{transaction.name}</p>
            </Link>
            <p className="amount">${transaction.amount}</p>
          </div>
        );
      })}
    </div>
  );
}
