import React, { Component } from 'react';
import './App.css';
import Amount from './components/amount';
import BigCard from './components/bigCard';
import Card from './components/card';
import Form from './components/form';
import ExpenseChart from './components/expenseChart';
import IncomeChart from './components/incomeChart';
import { nanoid } from 'nanoid'

class App extends Component {
	constructor (props) {
		super(props)

		if (localStorage.getItem('data') === null) {
			localStorage.setItem('data', JSON.stringify([]))
		}

		this.state = {
			whatToShow: "form",
			data: JSON.parse(localStorage.getItem('data')),
			balance: JSON.parse(localStorage.getItem('totalIncome')) - JSON.parse(localStorage.getItem('totalExpense')),
			obj: {id: 1, amount: 0, type: "expense", category: "Shopping", date: new Date()},
			isShown: false
		}
	}

	// Stocker la nouvelle objet dans l'objet "this.state.obj"
	onChange = (e) => {
		const name = e.target.name
		const value = e.target.value
		let id = nanoid()
		this.setState({obj: {...this.state.obj, [name]: value, id: id}})
	}

	onSubmit = (e) => {
		e.preventDefault()

		if (this.state.obj.type === "expense") {
			if (this.state.balance < this.state.obj.amount) {
				alert('Sorry, but you don\'t have enough money')
			} else {
				this.setState({data: [...this.state.data, this.state.obj]})
				this.setState({balance: parseFloat(this.state.balance) - parseFloat(this.state.obj.amount)})
			}
		} else {
			this.setState({data: [...this.state.data, this.state.obj]})
			this.setState({balance: parseFloat(this.state.balance) + parseFloat(this.state.obj.amount)})
		}
	}

	// Supprimer un objet à traver son ID 
	deleteItem = (e) => {
		if (window.confirm('Are you sure you want to delete this?')) {
			let delId = e.target.dataset.id
			let newData =  this.state.data.filter(item => item.id !== delId)
			localStorage.setItem('data', JSON.stringify(newData))
			this.setState({data: JSON.parse(localStorage.getItem('data'))})
		}
	}

	// Modify un objet 
	modify = (obj, fn) => {
		console.log(obj)
		let index = 0
		this.state.data.forEach(item => {
			if (item.id === obj.id) {
				this.setState(this.state.data[index] = obj)
				localStorage.setItem('data', JSON.stringify(this.state.data))
			} else {
				index++
			}
		})
		fn()
	}
	render() {
		const incomeLst = this.state.data.filter(item => item.type === "income")
		const expenseLst = this.state.data.filter(item => item.type === "expense")

		let totalIncome = 0;
		incomeLst.filter(item => totalIncome+=parseFloat(item.amount))
		let totalExpense = 0;
		expenseLst.filter(item => totalExpense+=parseFloat(item.amount))

		localStorage.setItem('totalIncome', totalIncome)
		localStorage.setItem('totalExpense', totalExpense)

		return (
			<div className="App">
				<div className='info'>
					<Amount title="Total Income" amount={totalIncome} type="in"/>
					<Amount title="Balance" amount={this.state.balance} type="without"/>
					<Amount title="Total Expenses" amount={totalExpense} type="out"/>
				</div>
				<div className='bigCards'>
					<BigCard title="Incomes">
						{
							incomeLst.map((item) => 
								<Card 
									key={item.id} 
									id={item.id} 
									class="clrGreen" 
									amount={item.amount} 
									type={item.type}
									category={item.category}
									date={item.date}
									delete={this.deleteItem}
									modify={this.modify} 
									lst={incomeLst}
								/>
							)
						}
					</BigCard>
					<div className='bigCard'>
						<div className='actions'>
							<button className='bggreen' onClick={() => this.setState({whatToShow: "income"})}>
								<img src='./img/income.png' alt='income'/>
							</button>
							<button className='' onClick={() => this.setState({whatToShow: "form"})}>
								<img src='./img/add.png' alt='add' />
							</button>
							<button className='bgred' onClick={() => this.setState({whatToShow: "expense"})}>
								<img src='./img/expense.png' alt="expenses" />
							</button>
						</div>
						{
							this.state.whatToShow === "form" 
							? <Form submit={this.onSubmit} change={this.onChange}/> 
							: this.state.whatToShow === "income" 
							? <IncomeChart data={incomeLst} /> : <ExpenseChart data={expenseLst}/>
						}
					</div>
					<BigCard title="Expenses">
						{
							expenseLst.map((item) => 
								<Card 
									key={item.id} 
									id={item.id} 
									class="clrRed" 
									amount={item.amount} 
									type={item.type}
									category={item.category} 
									date={item.date}
									delete={this.deleteItem} 
									modify={this.modify}
									lst={expenseLst}
								/>
							)
						}
					</BigCard>
				</div>
				<div className={`resetApp ${this.state.isShown && "selected"}`}>
					<img className={this.state.isShown && "selected"} src="./img/arrow.png" onClick={() => {this.setState({isShown: !this.state.isShown})}} alt='arrow'/>
					<button onClick={() => {if (window.confirm("Are you sure you want to reset App ?")) localStorage.clear()}}>Reset App</button>
				</div>
			</div>
		)
	}
	componentDidUpdate(prevProps, prevState) {
		if (this.state.data !== prevState.data) {
			localStorage.setItem('data', JSON.stringify(this.state.data))
			this.setState({balance: JSON.parse(localStorage.getItem('totalIncome')) - JSON.parse(localStorage.getItem('totalExpense'))})
		}
	}
}

export default App;
