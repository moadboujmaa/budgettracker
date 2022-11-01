import React, { Component } from 'react'


export default class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isModify: false,
            obj: {
                id: props.id, 
                amount: props.amount, 
                type: props.type, 
                category: props.category, 
                date: new Date()
            },
        }
    }
    handleChange = e => {
        const name = e.target.name
        const value = e.target.value

        this.setState({obj: {...this.state.obj, id: this.props.id, [name]: value}})
    }
    toggle = () => {
        this.setState({isModify: !this.state.isModify})
    }
    submit = (e) => {
        e.preventDefault()

        this.props.modify(this.state.obj, this.toggle)
    }
    render() {  
        return (
            <div className='card-container'>
                <div className='card'>
                    <p className={this.props.class}>{this.props.amount}</p>
                    <p className='category'>{this.props.category}</p>
                    <div className=''>
                        <button className='delete' data-id={this.state.obj.id} onClick={this.props.delete}>
                            <img src='./img/trash.png' data-id={this.state.obj.id} alt='delete' />
                        </button>
                        <button className='modify' data-id={this.state.obj.id} data-amount={this.state.obj.amount} onClick={this.toggle}>
                            <img src='./img/modify.png' data-id={this.state.obj.id} data-amount={this.state.obj.amount} alt='modify' />
                        </button>
                    </div>
                </div>
                {
                    this.state.isModify && 
                    <form className='modify-form' onSubmit={this.submit}>
                        <input type='number' name='amount' onChange={this.handleChange} />
                        <select name="type" onChange={this.handleChange} >
                            <option disabled selected>--Type</option>
                            <option value="expense">Expense</option>
                            <option value="income">Income</option>
                        </select>
                        <select name="category" onChange={this.handleChange} >
                            <option disabled selected>--Category</option>
                            <optgroup label='Expense'>
                                <option value="Food & drinks">Food & drinks</option>
                                <option value="Shopping">Shopping</option>
                                <option value="Transport">Transport</option>
                                <option value="Entertainment">Entertainment</option>
                                <option value="Investments">Investments</option>
                                <option value="Communication">Communication</option>
                            </optgroup>
                            <optgroup label='Income'>
                                <option value="Salary">Salary</option>
                                <option value="Gifts">Gifts</option>
                                <option value="Lending">Lending</option>
                                <option value="Rental Income">Rental Income</option>
                                <option value="Sale">Sale</option>
                                <option value="Saving">Saving</option>
                            </optgroup>
                        </select>
                        <input type="submit" value="Modify" />
                    </form>
                }
            </div>
        )
    }
}
