import { call, put, select } from 'redux-saga/effects';
import { restroomService } from '../../services/RestroomService';
import { userSelector } from '../selectors/UserSelector';
import {
  setAddingRestroom,
  setFinishedAddingRestroom,
  setRestrooms
} from '../actions/RestroomActions';
import NavigationService from '../../services/NavigationService';

export function* fetchRestrooms() {
  const user = yield select(userSelector);

  try {
    const restrooms = yield call(restroomService.fetchAll, user);
    yield put(setRestrooms(restrooms.data));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
}

export function* addRestroom({ payload }) {
  yield put(setAddingRestroom());
  try {
    const user = yield select(userSelector);
    yield call(restroomService.create, {
      user,
      restroom: payload
    });
    yield call(fetchRestrooms);
    NavigationService.navigate('Home');
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  } finally {
    yield put(setFinishedAddingRestroom());
  }
}

export function* addRestroomComment({ payload }) {
  const user = yield select(userSelector);

  try {
    yield call(restroomService.addComment, {
      user,
      restroom: payload.restroom,
      content: payload.content
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
}
