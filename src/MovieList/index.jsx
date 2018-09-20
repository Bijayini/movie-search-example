import React from 'react';

import MovieCard from '../MovieCard';

const movies = [
  {
    id: 78,
    title: 'Delhi Belly',
    year: '2011'
  },
  {
    id: 8,
    title: 'Vodka Diaries',
    year: '1998'
  },
  {
    id: 4,
    title: 'XXX',
    year: '2016'
  },
  {
    id: 84,
    title: 'sanju',
    year: "2018"
  },
  {
    id: 34,
    title: 'Baazigar',
    year: '1993'
  },
  {
    id: 12,
    title: 'Kaalakaandi',
    year: '2007'
  },
  {
    id: 23,
    title: 'Padmaavat',
    year: '2017'
  },
  {
    id: 35,
    title: 'Ghilli',
    year: '2004'
  },
  {
    id:79,
    title: 'Socha Na Tha',
    year: '2005'
  },
  {
    id: 20,
    title: 'Aankhen',
    year: '2003'
  },
  {
    id: 56,
    title: 'Piku',
    year: '2015'
  }
];

export default class MovieList extends React.Component{
constructor(props){
  super(props);
}
  componentDidMount(){
      console.log('Hi I have mounted the component');
  };


  getMovieListSortedByParam = () => {
    const {sortingParam} = this.props;

    return( movies.sort((movie1, movie2) => {
      const firstMovie = movie1[sortingParam].toLowerCase();
      const secondMovie = movie2[sortingParam].toLowerCase();
      return (firstMovie > secondMovie) ? 1 : ((secondMovie > firstMovie) ? -1 : 0);
    }));
 };

   getSortedMovieList = () => {
     const { sortingParam } = this.props;

     return sortingParam !== '' ? this.getMovieListSortedByParam(): movies;
  };


  render(){
    console.log('Yeah!!! I am inside render');
    return(
        <ul>
          {this.getSortedMovieList().map( movie => <MovieCard movie={movie} key={movie.id} /> )}
        </ul>
    );
  }
};
