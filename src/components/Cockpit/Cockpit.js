import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

  const assignedClasses = [];
  let btnClass = '';

  if(props.showPersons){
    btnClass = classes.Red;
  }

  if(props.persons.length <= 2){
    assignedClasses.push(classes.red);
  }
  if(props.persons.length <= 1){
    assignedClasses.push(classes.bold);
  }



  return (
    <div className= {classes.Cockpit}>
    <h3>{props.appTitle}</h3>
    <p className={assignedClasses.join(' ')}> Its really working !!!</p>
    <button className={btnClass}
       onClick={props.clicked}>Toggle name</button>
    </div>
  )
};

export default cockpit;
