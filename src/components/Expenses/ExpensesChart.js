import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
   const chartDataPoints = [
      { label: 'jan', value: 0 },
      { label: 'feb', value: 0 },
      { label: 'mar', value: 0 },
      { label: 'apr', value: 0 },
      { label: 'may', value: 0 },
      { label: 'jun', value: 0 },
      { label: 'jul', value: 0 },
      { label: 'aug', value: 0 },
      { label: 'sep', value: 0 },
      { label: 'oct', value: 0 },
      { label: 'nov', value: 0 },
      { label: 'dec', value: 0 },
   ];

   for(const expense of props.expenses) {
      console.log('expensechart',expense)
      const expenseMonth = expense.date.getMonth();
      chartDataPoints[expenseMonth].value += expense.amount;
   }
   return (
      <div>
         <Chart dataPoints={chartDataPoints} />
      </div>
   )
}
export default ExpensesChart;