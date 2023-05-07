
import { useLoaderData, json, defer, Await } from "react-router-dom";
import { Suspense } from "react";

import MoviesList from "../components/MoviesList";


const HomePage = () => {

    const {events} = useLoaderData();

    return <>
    <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedMovies) => {
          return <MoviesList movies={loadedMovies} />;
        }}
      </Await>
    </Suspense>
    </>
    
}

export default HomePage;

const loadMovies = async () => {
    const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
  
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
  
  export const loader = async () => {
    return defer({
      events: loadMovies()
    });
  };

