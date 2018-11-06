import React, { Component } from 'react';
import Item from './Item';
import Filter from './Filter';

export default class Items extends Component {
    constructor(props) {
        super(props);
        this.state = { searchTerm: "" }
        this.updateSearchTerm = this.updateSearchTerm.bind(this);
    }

    updateSearchTerm(searchTerm) {
        this.setState({ searchTerm });
    }


    render() {
        const { items, title, onRemove, onToggle } = this.props;

        return (
            <div className="jumbotron">
                <h2>{title} ({items.length})</h2>

                <Filter searchTerm={this.state.searchTerm}
                    onChange={this.updateSearchTerm} />

                {items
                    .filter(item =>
                        item.value.toLowerCase().includes(this.state.searchTerm.toLowerCase())
                    )
                    .map(item => (
                        <Item key={item.num}
                            item={item}
                            onRemove={() => onRemove(item)}
                            onToggle={onToggle}
                        />
                    ))
                }
            </div>

        )
    }
}
