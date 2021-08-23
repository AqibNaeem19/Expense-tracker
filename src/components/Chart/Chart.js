import React from 'react';
import ChartBar from './ChartBar';
import '../Styles/Chart.css';

const Chart = props => {

  const dataPointsValue = props.dataPoints.map(dataPoint => dataPoint.value);
  const MaximumValue = Math.max(...dataPointsValue);

  //Filter months whose expense is greater than 0.
  const totalMonthExpense = props.dataPoints.filter(item => {
    return item.value > 0;
  })

  // render chart list. [Graph].
  const renderChartList = props.dataPoints.map((points, index) => {
    return (
      <ChartBar key={index}
        value={points.value}
        maxValue={MaximumValue}
        label={points.label}
      />
    )
  })

  return (
    <div className='Chart-component'>
      <div className='chart'>
        {renderChartList}
      </div>
      <div className='total-expenses'>
        {props.expense.length === 0 ? 
          <p> No Data </p> : 
          totalMonthExpense.map((points, index) => {
            return <p key={index}><span>{points.label}</span> ~ $ {points.value}</p>
          })
        }
      </div>
    </div>
  )
}

export default Chart;