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
import {
  combineReducers,
  configureStore,
  createSelector,
} from '@reduxjs/toolkit';

import { authReducer, selectUserBalance } from './auth/authSlice';
import {
  selectUserBalanceAfter,
  transactionsReducer,
} from './transactions/transactionsSlice';
import { globalReducer } from './global/globalSlice';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const rootReducer = combineReducers({
  auth: persistReducer(persistConfig, authReducer),
  transactions: transactionsReducer,
  global: globalReducer,
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

export const selectBalance = createSelector(
  [selectUserBalance, selectUserBalanceAfter],
  (balance, balanceAfter) => {
    return balanceAfter || balance;
  }
);
