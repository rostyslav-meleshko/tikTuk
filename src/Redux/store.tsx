import { createStore, AnyAction, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { AuthorMeta } from '../typesDef';


type RootState = {
  authorMeta: AuthorMeta | null;
}

const SET_AUTHOR_META = 'SET_AUTHOR_META';

export const setAuthorMeta = (authorMeta: AuthorMeta) => ({
  type: SET_AUTHOR_META, authorMeta,
});

export const stateAuthorMeta = (state: RootState) => state.authorMeta;

const initialState: RootState = {
  authorMeta: null,
};

const rootReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_AUTHOR_META:
      return {
        ...state,
        authorMeta: { ...action.authorMeta },
      };

    default:
      return state;
  }
};

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)), // allows you to use http://extension.remotedev.io/
);

export default store;
