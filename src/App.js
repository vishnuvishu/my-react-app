import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
    {id: 'person1', name: 'vishnu', age: '26'},
    {id: 'person2', name: 'snehul', age: '23'},
    {id: 'person3', name: 'neju', age: '24'}
  ],
  otherState: 'some other state',
  showPersons: false
  }

  // switchNameHandler = (newName) => {
  //   // console.log("clicked");
  //   this.setState({
  //       persons: [
  //       {name: newName, age: '26'},
  //       {name: 'snehul', age: '23'},
  //       {name: 'neju', age: '24.5'}
  //     ]
  //     }
  //   )
  // }
  //

deletePersonHandler = (personIndex) => {
  // const persons = this.state.persons.slice();
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

    //const person = Object.assign({}, this.state.persons[findIndex]);  alternative for ABOVE line
    //
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

    let persons = null;
    let btnClass = '';

    if(this.state.showPersons){
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
              key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)}/>
            })
          }

          {/* <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}/>
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'vishnu vichu')}
            changed={this.nameChangedHandler}>
            I am a graphic designer</Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}/> */}
        </div>
      );
      btnClass = classes.Red;
    }

    const assignedClasses = [];

    if(this.state.persons.length <= 2){
      assignedClasses.push(classes.red);
    }
    if(this.state.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h3>Hi i am a React App</h3>
        <p className={assignedClasses.join(' ')}> Its really working !!!</p>
        <button className={btnClass}
          // onClick={() => this.switchNameHandler('vishnu vinayanz')}>Switch name</button>
           onClick={this.togglePersonHandler}>Toggle name</button>
        {persons}
      </div>
      // React.createElement('div',{className: ' App'}, React.createElement('h1', null,'hi i am vishnu'))
    );
  }
}

export default App;
