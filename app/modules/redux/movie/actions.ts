import { ReduxActionTypes } from "../ReduxActionTypes";

export const setMovie = (payload: any) => {
    return { type: ReduxActionTypes.SET_MOVIE, payload };
};

export const setFavoriteMovie = (payload: any) => {
    return { type: ReduxActionTypes.SET_FAVORITE_MOVIE, payload };
};

export const setActivityIndicator = (payload: boolean) => {
    return { type: ReduxActionTypes.SET_ACTIVITY_INDICATOR, payload };
}
