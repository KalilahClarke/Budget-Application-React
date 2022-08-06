import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function TransactionEdit() {
  let { index } = useParams();
  const navigate = useNavigate();

  const [transaction, setTransaction] = useState({
    date: "",
    name: "",
    amount: 0,
    from: "",
    category: "",
    type: "",
  });

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };
  const handleAmount = (event) =>{
    setTransaction({ ...transaction, [event.target.id]: Number(event.target.value)})

  }
  
  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((response) => {setTransaction(response.data)
        console.log(response.data)
      })
      .catch((error) => console.log(error));
  }, []);

  const updateTransactions = () => {
    axios
      .put(`${API}/transactions/${index}`, transaction)
      .then((response) => {
        setTransaction(response.data);
        navigate(`/transactions/${index}`);
      })
      .catch((error) => console.error(error));
  };
  
  console.log(transaction.amount)

  const handleSubmit = (event) => {
    event.preventDefault();
    updateTransactions();
    navigate("/transactions");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="Transaction Date">Transaction Date:</label>
      <input
        id="date"
        value={transaction.date}
        type="date"
        onChange={handleTextChange}
        required
      />
      <br></br>
      <label>Transaction Company:</label>
      <input
        id="name"
        value={transaction.name}
        type="text"
        onChange={handleTextChange}
        required
      />
      <br></br>
      <label>Transaction Amount: $</label>
      <input
        id="amount"
        type="number"
        placeholder="0.00"
        onChange={handleAmount}
        value={transaction.amount}
        required
      />
      <br></br>

      <label>Transaction Category:</label>
      <select onChange={handleTextChange} value ={transaction.category}>
        <option value="" disabled >
          Select One
        </option>
        <option value="Car">Car</option>
        <option value="Deposit">Deposit</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Food & Drink">Food & Drink</option>
        <option value="Investment">Investment</option>
        <option value="Miscellaneous">Miscellaneous</option>
      </select>
      <br></br>
      <input type="submit" />
      <Link to={`/transactions/${index}`}>
        <button>Nevermind!</button>
      </Link>
    </form>
  );
}
