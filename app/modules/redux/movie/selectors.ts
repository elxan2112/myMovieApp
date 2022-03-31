import { IRootState } from "../../../entities/IRootState";

export const selectMovieList = (state: IRootState) => {
    return state.MovieUpdate.movie;
};

export const getFavoritesList = (state: IRootState) => {
    return state.MovieUpdate.favoriteMovies;
}

export const selectIsActivityIndicatorActive = (state: IRootState) => {
    return state.MovieUpdate.isActivityIndicatorActive;
};