import Reacr,{useState} from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
const NewExpense = (props) => {
   const [isEditing,setEditing] = useState(false);
   const saveExpenseFormHandler = (expenseData) => {
      const expense = {
         ...expenseData,
         id: Math.random().toString() 
      }
      console.log('new Expense',expense)
      props.onNewExpense(expense)
      setEditing(false);
   }
   const startEditingHandler = () => {
      setEditing(true);
   }
   const stopEditingHandler = () => {
      setEditing(false);
   }
   
   return (
      <div className="new-expense">
         {!isEditing && (
            <button onClick={startEditingHandler}>Add New Expense</button>
         )}
         {isEditing && (
            <ExpenseForm 
               onCancel={stopEditingHandler}
               onSaveExpenseForm={saveExpenseFormHandler}
            />
         )} 
      </div> 
   )
}
export default NewExpense;