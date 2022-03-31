import { SagaActionTypes } from "../SagaActionTypes";
import { MovieType } from "../../../entities/MovieType";

export const authApp = () => {
    return { type: SagaActionTypes.AUTH_APP };
};

export const searchMovie = (payload: {movieName: string}) => {
    return { type: SagaActionTypes.SEARCH_MOVIE, payload };
};

export const addToFavorites = (payload: {item: MovieType}) => {
    return { type: SagaActionTypes.ADD_TO_FAVORITES, payload };
};
