import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./TransactionShow.css";

const API = process.env.REACT_APP_API_URL;

export default function TransactionShow() {
  const navigate = useNavigate();
  const { index } = useParams();
  
  
  const [transaction, setTransaction] = useState({});

  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((response) => {
        setTransaction(response.data);
        console.log(response);
      })

      .catch((error) => console.error(error));
  }, [index]);

  const handleDelete = () => {
    axios
      .delete(`${API}/transactions/${index}`)
      .then((response) => navigate(`/transactions`))
      .catch((error) => console.error(error));
  };

  return (
    <div className="transactionInfo">
      <section>
        <p>{transaction.name}</p>
        <p>{transaction.date}</p>
        <p>$ {transaction.amount?.toFixed(2)}</p>
        <p>{transaction.category}</p>
        <button
          onClick={() => {
            navigate(`/transactions/${index}/edit`);
          }}
        >
          Edit
        </button>
        <button onClick={handleDelete}>Delete</button>
      </section>
    </div>
  );
}
