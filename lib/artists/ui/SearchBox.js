import React, { Component } from "react";

export default class SearchBox extends Component {
    handleChange(ev) {
        ev.preventDefault();
        this.props.onSearch(this.refs.searchBoxInput.value);
    }

    queryChange(ev) {
        ev.preventDefault();
        this.props.onQueryChange(ev.target.value);
    }

    render(){
        return (
            <form onSubmit={(ev) => this.handleChange(ev)}>
                <input 
                    type="text" 
                    placeholder="Search for an artist..." 
                    value= {this.props.searchQuery}
                    ref="searchBoxInput"
                    onChange= {(ev) => this.queryChange(ev)}
                />
            </form>
        );
    }
}
