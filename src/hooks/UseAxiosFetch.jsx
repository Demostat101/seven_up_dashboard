import { useState, useEffect } from "react";
import axios from "axios";

export const useAxiosFetch = (dataUrl) => {
  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const source = axios.CancelToken.source();

    const fetchData = async (url) => {
      setIsLoading(true);
      try {
        const response = await axios.get(url, {
          cancelToken: source.token,
        });

        isMounted ? setData(response.data) : setFetchError(null);
      } catch (error) {
        isMounted ? setFetchError(error.message) : setData([]);
      } finally {
        isMounted && setIsLoading(false);
      }
    };

    fetchData(dataUrl);

    const cleanUp = () => {
      isMounted = false;
      source.cancel();
    };

    return cleanUp;
  }, [dataUrl]);
  return { data, fetchError, isLoading, setData };
};

export const apiRequest = async (url = [], optionObj = {}, errMsg = null) => {
  try {
    const data = await fetch(url, optionObj);
    if (!data.ok) {
      throw Error("please reload the app");
    }
  } catch (error) {
    errMsg = error.message;
  } finally {
    return errMsg;
  }
};
