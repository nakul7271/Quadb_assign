import { Link } from "react-router-dom";
import classes from "./MovieDetail.module.css";

const MovieDetail = (props) => {
  console.log(props.movie.status);

  return (
    <>
      <div className={classes.div1}>
        <div className={classes.div2}>
          <img
            src={
              props.movie.image?.original ??
              "https://static.tvmaze.com/uploads/images/original_untouched/33/82953.jpg"
            }
            alt={props.movie.name}
            className={classes.divImg}
          />
        </div>
        <div className={`${classes.div2} ${classes.div3}`}>
          <h1 className={classes.h11}>{props.movie.name}</h1>
          <p>
            Rating:{" "}
            {props.movie.rating.average ? props.movie.rating.average : "6.1"}
          </p>
          <p>Language: {props.movie.language}</p>
          <ul>
            {props.movie.genres.map((item) => {
              return <li key={item}>{item}</li>;
            })}
          </ul>

          <p>Status: {props.movie.status}</p>

          <p>details: {props.movie.summary}</p>
          <div>
            <Link to={`/booking/${props.movie.name}`}>
              <button className={classes.button}>Book tickets</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
