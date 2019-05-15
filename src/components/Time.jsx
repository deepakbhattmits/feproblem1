import React, { Component } from 'react';
import { connect } from 'react-redux';
// import _ from 'lodash';

class Time extends Component {
    state={ totalTime : [], time: 0 }
    componentWillReceiveProps(){
       this.renderTime()
    }
    renderTime = () => {
        this.setState({totalTime: [...this.state.totalTime,this.props.time] }, () => { this.renderTotalArr() });
    }
    renderTotalArr = () => {
        this.setState({time: this.state.totalTime.splice(-1)[0] }, ()=> { this.time(); })
        // console.log('updated state : ',this.state.totalTime )
    }
    time = () => {
        return this.state.time;
    }
    render() {
console.log('props --->',this.props.time )
const { time } = this.props;
        return (
            <h1 className='ui header'>
                Time:{ time }
            </h1>
        );
    }
};
const mapStateToProps = ( state ) => {
    return {
        time: state.SpaceReducer.time,
        vehicles: state.SpaceReducer.vehicles,
    }
}
export default connect( mapStateToProps, null )( Time );
