import React from 'react';
import ChartBar from './ChartBar';
import '../Styles/Chart.css';

const Chart = props => {

  const dataPointsValue = props.dataPoints.map(dataPoint => dataPoint.value);
  const MaximumValue = Math.max(...dataPointsValue);

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
    <div className='chart'>
      { renderChartList }
    </div>
  )
}

export default Chart;