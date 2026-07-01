# Astro Country Lookup

Prosty projekt Astro, w ktorym backend strony odpytuje zewnetrzne API CountriesNow i wyswietla miasta dla podanego kraju.

## Uruchomienie

1. Zainstaluj zaleznosci.
2. Uruchom `npm run dev`.
3. Otworz `/` i wpisz kraj, np. `Poland`.

## API

Strona korzysta z endpointu:

- `POST https://countriesnow.space/api/v0.1/countries/population/cities/filter`

Payload:

- `country`
- `limit`
- `order`
- `orderBy`
