import React, { Component } from 'react';
import uniqueId from 'lodash/uniqueId'


export default class NewItem extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        // const value = e.target.value;
        this.setState({ value: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const { value } = this.state;
        const { onSubmit } = this.props;
        onSubmit({ value, id: uniqueId, packed: false });
        this.setState({ value: '' });
    }

    render() {
        const { value } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input type="text" value={value}
                        className="form-control"
                        placeholder="Enter New Item"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-group">
                    <input type="submit" className="btn btn-primary" />
                </div>
            </form>
        )
    }
}
