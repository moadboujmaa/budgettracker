import React from 'react'

export default function Form(props) {
    return (
        <form onSubmit={props.submit} className="addAmount">
            <input type="number" name='amount' placeholder='Your amount' min='1' onChange={props.change} required/>
            <select name="type" onChange={props.change}>
                <option disabled selected>--Type</option>
                <option value="expense">Expense</option>
                <option value="income">Income</option>
            </select>
            <select name="category" onChange={props.change}>
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
            <input type="submit" value="Add Balance" />
        </form>
    )
}
