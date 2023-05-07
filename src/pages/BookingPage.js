
import { useParams } from "react-router-dom";

import BookForm from "../components/BookForm";


const BookingPage = () => {
  
    const {movieName} = useParams();


    return <BookForm movieName={movieName} />
}


export default BookingPage;
