import React, {Component} from 'react';
import Serie from './Serie'
import catalog from '../data';
import PropTypes from 'prop-types'


export default class SerieList extends Component {
  render(){
    return(
      <section>
        {catalog.map((serie) => <Serie key={serie.id}  serieInfo={serie} />)}
      </section>
    )
  }
}


SerieList.propTypes = { 
  catalog: PropTypes.arrayOf(PropTypes.shape(
    {
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
    }
  )),
}
