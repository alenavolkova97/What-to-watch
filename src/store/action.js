export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  LOAD_MOVIES: `LOAD_MOVIES`,
  LOAD_FAVORITE_MOVIES: `LOAD_FAVORITE_MOVIES`,
  LOAD_PROMO_MOVIE: `LODA_PROMO_MOVIE`,
  CHANGE_AUTHORIZATION_STATUS: `CHANGE_AUTHORIZATION_STATUS`
};

export const changeGenre = (genre) => {
  return {
    type: ActionType.CHANGE_GENRE,
    payload: genre
  };
};

export const loadMovies = (movies) => {
  return {
    type: ActionType.LOAD_MOVIES,
    payload: movies
  };
};

export const loadFavoriteMovies = (favoriteMovies) => {
  return {
    type: ActionType.LOAD_FAVORITE_MOVIES,
    payload: favoriteMovies
  };
};

export const loadPromoMovie = (promoMovie) => {
  return {
    type: ActionType.LOAD_PROMO_MOVIE,
    payload: promoMovie
  };
};

export const changeAuthorizationStatus = (status) => {
  return {
    type: ActionType.CHANGE_AUTHORIZATION_STATUS,
    payload: status
  };
};

