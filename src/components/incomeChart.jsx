import React from 'react'
import { Pie } from 'react-chartjs-2'
import { chart as ChartJS } from 'chart.js/auto'


export default class IncomeChart extends React.Component {
    render() {
        const sumSalary = () => {
            let sum = 0
            this.props.data.forEach(item => {if (item.category === 'Salary') sum += item.amount})
            return sum
        }
        const sumGifts = () => {
            let sum = 0
            this.props.data.forEach(item => {if (item.category === 'Gifts') sum += item.amount})
            return sum
        }
        const sumLending = () => {
            let sum = 0
            this.props.data.forEach(item => {if (item.category === 'Lending') sum += item.amount})
            return sum
        }
        const sumRentalIncome = () => {
            let sum = 0
            this.props.data.forEach(item => {if (item.category === 'Rental Income') sum += item.amount})
            return sum
        }
        const sumSale = () => {
            let sum = 0
            this.props.data.forEach(item => {if (item.category === 'Sale') sum += item.amount})
            return sum
        }
        const sumSaving = () => {
            let sum = 0
            this.props.data.forEach(item => {if (item.category === 'Saving') sum += item.amount})
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
                data: [sumSalary(), sumGifts(), sumLending(), sumRentalIncome(), sumSale(), sumSaving()],
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

