import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './Contacts/contacts-reducer';
import userReducer from './User/user-reducer.js';
import { filter } from './Contacts/contacts-reducer';
const userPersistConfig = {
  key: 'user',
  storage,
  whitelist: ['token'],
};
const appReducer = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
  contacts: contactsReducer,
  filter: filter,
});

const rootReducer = (state, action) => {
  if (action.type === 'user/logout/fulfilled') {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    logger,
  ],
});
export const persistor = persistStore(store);
