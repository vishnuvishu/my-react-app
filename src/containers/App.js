import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends PureComponent {

  constructor(props){
    super(props);
    console.log('[App.js] Inside constructor', props);
    this.state = {
      persons: [
      {id: 'person1', name: 'vishnu', age: '26'},
      {id: 'person2', name: 'snehul', age: '23'},
      {id: 'person3', name: 'neju', age: '24'}
    ],
    otherState: 'some other state',
    showPersons: false
    }
  }

  componentWillMount(){
    console.log('[App.js] componentWillMount()');
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount()');
  }

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('[Update App.js] Inside shouldComponentUpdate', nextProps, nextState);
  //   // return true ;
  //   return nextState.persons !== this.state.persons ||
  //   nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps, nextState){
    console.log('[Update App.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate(){
    console.log('[Update App.js] Inside componentDidUpdate');
  }

  // state = {
  //   persons: [
  //   {id: 'person1', name: 'vishnu', age: '26'},
  //   {id: 'person2', name: 'snehul', age: '23'},
  //   {id: 'person3', name: 'neju', age: '24'}
  // ],
  // otherState: 'some other state',
  // showPersons: false
  // }

deletePersonHandler = (personIndex) => {
  const persons =[...this.state.persons];
  persons.splice(personIndex, 1);
  this.setState({persons: persons});
}

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {

    console.log('[App.js] inside render()');

    let persons = null;

    if(this.state.showPersons){
      persons = <Persons
          persons = {this.state.persons}
          clicked = {this.deletePersonHandler}
          changed = {this.nameChangedHandler} />;
    }

    return (
      <div className={classes.App}>
        <button onClick={()=>{this.setState({showPersons: true})}}>Show Persons</button>
        <Cockpit
          appTitle = {this.props.title}
          showPersons = {this.state.showPersons}
          persons = {this.state.persons}
          clicked = {this.togglePersonHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
