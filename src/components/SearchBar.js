import React from 'react';

class SearchBar extends React.Component{
    state = { term: '' };                                    // Refactoring the form element to be a controlled element
    // onInputChange(event){
    //     console.log(event.target.value);                  // this would contain the user input from keyboard
    // }
    
    onFormSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    };
    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" value={this.state.term} onChange={e => this.setState({ term: e.target.value })} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;