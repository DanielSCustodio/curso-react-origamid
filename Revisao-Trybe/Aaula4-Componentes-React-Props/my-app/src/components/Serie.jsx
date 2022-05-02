import React, {Component} from 'react';
import '../App.css';
import PropTypes from 'prop-types'

export default class Serie extends Component {
  render(){
    const { serieInfo: {name, image, genre} } = this.props;
    return(
      <section>
        <h2> {name} </h2>
        <img src={image} alt= {name} />
        <p> {genre} </p>
      </section>
    )
  }
}

Serie.propTypes = { 
  serieInfo: PropTypes.shape(
    {
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
    }
  ).isRequired
};

Serie.propTypes = {
  serieInfo: [
    {
      id:0,
      name:'Um filme qualquer',
      image:'Uma imagem qualquer',
      genre:'Um'
    }
  ]
}