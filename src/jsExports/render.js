export function renderCountries(countries) {
  return countries
    .map(({ name, flags }) => {
      return `<li>
      <img class="country-flag" src="${flags.svg}" alt="country" width=100 height=auto>
        <h2 class="country-name">${name.official}</h2>
      </li>`;
    })
    .join('');
}

export function renderInfo(country) {
  return country
    .map(({ capital, population, languages }) => {
      return `
        <p class="country-info"><span class="country-info-span">Capital:</span> ${capital}</p>
        <p class="country-info"><span class="country-info-span">Population:</span> ${population}</p>
        <p class="country-info"><span class="country-info-span">Languages:</span> ${Object.values(
          languages
        ).join(', ')}</p>
        `;
    })
    .join();
}
