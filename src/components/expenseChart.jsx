import React from 'react'
import { Pie } from 'react-chartjs-2'
import { chart as ChartJS } from 'chart.js/auto'


export default class ExpenseChart extends React.Component {
    render() {
        console.log(this.props.data)
        const sumFnD = () => {
            let sum = 0
            this.props.data.forEach(item => {if (item.category === 'Food & drinks') sum += item.amount})
            return sum
        }
        const sumShopping = () => {
            let sum = 0
            this.props.data.forEach(item => {if (item.category === 'Shopping') sum += item.amount})
            return sum
        }
        const sumTrans = () => {
            let sum = 0
            this.props.data.forEach(item => {if (item.category === 'Transport') sum += item.amount})
            return sum
        }
        const sumEntertainment = () => {
            let sum = 0
            this.props.data.forEach(item => {if (item.category === 'Entertainment') sum += item.amount})
            return sum
        }
        const sumInvestment = () => {
            let sum = 0
            this.props.data.forEach(item => {if (item.category === 'Investments') sum += item.amount})
            return sum
        }
        const sumCommunication = () => {
            let sum = 0
            this.props.data.forEach(item => {if (item.category === 'Communication') sum += item.amount})
            return sum
        }
        const data = {
            labels: [
                'Food &  Drinks',
                'Shopping',
                'Transport',
                'Entertainment',
                'Investment',
                'Communication',
            ],
            datasets: [{
                label: 'My first Dataset',
                data: [sumFnD(), sumShopping(), sumTrans(), sumEntertainment(), sumInvestment(), sumCommunication()],
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

