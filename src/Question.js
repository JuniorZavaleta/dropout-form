import React, { Component } from 'react';


export default class Question extends Component {
    render() {
        const { question, name, type } = this.props;
        let options = [];

        if (type === "select") {
            const listOptions = this.props.options.map((option) =>
                <option key={option.value} value={option.value}>{option.text}</option>
            );
            options = (
                <select name={name}>
                    <option value="">Seleccione una opcion</option>
                    {listOptions}
                </select>
            );
        } else if (type === "text") {
            options = (
                <input type="text" name={name} />
            );
        } else if (type === "yes-no") {
            options = (
                <div className="radio-picker">
                    <label>
                        <input type="radio" value="1" name={name}/> <span>Si</span>
                    </label>
                    <label>
                        <input type="radio" value="0" name={name}/> <span>No</span>
                    </label>
                </div>
            );
        }

        return (
            <div className='Question'>
                <div className="input-field">
                    {options}
                    <label>{question}</label>
                </div>
            </div>
        );
    };
}
