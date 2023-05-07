import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./pages/Root";
import HomePage, { loader as MoviesLoader } from "./pages/HomePage";
import MovieDetailPage, {
  loader as movieLoader,
} from "./pages/MovieDetailPage";
import BookingPage from "./pages/BookingPage";
import { action as bookFormAction } from "./components/BookForm";
import AuthPage, {action as authAction} from "./pages/AuthPage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage />, loader: MoviesLoader },
      { path: "auth", element: <AuthPage />, action: authAction },
      {
        path: "summary/:movieId",
        element: <MovieDetailPage />,
        loader: movieLoader,
      },
      {
        path: "booking/:movieName",
        element: <BookingPage />,
        action: bookFormAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
