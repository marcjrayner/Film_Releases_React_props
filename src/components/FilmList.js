import React, {Component} from 'react';
import Film from './Film'

class FilmList extends Component {
  render() {
  
    const filmNodes = this.props.data.map(film => {
      return (
        <Film key={film.id} name={film.name} url={film.url}></Film>
      )
    })

    return(
      
      <div>
        <h4>Films list</h4>
        <ul>
          {filmNodes}
        </ul>
        <hr/>
        <a href="https://www.imdb.com/calendar/?region=gb">View more upcoming releases >></a>
      </div>
    )
  }
}

export default FilmList;