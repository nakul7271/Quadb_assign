import Movie from "./Movie";
import classes from './MoviesList.module.css'

const MoviesList = ({movies}) => {
  const moviesList = movies.map((movie) => {
    return (
      <Movie
        key={movie.show.id}
        id={movie.show.id}
        image={movie.show.image?.medium?? "https://static.tvmaze.com/uploads/images/medium_portrait/33/82953.jpg"}
        name={movie.show.name}
        details={movie.show.summary}
        rating={movie.show.rating.average}
        language={movie.show.language}
      />
    );
  });

 

  return (
      <>
          <div className={classes.div} >
              <h2 className={classes.divh2}>Recommended Movies</h2>
          {moviesList}
          </div>
    </>
  );
};

export default MoviesList;
