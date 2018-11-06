import React, { Component } from 'react';
import uniqueId from 'lodash/uniqueId';
import './App.css';
import data from './data.json';
import Items from './Items';
import NewItem from './NewItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { items: data.dataJson };
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.toggleItem = this.toggleItem.bind(this);
    this.markAllAsUnpacked = this.markAllAsUnpacked.bind(this);
  }

  addItem(item) {
    this.setState({ items: [item, ...this.state.items] });
    //  console.log(this.state.items);
  }

  removeItem(itemToRemove) {
    this.setState({
      items: this.state.items.filter(item => item.num !== itemToRemove.num)
    })
  }

  toggleItem(itemToToggle) {
    const items = this.state.items.map(item => {
      if (item.num !== itemToToggle.num)
        return item;
      return { ...itemToToggle, packed: !itemToToggle.packed }
    });
    this.setState({ items });
  }

  markAllAsUnpacked() {
    const items = this.state.items.map(item => {
      return { ...item, packed: false }
    });
    this.setState({ items });
  }

  render() {
    const { items } = this.state;
    //console.log(this.state.items);
    const packedItems = items.filter(item => item.packed);
    const unpackedItems = items.filter(item => !item.packed);

    return (
      <div className="App">
        <div className="row">
          <NewItem onSubmit={this.addItem} />
        </div>
        <div className="row">
          <div className="col-md-7">
            <Items title="Unpacked Items" items={unpackedItems}
              onRemove={this.removeItem} onToggle={this.toggleItem} />
          </div>
          <div className="col-md-5">
            <Items title="Packed Items" items={packedItems}
              onRemove={this.removeItem} onToggle={this.toggleItem} />
          </div>
        </div>
        <div className="row">
          <button className="btn btn-primary"
            onClick={this.markAllAsUnpacked} >Mark All As Unpacked</button>
        </div>
      </div>

    );
  }
}

export default App;
