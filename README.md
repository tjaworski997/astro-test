# Astro Country Lookup

Prosty projekt Astro, w ktorym backend strony odpytuje zewnetrzne API CountriesNow i wyswietla miasta dla podanego kraju.

## Uruchomienie

1. Zainstaluj zaleznosci.
2. Uruchom `npm run dev`.
3. Otworz `/` i wpisz kraj, np. `Poland`.

Lokalny development nadal dziala zwyklym `astro dev`, mimo ze projekt jest przygotowany pod deploy na Cloudflare.

## API

Strona korzysta z endpointu:

- `POST https://countriesnow.space/api/v0.1/countries/population/cities/filter`

Payload:

- `country`
- `limit`
- `order`
- `orderBy`

## Cloudflare

Projekt jest skonfigurowany pod adapter `@astrojs/cloudflare` i zawiera [wrangler.jsonc](/Users/tomek/Projects/xview/js/astro-test/wrangler.jsonc) dla SSR.

Podstawowy workflow:

1. Lokalnie rozwijasz przez `npm run dev`.
2. Build sprawdzasz przez `npm run build`.
3. W Cloudflare importujesz repozytorium i deployujesz aplikacje.

Po buildzie skrypt dopisuje `dist/.assetsignore`, zeby Cloudflare nie wystawial katalogu `_worker.js` jako publicznych assetow.
