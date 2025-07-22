// 1_7_1 Splitting a list in two 
/*
  В этом примере показан список всех людей.

  Измените его, чтобы последовательно вывести два отдельных списка: Химики и Все остальные. Как и ранее, вы можете определить, является ли человек химиком, проверив, что person.profession === 'chemist'.
*/

import { people } from './data.js';
import { getImageUrl } from './utils.js';

export type Person = {
  id: number;
  name: string;
  profession: string;
  accomplishment: string;
  imageId: string;
}

export default function List() {
    const astrophysicist = people.filter(person => person.profession === 'astrophysicist');
    const astrophysicistItems = astrophysicist.map((person) => (
        <li key={person.id}>
            <img
                src={getImageUrl(person)}
                alt={person.name}
            />
            <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
            </p>
        </li>
    ));
    const physicist = people.filter(person => person.profession === 'physicist');
    const physicistItems = physicist.map((person) => (
        <li key={person.id}>
            <img
                src={getImageUrl(person)}
                alt={person.name}
            />
            <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
            </p>
        </li>
    ));
    const chemists = people.filter(person => person.profession === 'chemist');
    const chemistItems = chemists.map((person) => (
        <li key={person.id}>
            <img
                src={getImageUrl(person)}
                alt={person.name}
            />
            <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
            </p>
        </li>
    ));
    return (
        <article>
            <body>
            <h1 className="scientists">Scientists</h1>
            <div className = "chemists">
            <h2>Chemist:</h2>
            <ul>{chemistItems}</ul>
            </div>
            <div className = "physicists">
            <h2>physicist:</h2>
            <ul>{physicistItems}</ul>
            </div>
            <div className= "astrophysicists">
            <h2>Astrophysicist:</h2>
            <ul>{astrophysicistItems}</ul>
            </div>
            </body>
        </article>
    );
}
