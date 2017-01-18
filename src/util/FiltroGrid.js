import React from 'react';
var _ = require('underscore'),
    squish = require('object-squish');

var FiltroGridFunction = function(items, query) {
    return _.filter(items, (item) => {
        var flat = squish(item);

        for (var key in flat) {
            if (String(flat[key]).toLowerCase().indexOf(query.toLowerCase()) >= 0)
                return true;
        }

        return false;
    });
};

var FiltroGrid = React.createClass({
    getInitialState() {
        return {
            "query": ""
        };
    },
    searchChange(event) {
        this.setState({
            query: event.target.value
        });
        // this line is important
        this.props.changeFilter(this.state.query);
    },
    render() {
        return (
            <div className="filter-container">
                <input type="text"
                       name="search"
                       placeholder="Pesquisar..."
                       onChange={this.searchChange} />
            </div>
        );
    }
});

module.exports = {FiltroGrid, FiltroGridFunction};