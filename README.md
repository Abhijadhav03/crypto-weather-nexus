This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

```
crypto-weather-nexus
├─ app
│  ├─ dashboard
│  │  ├─ layout.tsx
│  │  ├─ page.tsx
│  │  └─ weather
│  │     └─ weather.tsx
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.tsx
│  ├─ page.tsx
│  └─ ui
│     └─ dashboard
│        ├─ navbar
│        │  └─ navbar.jsx
│        └─ sidebar
│           └─ sidebar.jsx
├─ components
│  ├─ mode-toggle.tsx
│  └─ ui
│     ├─ alert.tsx
│     ├─ button.tsx
│     ├─ card.tsx
│     ├─ command.tsx
│     ├─ dialog.tsx
│     ├─ dropdown-menu.tsx
│     ├─ scroll-area.tsx
│     ├─ skeleton.tsx
│     ├─ sonner.tsx
│     └─ tooltip.tsx
├─ components.json
├─ context
│  └─ theme-provider.tsx
├─ eslint.config.mjs
├─ hooks
├─ lib
│  └─ utils.ts
├─ next.config.ts
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ file.svg
│  ├─ globe.svg
│  ├─ next.svg
│  ├─ vercel.svg
│  └─ window.svg
├─ README.md
└─ tsconfig.json

```

```
crypto-weather-nexus
├─ api
│  ├─ config.ts
│  ├─ types.ts
│  └─ weather.ts
├─ app
│  ├─ dashboard
│  │  ├─ cryptonews
│  │  │  └─ page.tsx
│  │  ├─ cryptoprices
│  │  │  └─ page.tsx
│  │  ├─ layout.tsx
│  │  ├─ page.tsx
│  │  └─ weather
│  │     ├─ city
│  │     │  └─ [name]
│  │     │     └─ page.tsx
│  │     └─ page.tsx
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.tsx
│  ├─ page.tsx
│  ├─ providers.tsx
│  └─ ui
│     ├─ current-weather.tsx
│     ├─ dashboard
│     │  ├─ navbar
│     │  │  └─ navbar.jsx
│     │  ├─ sidebar
│     │  │  └─ sidebar.jsx
│     │  └─ weather-dashboard.jsx
│     └─ loading-skeleton.tsx
├─ components
│  ├─ CitySearch.tsx
│  ├─ CurrentWeather.tsx
│  ├─ FavoriteCities.tsx
│  ├─ Header.tsx
│  ├─ HourlyTemperature.tsx
│  ├─ layout.tsx
│  ├─ loading-skeleton.tsx
│  ├─ mode-toggle.tsx
│  ├─ ui
│  │  ├─ alert.tsx
│  │  ├─ button.tsx
│  │  ├─ card.tsx
│  │  ├─ command.tsx
│  │  ├─ dialog.tsx
│  │  ├─ dropdown-menu.tsx
│  │  ├─ input.tsx
│  │  ├─ scroll-area.tsx
│  │  ├─ skeleton.tsx
│  │  ├─ sonner.tsx
│  │  └─ tooltip.tsx
│  ├─ WeatherDetails.tsx
│  └─ WeatherForecast.tsx
├─ components.json
├─ context
│  ├─ react-query-provider.tsx
│  └─ theme-provider.tsx
├─ eslint.config.mjs
├─ hooks
│  ├─ use-favorite.ts
│  ├─ use-geolocation.ts
│  ├─ use-local-storage.ts
│  ├─ use-search-history.ts
│  └─ use-weather.ts
├─ lib
│  └─ utils.ts
├─ next.config.ts
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ file.svg
│  ├─ globe.svg
│  ├─ next.svg
│  ├─ vercel.svg
│  └─ window.svg
├─ README.md
├─ styles
│  └─ globals.css
└─ tsconfig.json

```