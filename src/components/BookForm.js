import {
  useNavigate,
  Form,
  useNavigation,
  redirect,
} from "react-router-dom";

import classes from "./BookForm.module.css";

function BookForm({ movieName }) {
  const navigate = useNavigate();

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  function cancelHandler() {
    navigate("/");
  }

  return (
    <Form method="POST" className={classes.form}>
      <p>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          required
          defaultValue={movieName}
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          required
          defaultValue={new Date()}
        />
      </p>
      <p>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" required defaultValue="" />
      </p>
      <p>
        <label for="phone">Mobile Number</label>
        <input
          type="tel"
          name="telphone"
          placeholder="888 888 8888"
          pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
          maxlength="12"
          title="Ten digits code"
          required
        />
      </p>
      <p>
        <label htmlFor="seatNo">Seat Number</label>
        <input
          id="seatNo"
          type="number"
          name="seatNo"
          required
          defaultValue=""
        />
      </p>

      <div className={classes.actions}>
        <button disabled={isSubmitting} type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button disabled={isSubmitting}>
          {isSubmitting ? "Booking..." : "Book"}
        </button>
      </div>
    </Form>
  );
}

export default BookForm;

export const action = async () => {
      
    // send data to the DB
    
    return redirect("/");
  };
