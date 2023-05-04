import './css/styles.css';
import debounce from 'lodash/debounce';

const DEBOUNCE_DELAY = 300;
const fetchCountriesInput = document.querySelector('#search-box');
const countriesList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

fetchCountriesInput.addEventListener(
  'input',
  debounce(onInput, DEBOUNCE_DELAY)
);

function onInput() {
  fetchCountries(fetchCountriesInput.value)
    .then(countries => renderCountries(countries))
    .catch(error => console.log(error));
}

function fetchCountries(name) {
  const url = `https://restcountries.com/v3.1/name/${name}`;
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function renderCountries(countries) {
  const markup = countries
    .map(({ name }) => {
      return `<li>
        <h2 class="country-name">${name.common.slice(0, 30)}</h2>
      </li>`;
    })
    .join('');
  countriesList.innerHTML = markup;
}
