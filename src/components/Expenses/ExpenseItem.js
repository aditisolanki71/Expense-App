import React,{useEffect} from 'react'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
import './ExpenseItem.css'
const ExpenseItem = (props) => {
   useEffect(() => {
      console.log('item props',props)
   },[props])
   return (
      <li>
         <Card className="expense-item">
            {/* <h2>Date:-<Moment>{props.date}</Moment></h2> */}
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
               <h2>Title:-{props.title}</h2>
               <div className="expense-item__price">Amount:-{props.amount}</div>
               {/* <button onClick={clickHandler}>change title</button> */}
            </div>
         </Card>
      </li>
      )
   }
export default ExpenseItem;