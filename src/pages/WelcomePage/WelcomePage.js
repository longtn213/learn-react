import React from 'react';
import Welcome from './Welcome/Welcome';

const people = [
  {
    id: 1,
    name: "Hoangdd",
    age: 34,
    color: "red",
    married: true
  },
  {
    id: 2,
    name: "Nguyen Cong Phuong",
    age: 28,
    color: "green",
    married: true
  },
  {
    id: 3,
    name: "Maria",
    age: 34,
    color: "yellow",
    married: true
  },
  {
    id: 4,
    name: "Ngoc Trinh",
    age: 30,
    color: "red",
    married: true
  }
]
const WelcomePage = () => {
  return (
    <div className="welcome-page">
      { people.map(({ id, name, age, color, married  }) => (
        <Welcome
          key={ id }
          name={ name }
          age={ age }
          color={ color }
          married={ married }
        />
      )) }
    </div>
  );
};

export default WelcomePage;
