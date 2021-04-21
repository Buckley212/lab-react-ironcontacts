import { useState } from 'react';
import Contacts from '../contacts.json';

const Table = () => {

    let [contacts, setContact] = useState(Contacts.slice(0, 5))

    let addContact = () => {
        const newRandomContact = Contacts[Math.floor(Math.random() * (Contacts.length - 1) + 5)]
        setContact([...contacts,newRandomContact])
    };
  
    const sortByName = () => {
      const sortContacs = contacts.sort((a, b) => {
          return a.name.localeCompare(b.name)
        }
      )

      setContact([...sortContacs])

    };
  
    const sortByPopularity = () => {
      const sortContacts = contacts.sort((a, b) => {
          return b.popularity - a.popularity
        }
      )
  
      setContact([...sortContacts])

    };
  
    const remove = (id) => {
      const removeContact = contacts.filter((e) => {
        return e.id !== id
        }
      )
        
      setContact(removeContact)
    };
  
    return (
      <div className="tableDiv">
        <h1 className="title"> IronContacts</h1>
        <div className="buttons">
            <button onClick={() => addContact()}> Add Random Contact</button>
            <button onClick={() => sortByName()}> Sort by Name</button>
            <button onClick={() => sortByPopularity()}> Sort by Popularity</button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((e, id) => {
              return (
                <tr key={id}>
                  <td><img width="95px" src={e.pictureUrl} /></td>
                  <td>{e.name}</td>
                  <td>{(e.popularity).toFixed(2)}</td>
                  <button onClick={() => remove(e.id) }>Delete</button>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
}

export default Table;