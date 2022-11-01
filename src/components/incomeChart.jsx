import React from 'react'
import { Pie } from 'react-chartjs-2'
import { chart as ChartJS } from 'chart.js/auto'


export default class IncomeChart extends React.Component {
    render() {
        const sum = (category) => {
            let sum = 0
            this.props.data.forEach(item => {if (item.category === category) sum += item.amount})
            return sum
        }
        const data = {
            labels: [
                'Salary',
                'Gifts',
                'Lending',
                'Rental Income',
                'Sale',
                'Saving',
            ],
            datasets: [{
                label: 'My first Dataset',
                data: [sum('Salary'), sum('Gifts'), sum('Lending'), sum('Rental Income'), sum('Sale'), sum('Saving')],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
                hoverOffset: 4
            }]
        }
        return (
            <div className='container'>
                <Pie data={data} />
            </div>
        );
    }
}

