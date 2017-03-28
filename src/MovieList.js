import React, { Component } from 'react';
import MovieItem from './MovieItem';
import { Item, Container } from 'semantic-ui-react';

class MovieList extends Component {
  renderMovies (movie) {
    return (
      <MovieItem key={movie.id} movie={movie} />
    );
  }

  render () {
    const movies = [{id: 1}, {id: 2}, {id: 3}].map(this.renderMovies);

    return (
      <Container>
        <Item.Group divided>
          {movies}
        </Item.Group>
      </Container>
    );
  }
}

export default MovieList;