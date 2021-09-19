import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getToken } from '../actions';
import '../assets/css/styles.css';
import DropDown from './DropDown';
import Time from './Time';

const App = () =>{
    const dispatch = useDispatch();
    // Reset = () => {
    //     console.log('test');
    //     this.setState({ value: '' })
    // }
        // console.log('app',this.props);
    useEffect(() =>
    {
        dispatch(getToken());
    }, [dispatch]);
        return (
            <div className={`ui container`}>
                <div className='ui secondary menu'>
                    <div className='right item'>
                        <button className="button default-button ui item" >
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
export default App;