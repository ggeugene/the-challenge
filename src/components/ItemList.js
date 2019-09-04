import React, { Component } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/items';

class ItemList extends Component {
    constructor(props) {
        super(props);

        this.renderList = this.renderList.bind(this);
    }

    renderList(items) {
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
        const { url, listId } = this.props;
        this.props.fetchData(url, listId);
    }

    render() {
        const { items, listId } = this.props;
        const list = items.items[listId] ? items.items[listId] : undefined;

        if (list) {
            return list.pending ? (
                <div>loading...</div>
            ) : list.error ? (
                <div>{list.error.toString()}</div>
            ) : (
                this.renderList(list.items)
            );
        }
        return this.renderList(null);
    }
}

const mapStateToProps = state => {
    return {
        items: state,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchData: (url, id) => dispatch(itemsFetchData(url, id)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemList);
