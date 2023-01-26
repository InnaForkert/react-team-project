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
import { combineReducers, configureStore, createSlice } from '@reduxjs/toolkit';

// const persistConfig = {
//   key: 'user',
//   storage,
//   whitelist: ['token'],
// };

const placeholderSlice = createSlice({
  name: 'placeholder',
  initialState: {},
  reducers: {},
});

const rootReducer = combineReducers({
  placeholder: placeholderSlice.reducer,
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
