import React, { Component } from 'react';
import './Item.css';

export default class Item extends Component {

    render() {
        const { item, onRemove } = this.props;

        return (
            <article className="Item">
                <label htmlFor={item.num}>
                    <div className="form-check">
                        <input type="checkbox"
                            checked={item.packed}
                            num={item.num}
                            onChange={() => this.props.onToggle(item)}
                            className="form-check-input" />
                        &nbsp;
                        {item.value}
                    </div>
                </label>
                <button className="Item-remove" onClick={onRemove}>
                    Remove
                </button>
            </article>
        );
    }
}
