import {
  persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { authReducer } from './auth/authSlice';
import { transactionsCategoriesReducer } from './transactionsCategories/transactionsCategoriesSlice';

// const persistConfig = {
//   key: 'user',
//   storage,
//   whitelist: ['token'],
// };

const rootReducer = combineReducers({
  auth: authReducer,
  transactionsCategories: transactionsCategoriesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
