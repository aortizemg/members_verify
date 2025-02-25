import userSlice from './userSlice';
import tokenSlice from './tokenSlice';

export const rootReducer = {
  user: userSlice,
  token: tokenSlice,
};
