import React, { Component, Suspense, lazy } from "react";
import { Link, Route, Switch } from "react-router-dom";

import Loader from "../../Loader/Loader";
import movieByIdAPI from "../../utils/movieByIdAPI";
import routes from "../../utils/routes";
import imageUrl from "../../utils/imageUrl";
import "./MovieDetailsPage.scss";

const Cast = lazy(() => import("../../components/Cast/Cast"));
const Reviews = lazy(() => import("../../components/Reviews/Reviews"));

class MovieDetailsPage extends Component {
  state = {
    movie: null,
    query: "",
  };

  componentDidMount() {
    movieByIdAPI
      .getMovieById(this.props.match.params.movieId)
      .then((movie) => this.setState({ movie }));
  }

  handleGoBack = () => {
    const { state } = this.props.location;

    if (state && state.from) {
      this.props.history.push(state.from);
    }
  };

  render() {
    const { movie } = this.state;
    const { match } = this.props;

    return (
      <>
        {movie && (
          <div className="movie-details">
            <div className="info">
              <button className="info__button" onClick={this.handleGoBack}>
                &larr; Go back
              </button>
              <div className="info__wrapper">
                <img
                  className="info__img"
                  src={`${imageUrl.baseUrl}/${movie.poster_path}`}
                  alt=""
                />
                <div className="info__detales">
                  <h2>{movie.title}</h2>
                  <p>
                    User score: <span>{movie.vote_average}</span>
                  </p>
                  <h3>Overview</h3>
                  <p>{movie.overview}</p>
                  <h4>Genres</h4>
                  <ul className="info__detales-list">
                    {movie.genres.map((genre) => (
                      <li key={genre.id}>{genre.name}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <hr />
            <div className="more">
              <h4>Additional information</h4>
              <ul>
                <li>
                  <Link
                    to={{
                      pathname: `${routes.movies}/${match.params.movieId}/cast`,
                      state: {
                        from: this.props.location.state.from,
                      },
                    }}
                  >
                    Cast
                  </Link>
                </li>
                <li>
                  <Link
                    to={{
                      pathname: `${routes.movies}/${match.params.movieId}/reviews`,
                      state: {
                        from: this.props.location.state.from,
                      },
                    }}
                  >
                    Reviews
                  </Link>
                </li>
              </ul>
              <div className="detales">
                <Switch>
                  <Suspense fallback={<Loader />}>
                    <Route path={`/movies/:movieId/cast`} component={Cast} />
                    <Route
                      path={`/movies/:movieId/reviews`}
                      component={Reviews}
                    />
                  </Suspense>
                </Switch>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}
export default MovieDetailsPage;
