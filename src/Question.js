import React, { Component } from 'react';


export default class Question extends Component {
    render() {
        const { question, name, type } = this.props;
        let options = [];

        if (type === "select") {
            const listOptions = this.props.options.map((option) =>
                <option value={option.value}>{option.text}</option>
            );
            options = (
                <select name={name}>
                    <option>Seleccione una opcion</option>
                    {listOptions}
                </select>
            );
        } else if (type === "text") {
            options = (
                <input type="text" name={name} />
            );
        } else if (type === "yes-no") {
            options = (
                <div>
                    <input type="radio" value="1" name={name}/> <span>Si</span>
                    <input type="radio" value="0" name={name}/> <span>No</span>
                </div>
            );
        }

        return (
            <div className='Question'>
                <label>{question}</label>
                {options}
            </div>
        );
    };
}
