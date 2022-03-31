import { setActivityIndicator, setFavoriteMovie } from '../../redux/movie/actions';
import { call, put, select, takeEvery } from 'redux-saga/effects';
import { getFavoritesList } from '../../redux/movie/selectors';
import { AxiosRequester } from '../../../services/requester';
import { addToFavorites, searchMovie } from './actions';
import { MovieType } from '../../../entities/MovieType';
import { SagaActionTypes } from '../SagaActionTypes';
import { setMovie } from '../../redux/movie/actions';
import { LINKS } from '../../../config';

const requester = new AxiosRequester();

export function* workerAuth() {
    try {
        yield put(setActivityIndicator(true));
        const url = LINKS.SEARCH_MOVIE + 'Star+Wars';
        const response = yield call(requester.get, url);
        yield put(setMovie(response.data.results));
    } catch (error) {
        console.error(error);
    } finally {
        yield put(setActivityIndicator(false));
    }
};

export function* workerSearchMovie(action: ReturnType<typeof searchMovie>) {
    try {
        yield put(setActivityIndicator(true));
        const { movieName } = action.payload;
        let name = movieName.trim().replace(/\s+/g, '+');
        const url = LINKS.SEARCH_MOVIE + (movieName ? name : 'Star+Wars');
        const response = yield call(requester.get, url);
        yield put(setMovie(response.data.results));
    } catch (error) {
        console.error(error);
    } finally {
        yield put(setActivityIndicator(false));
    }
};

export function* workerAddToFavorites(action: ReturnType<typeof addToFavorites>): Generator {
    const { id } = action.payload.item;
    const favoriteMovie = (yield select(getFavoritesList)) as Array<MovieType>;
    let newData = [];
    let tempData = favoriteMovie.map((item) => {
        return item.id == id;
    })
    if (tempData.includes(true)) {
        newData = favoriteMovie.filter(item => item.id != id);
    } else {
        favoriteMovie.push(action.payload.item);
        newData = favoriteMovie;
    }
    yield put(setFavoriteMovie(newData));
}

export function* watchUserPost() {
    yield takeEvery(SagaActionTypes.AUTH_APP, workerAuth);
    yield takeEvery(SagaActionTypes.SEARCH_MOVIE, workerSearchMovie);
    yield takeEvery(SagaActionTypes.ADD_TO_FAVORITES, workerAddToFavorites);
};