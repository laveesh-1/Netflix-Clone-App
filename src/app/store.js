import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import tvReducer from '../features/tv/tvSlice';
//although we didnt export tvreducer but we are still importing it because we can give whatever name to default import
import commonReducer from '../features/common/commonSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    tv: tvReducer,
    common: commonReducer
  },
});
