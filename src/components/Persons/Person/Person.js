import React, { Component } from 'react'
import classes from './Person.css'

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
  }

  render(){
    console.log('[Person.js] render()');
    return (
      <div className={classes.Person}>
        <p className={classes.para} onClick={this.props.click}>I am {this.props.name}. I am {this.props.age} years old</p>
        <p>{this.props.children}</p>
        <input onChange={this.props.changed} type="text" value={this.props.name}/>
      </div>
    )
    // return [
    //   <p key="1" onClick={this.props.click}>I am {this.props.name}. I am {this.props.age} years old</p>,
    //   <p key="2">{this.props.children}</p>,
    //   <input key="3" onChange={this.props.changed} type="text" value={this.props.name}/>
    // ]
  }
}

export default Person;
