import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// import Modal from "react-bootstrap/Modal";
// import Button from "react-bootstrap/Button";

const API = process.env.REACT_APP_API_URL;

export default function TransactionNewForm() {
  const [transaction, setTransaction] = useState({
    date: "",
    name: "",
    amount: 0,
    from: "",
    category: "",
    type: "",
  });

  const navigate = useNavigate();
  const addTransaction = () => {
    axios
      .post(`${API}/transactions`, transaction)
      .then((response) => navigate(`/transactions`))
      .catch((error) => console.error(error));
  };

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  const handleAmount = (event) => {
    setTransaction({
      ...transaction,
      [event.target.id]: Number(event.target.value),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTransaction();
  };

  // const handleType = () =>{
  //   transaction.amount > 0 ? setTransaction({...transaction, [event.target.id]: "Credit"}): setTransaction({...transaction, [event.target.id]: "Debit"})
  // }
  // if(transaction.amount < 0){
  //   setTransaction({... transaction, ['type']:'Debit'});
  // }else if(transaction.amount > 0){
  //   setTransaction({... transaction, ['type']:'Credit'});
  // }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="Transaction Date">
        Transaction Date:
        <input
          id="date"
          value={transaction.date}
          type="date"
          onChange={handleTextChange}
          required
        />
      </label>
      <br></br>
      <label>
        Transaction Company:
        <input
          id="name"
          value={transaction.name}
          type="text"
          onChange={handleTextChange}
          required
        />
      </label>
      <br></br>
      <label>
        Transaction Amount: $
        <input
          id="amount"
          type="number"
          placeholder="0.00"
          onChange={handleAmount}
          value={transaction.amount}
          required
        />
      </label>
      <br></br>

      <label>
        Transaction Category:
        <select
          onChange={handleTextChange}
          required
          id="category"
          value={transaction.category}
        >
          <option value="" disabled selected>
            Select One
          </option>
          <option value="Car">Car</option>
          <option value="Deposit">Deposit</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Food & Drink">Food & Drink</option>
          <option value="Investment">Investment</option>
          <option value="Miscellaneous">Miscellaneous</option>
        </select>
      </label>
      <br></br>

      <button>Submit</button>
    </form>
  );
}
