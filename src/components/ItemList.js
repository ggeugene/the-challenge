import React, { Component } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/items';

class ItemList extends Component {
    constructor(props) {
        super(props);

        this.renderList = this.renderList.bind(this);
    }

    renderList(items) {
        console.log(items);
        const listItems = items
            ? items.map(item => {
                  let subList;
                  if (item.children && item.children.length) {
                      subList = this.renderList(item.children);
                  }
                  return (
                      <li key={item.id}>
                          {item.label}
                          {subList ? <ul>{subList}</ul> : null}
                      </li>
                  );
              })
            : null;
        return <ul>{listItems}</ul>;
    }

    componentDidMount() {
        const { url, nested } = this.props;

        this.props.fetchData(url, nested);
    }

    render() {
        // console.log(this.props.items);
        const { nested, items } = this.props;

        if (nested) {
            console.log(this.props.items);
        }

        return !nested ? (
            <ul>{items ? items.map(item => <li key={item.id}>{item.label}</li>) : null}</ul>
        ) : (
            this.renderList(this.props.items)
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        items: ownProps.nested ? state.nestedItems.items : state.items.items,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchData: (url, nested) => dispatch(itemsFetchData(url, nested)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemList);
