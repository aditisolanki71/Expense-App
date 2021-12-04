import React,{useEffect,useState} from 'react'
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'
import './Expenses.css'
const Expenses = (props) => {
   const [filteredYear,setFilteredYear] = useState('2020');

   useEffect(() => {
      console.log('expense props',props)
   },[props])

   const filterChangeHandler = (selectedYear) => {
      setFilteredYear(selectedYear)
   }

   const filteredExpenses = props.items.filter(expense => {
      return expense.date.getFullYear().toString() === filteredYear;
   });

   return (
      <Card className="expenses">
         <ExpenseFilter 
            selected={filteredYear}
            onChangeFilter={filterChangeHandler}
         />
         <ExpensesChart expenses={filteredExpenses}/>
         <ExpensesList items={filteredExpenses} />
         {/* {filteredExpenses && filteredExpenses.length === 0
            ? ( <p>No expense Fond</p> )
            : (filteredExpenses && filteredExpenses.map((expense,index) => 
            <ExpenseItem 
               key={index}
               title={expense.title}
               amount={expense.amount}
               date={expense.date}
            />))} */}
         {/* props && props.items && props.items.map((expense,index) =>  */}
         {/* {filteredExpenses && filteredExpenses.map((expense,index) => 
            <ExpenseItem 
               key={index}
               title={expense.title}
               amount={expense.amount}
               date={expense.date}
            />)
         } */}
      </Card>
   )
}
export default Expenses;