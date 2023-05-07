
import { Link } from 'react-router-dom';
import classes from './Movie.module.css'

const Movie = (props) => {

    const rating = props.rating ? props.rating : '6.1';

    return <>
        <Link to={`/summary/${props.id}`} className={classes.noUnderline}>
        <div className={classes.div1}>
            <div>
                <img src={props.image}  alt={props.name} />
            </div>
            <div className={`${classes.div2} ${classes.container}`}>
                <h2>{props.name}</h2>
                <div>
                    <p>Rating: {rating}</p>
                    {/* <p>Language: {props.language}</p> */}
                    {/* <p>description: {props.details}</p> */}
                </div>
            </div>
        </div>
        </Link>
        
    </>
}


export default Movie;

