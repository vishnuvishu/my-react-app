import React, { Component } from 'react'
import classes from './Person.css'
import withClass from '../../../hoc/withClass'
import Aux from '../../../hoc/Aux';
import PropTypes from 'prop-types';

class Person extends Component{

  constructor(props){
    super(props);
    console.log('[Person.js] Inside constructor', props);
  }

  componentWillMount(){
    console.log('[Person.js] componentWillMount()');
  }

  componentDidMount(){
    console.log('[Person.js] componentDidMount()');
    if(this.props.position === 0){
      this.inputElement.focus();
    }
  }

  render(){
    console.log('[Person.js] render()');
    return (
      <Aux>
        <p className={classes.para} onClick={this.props.click}>I am {this.props.name}. I am {this.props.age} years old</p>
        <p>{this.props.children}</p>
        <input
          ref={(inp) => {this.inputElement = inp }}
          onChange={this.props.changed}
          type="text"
          value={this.props.name}/>
      </Aux>
    )
    // return [
    //   <p key="1" onClick={this.props.click}>I am {this.props.name}. I am {this.props.age} years old</p>,
    //   <p key="2">{this.props.children}</p>,
    //   <input key="3" onChange={this.props.changed} type="text" value={this.props.name}/>
    // ]
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
}

export default withClass(Person, classes.Person);
