import { useLoaderData, json, defer, Await } from "react-router-dom";
import { Suspense } from "react";

import MovieDetail from "../components/MovieDetail";

const MovieDetailPage = () => {
  const { events } = useLoaderData();
  console.log(events);

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={events}>
          {(loadedMovie) => {
            return <MovieDetail movie={loadedMovie} />;
          }}
        </Await>
      </Suspense>
    </>
  );
};

export default MovieDetailPage;

const loadMovie = async (id) => {
  const response = await fetch("https://api.tvmaze.com/shows/" + id);

  if (!response.ok) {
    // throw new Response(JSON.stringify({ message: 'could not fetch events' }), {
    //     status: 500
    // });
    throw json({ message: "could not fetch movies" }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData;
  }
};

export const loader = async ({ request, params }) => {
  const id = params.movieId;
  return defer({
    events: loadMovie(id),
  });
};
