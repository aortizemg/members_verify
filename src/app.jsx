/* eslint-disable perfectionist/sort-imports */

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'src/global.css';

import { useScrollToTop } from 'src/hooks/use-scroll-to-top';

import Router from 'src/routes/sections';
import ThemeProvider from 'src/theme';
import { fetchAccessToken } from './redux/slice/tokenSlice';

// ----------------------------------------------------------------------

export default function App() {
  useScrollToTop();
  const dispatch = useDispatch();
  const { accessToken, expiresIn } = useSelector((state) => state.auth);

  useEffect(() => {
    // Fetch the token on mount
    dispatch(fetchAccessToken());

    // Refresh token before it expires
    let refreshInterval;
    if (expiresIn) {
      refreshInterval = setInterval(
        () => {
          dispatch(fetchAccessToken());
        },
        (expiresIn - 10) * 1000
      ); // Refresh 10 seconds before expiration
    }

    return () => clearInterval(refreshInterval);
  }, [dispatch, expiresIn]);
  console.log('accessToken', accessToken);

  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}
