import React, {Component} from 'react';
import FilmList from '../components/FilmList.js'

class FilmTitles extends Component {
  render() {
    return(
      <div>
        <h2>Upcoming films in the UK</h2>
        <FilmList/>
      </div>
    )
  }
}



export default FilmTitles;