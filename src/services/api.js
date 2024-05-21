import axiosClient from "./axiosClient";

function useFetch() {
  const data = ref(null);
  const error = ref(null);
  const isFetching = ref(false);
  const fullData = ref(null);

  const fetchData = async (url) => {
    try {
      isFetching.value = true;
      const response = await axiosClient.get(url);
      data.value = response.data;
      fullData.value = response;
    } catch (err) {
      error.value = err.message;
    } finally {
      isFetching.value = false;
    }
  };

  return {
    data,
    error,
    fullData,
    isFetching,
    fetchData,
  };
}

export default useFetch;
