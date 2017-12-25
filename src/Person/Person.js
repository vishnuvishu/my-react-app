import React from 'react'
import classes from './Person.css'

const person = (props) => {

  // const rand = Math.random();
  //
  // if(rand > 0.7){
  //   throw new Error('something went error');
  // }

  return (
    <div className={classes.Person}>
      <p className={classes.para} onClick={props.click}>I am {props.name}. I am {props.age} years old</p>
      <p>{props.children}</p>
      <input onChange={props.changed} type="text" value={props.name}/>
    </div>

  )
};

export default person;
