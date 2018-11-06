import React, { Component } from 'react'

export default class Filter extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const { onChange } = this.props;
        const value = e.target.value;
        onChange(value);
    }

    render() {
        const { searchTerm } = this.props;

        return (
            <input className="form-control"
                value={searchTerm}
                onChange={this.handleChange}
            />
        )
    }
}
