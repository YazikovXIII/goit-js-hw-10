import './css/styles.css';
import debounce from 'lodash/debounce';
import { Notify } from 'notiflix';
import { fetchCountries } from './jsExports/fetch';
import { renderCountries, renderInfo } from './jsExports/render';

const DEBOUNCE_DELAY = 300;
const fetchCountriesInput = document.querySelector('#search-box');
const countriesList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

fetchCountriesInput.addEventListener(
  'input',
  debounce(onInput, DEBOUNCE_DELAY)
);

function onInput(evt) {
  if (!evt.target.value) {
    countriesList.innerHTML = '';
    countryInfo.innerHTML = '';
    return;
  }
  fetchCountries(fetchCountriesInput.value)
    .then(countries => {
      if (countries.length > 10) {
        Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
        countriesList.innerHTML = '';
        countryInfo.innerHTML = '';
      } else if (countries.length >= 2 && countries.length < 10) {
        countriesList.innerHTML = renderCountries(countries);
        countryInfo.innerHTML = '';
      } else if (countries.length === 1) {
        countriesList.innerHTML = renderCountries(countries);
        countryInfo.innerHTML = renderInfo(countries);
      }
    })
    .catch(error => {
      console.log(error);
      if (error.message === 'Not Found') {
        Notify.failure('Oops, there is no country with that name');
        countriesList.innerHTML = '';
        countryInfo.innerHTML = '';
      }
    });
}
