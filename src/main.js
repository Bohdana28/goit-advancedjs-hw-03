import "./css/styles.css"
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


import { getImagesByQuery } from "./js/pixabay-api.js";
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from "./js/render-functions.js";

const formEl = document.querySelector(".form");
formEl.addEventListener("submit", onSearch);

const galleryList = document.querySelector('.js-gallery');
const loader = document.querySelector('.js-loader');

function onSearch(event) {
  event.preventDefault();

  const query = event.currentTarget.elements["search-text"].value.trim();

  if (query === "") {
    iziToast.warning({
      massage: "Please enter a search query.",
      position: "topRight",
    });
    return;
  }

  clearGallery(galleryList);
  showLoader(loader);

  getImagesByQuery(query)
    .then((data) => {
      const images = data.hits;

      if (!images || images.length === 0) {
        iziToast.error({
          massage: "Sorry, there are no images matching your search query. Please try again!",
          position: "topRight",
        });
        return;
      }

      createGallery(images);
    })
    .catch(() => {
      iziToast.error({
        massage: "Oops! Something went wrong. Please try again later.",
        position: "topRight",
      });
    })
    .finally(() => {
      hideLoader(loader);
      formEl.reset();
    });
}