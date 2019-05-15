import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { fetchVehicles, fetchPlanets } from '../actions'
import _ from 'lodash';
import Radios from './Radios';

class DropDown extends Component {
    state={ 
            activeClass: false,
            value: { },
        }

    componentDidMount() {
        this.props.fetchVehicles();
        this.props.fetchPlanets();
    }
    
    handleChange = (event) => {
        // console.log(event.target);
      
        this.setState({
                        value: {...this.state.value, [event.target.id]: event.target.value},
                    });
        
        }
    renderDropDown = () => {
        const planets = this.props.planets;
        return(
           
            _.times(4, i =>
               
                <Fragment key={ i }>
                  
                     <div className="four wide column" id={ i } >
                       
                            <select className="ui dropdown" id={ i } value={ this.state.value[i] ? this.state.value[i] : '' } onChange={this.handleChange}>
                                <option value=''>-- Please Choose --</option>
                                {
                                    Object.values(planets).length > 0 ?  planets.map(({ name, distance },i) => {
                                        return <option key={ i } id={ i } value={ distance }>{ name}</option>;
                                    }) : ''
                                }
                            </select>
                            <div  id={ i } className={`ui form ${this.state.value[i] ? 'active' : 'hide'}`}>
                                <div className="grouped fields">
                                    <Radios id={ i } selected={ this.state.value[i]}/>
                                </div>
                            </div>
                            
                   
                    </div>
                    
                   

                
                    

                </Fragment>
                )
                 

        );
    }
    render () {
        // console.log('TEST : values',this.state.distance);
        return (
            <div className="ui grid">
           
                { this.renderDropDown() }
                
            </div>      
        );
    }
};
const mapStateToProps = ( state ) => {
    return {
        planets : state.SpaceReducer.planets,
        vehicles : state.SpaceReducer.vehicles
    }
}
export default connect(mapStateToProps, { fetchVehicles, fetchPlanets })(DropDown);