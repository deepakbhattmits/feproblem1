import React,{ Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getTime } from '../actions';
import App from './App';
class Radios extends Component {
    state = { 
        radio : '',
        reachesDistance : {},
        time: {},
        checked: 0
    }  
    handleChange = ( e ) => {
        console.log(this.state,e.target.speed);
        let objSpeed = Object.assign({},this.state.time,{ [this.props.id]:( this.props.selected / parseInt(e.target.speed) ) });
        console.log(objSpeed);
        this.setState({time: objSpeed,checked: e.target.id, radio: e.target.id, }, () => {  console.log('this dropdown last time : ',this.state.time) });

    }
    render = () => {
        
        const vehicles = this.props.vehicles;
        
        if(Object.values(vehicles).length <= 0 ) {
            return <div>Loading...</div>
        }
        return vehicles.map( ({name, total_no, max_distance, speed},i) => {
            return (                   
                    <div className={`field ${ max_distance < this.props.selected ? 'disabled' : ''}`} key={ i } >
                        <div className="ui radio">
                        {/* { console.log(typeof (this.props.selected / speed))} */}
                            <input 
                                    className={``}
                                    id={ name } 
                                    speed = { speed }
                                    type="radio" 
                                    name={`planet-${ this.props.id }`} 
                                    value={ this.state.chkbox === name ? total_no - 1 : total_no } 
                                    // defaultChecked={this.state.radio} 
                                    defaultChecked={this.state.checked === i? true: false}
                                    onChange={ this.handleChange  } />
                            <label htmlFor={`planet-${ this.props.id }`}>{ name } {` (${ this.state.radio === name ? total_no - 1 : total_no } ) `}</label>
                            
                        </div>
                       
                    </div>
                );      
          });        
    }
    
    render() {
        console.log('TEST time :',this.state.time);
        return (
                <Fragment>
                    { this.render() }
                  <App time={ this.props.time } />
                 
                </Fragment>
                   
               
           
        );
    }
};
const mapStateToProps = ( state ) => {
    return {
        vehicles: state.SpaceReducer.vehicles,
        planets: state.SpaceReducer.planets,
    }
}
export default connect(mapStateToProps,  { getTime }  )(Radios);