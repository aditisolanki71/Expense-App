import React,{useState} from 'react'
import './App.css';
import NewExpense from './components/NewExpense/NewExpense'
import Expenses from './components/Expenses/Expenses'
const App = () => {
  const dummyExpenses = [
    {
    date: new Date('2021-12-19T12:59-0500'),
    id:'e1',
    title:'aditi',
    amount:100
  },
  {
    date: new Date('2021-11-19T12:59-0500'),
    id:'e2',
    title:'arjun',
    amount:200
  },
  {
    date: new Date('2021-10-19T12:59-0500'),
    id:'e3',
    title:'moni',
    amount:300
  },
];
  const [expenses,setExpenses] = useState(dummyExpenses)
  const onNewExchangeHandler = (expense) => {
    console.log('app',expense)
    //setExpenses([expense,...expenses])
    setExpenses((prevExpense) => {
      return [expense,...prevExpense]
    })
  }
  return (
    <div className="App">
      <h1 style={{color:'white'}}>Expense App </h1>
      <NewExpense onNewExpense={onNewExchangeHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
