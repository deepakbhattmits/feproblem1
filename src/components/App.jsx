import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getToken } from '../actions';
import '../assets/css/styles.css';
import DropDown from './DropDown';
import Time from './Time';

class App extends Component {
    componentDidMount() {
        this.props.getToken();
    }
    // Reset = () => {
    //     console.log('test');
    //     this.setState({ value: '' })
    // }
    render() {
        // console.log('app',this.props);
        return (
            <div className={`ui container`}>
                <div className='ui secondary menu'>
                    <div className='right item'>
                        <button className="button default-button ui item" onClick={ this.Reset }>
                            Reset
                        </button> 
                    </div>
                </div>
                <h1 className="ui header">Finding Falcone !</h1>
                <div className='ui grid'>
                <div className="twelve wide column">
                    <DropDown />
                </div>
                <div className="four wide column">
                       <Time time={ this.props.time } />
                </div>

                </div>
              </div>
        );
    }
};
export default connect(null,{ getToken } )(App);