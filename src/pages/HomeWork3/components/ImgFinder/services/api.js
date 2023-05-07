import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api/";
const keyPixabay = "30807685-8e6cd00353cc1057d11bd8bf4";
const itemsPerPage = 12;

export const getImages = async (query, page) => {
  const response = await axios.get(
    `?q=${query}&page=${page}&key=${keyPixabay}&image_type=photo&orientation=horizontal&per_page=${itemsPerPage}`
  );
  return response;
};
