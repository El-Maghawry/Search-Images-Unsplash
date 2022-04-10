import React from 'react';

class Searchbar extends React.Component {
    state = { term: ''};

    onFromSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term); // a trick to send data back to the parent
    };
  
    render() {
        return (
            <div>
                <form className='ui form segment' onSubmit={this.onFromSubmit}>
                    <div className="ui action input field flex">

                        <input className='field'
                            type="text" placeholder="Search..."
                            onChange={ (e) => this.setState({ term: e.target.value }) }
                            value= { this.state.term } />
                    </div>
                </form>
            </div>
        )
    }

}

export default Searchbar;