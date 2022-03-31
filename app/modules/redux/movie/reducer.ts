import { ReduxActionTypes } from "../ReduxActionTypes";
import { MovieType } from "../../../entities/MovieType";

export type MovieUpdateType = {
    movie: Array<MovieType>;
    favoriteMovies: Array<MovieType>;
    isActivityIndicatorActive: boolean;
};

const initState: MovieUpdateType = {
    movie: [],
    favoriteMovies: [],
    isActivityIndicatorActive: true,
};

export const MovieUpdate = (state: MovieUpdateType = initState, action: { type: string, payload: any }): MovieUpdateType => {
    const { type, payload } = action;
    switch (type) {
        case ReduxActionTypes.SET_MOVIE:
            return { ...state, movie: payload }
        case ReduxActionTypes.SET_FAVORITE_MOVIE:
            return {...state, favoriteMovies: payload}
        case ReduxActionTypes.SET_ACTIVITY_INDICATOR:
            return { ...state, isActivityIndicatorActive: payload }
        default:
            return state;
    };
};
