import React from 'react'
import './Search.css'
import axios from 'axios';

function Search({setCharacters}) {

  // show only characters that match user input
  // need state to hold this value
  const [query, setQuery] = React.useState("")

  // when we type in textbox we want to use the onChange event and grab the text: e.target.value and we want to store that value in state. To change that state we need to use SetQuery(e.target.value)
  // in that input with the onchange we have to use an arrow function to capture that e 

  // when we hit enter after the search the event is going to be an onSubmit. the default behavior of a form is to referesh the page

  // https://rickandmortyapi.com/api/character/?name=beth

  const handleSubmit = (e) => {
    //stop the page from refreshing
    e.preventDefault();
    console.log('search for', query)
    // I need to make api call to get matching characters
    axios.get(`https://rickandmortyapi.com/api/character/?name=${query}`)
    .then(res => {
      console.log(res.data.results)
      // what needs to happen to show this data on Homepage
      // its stored in characters on homepage. if search has access to setCharacters it can change whats being displayed
      // change characters to this data
      setCharacters(res.data.results)
    })
    .catch(err => {
      
      // check for not found
      if(err.response.status == 404){
        alert(`No Characters named ${query}`)
      } else{
        console.log(err)
      }
    })

    // clear textbox
    setQuery('')
  }

  return (
   <form className='search-container' onSubmit={handleSubmit}>
      <input onChange={(e) => setQuery(e.target.value)}
      value={query}
      type="text" placeholder='Search all characters' />
  </form>
  )
}

export default Search