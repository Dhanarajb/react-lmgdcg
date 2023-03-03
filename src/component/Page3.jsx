import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  FetchApiData,
  selectData,
  selectError,
  selectIsLoading,
} from './ApiSlice';

const Page3 = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectData);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(FetchApiData());
  }, [dispatch]);
  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {data && <div>{data}</div>}
    </div>
  );
};
export default Page3;
