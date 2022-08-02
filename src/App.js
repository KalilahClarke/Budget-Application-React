import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import TransactionsHome from '.Components/TransactionsHome'
import TransactionsIndex from "./Components/TransactionsIndex";
import TransactionShow from "./Components/TransactionShow";
import TransactionNewForm from './Components/TransactionNewForm'
import TransactionEdit from "./Components/TransactionEdit";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
        <Route path='/' element = {<TransactionsHome/>} />
        <Route path='/transactions' element = {<TransactionsIndex/>} />
        <Route path='/transactions/:index' element = {<TransactionShow/>}/>
        <Route path='/transactions/new' element = {<TransactionNewForm/>}/>
        <Route path='/transactions/:index/edit' element = {<TransactionEdit/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
