import axios from "axios";
const API_KEY = "21850278-bca2574dc72e96cdde1e95c4f";
const BASE_URL = "https://pixabay.com/api/";
const PER_PAGE = 12;

const fetchImages = ({ searchQuery, page }) => {
  return axios
    .get(
      `${BASE_URL}?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=${PER_PAGE}&key=${API_KEY}`
    )
    .then((response) => response.data.hits);
};

export default { fetchImages };
