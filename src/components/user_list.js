import React, {Component} from 'react';
import {render} from 'react-dom';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import UserItem from './user_item'

const SortableItem = SortableElement(({value}) =>
        <li  className="list-group-item list-group-item-action">
            <UserItem data={value} />
        </li>
);

const SortableList = SortableContainer(({items}) => {
  return (
      <nav>
        <ul className="list-group ">
        {items.map((value, index) => (
            <SortableItem key={`item-${index}`} index={index} value={value} />
        ))}
        </ul>
      </nav>
  );
});

class SortableComponent extends Component {
    constructor(props){
        super(props)
    }

    render() {
        if(this.props.items.length > 0){
            return <SortableList items={this.props.items} onSortEnd={this.props.onSortEnd} />;
        }else{
            return null
        }
    }
}

export default SortableComponent