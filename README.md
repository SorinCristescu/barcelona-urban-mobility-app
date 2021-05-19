## TMB Transportation metropolitans de Barcelona

Although people living in Barcelona are really used to get around the city using public transportation, for a newcomer it can be a bit difficult to learn. I'm happy if people will found this project useful.

---

# Next.js Project

This is a React project that uses Next.js framework.

- Authentication via Facebook and Google+
- Uses Next-Auth for authentication and route handling
- Session support with secure HTTP Only cookies and CSRF Tokens
- CSS in JS with styled-components
- Redux for state management
- Apollo client to fetch graphql API and cache the data
- Axios to fetch data from internal API's
- Mapbox-gl and react-map-gl to display data on map.
- Atlas MongoDB and mongoose for database.
- Dark mode implementation.

You can see a live demo at **https://tmb.vercel.app**

## About

TMB is an application that allows users to search and sort informations about metro lines ,bus lines , metro stations and bus stops, see on map, add their favorite metro sattions and bus stops.

Next.js is a framework that makes it easy to create 'universal' React apps - React apps that do both client and server side rendering.
With Next.js, React pages are automatically rendered on both client and server side, without the hassle of setting up dependancies like webpack or babel and with automatic routing and without the constraints of projects like Create React App.

Apollo is a GraphQL client that allows you to easily query the exact data you need from a GraphQL server. In addition to fetching and mutating data, Apollo analyzes your queries and their results to construct a client-side cache of your data, which is kept up to date as further queries and mutations are run.

In this simple project I integrate Apollo seamlessly with Next.js data fetching methods to fetch queries in the server and hydrate them in the browser.

## Running locally in development mode

To get started, just clone the repository and run `npm install && npm run dev`:

    git clone https://github.com/iaincollins/nextjs-starter.git
    npm install
    npm run dev

Note: If you are running on Windows run install --noptional flag (i.e. `npm install --no-optional`) which will skip installing fsevents.

## Building and deploying in production

If you wanted to run this site in production, you should install modules then build the site with `npm run build` and run it with `npm start`:

    npm install
    npm run build
    npm start

You should run `npm run build` again any time you make changes to the site.

## Configuring

If you configure a .env.local file (just copy [.env.local.example] over to '.env.local' just for testing purpose. If you want you can create and fill in the env.local with your credentials.

### Database hosting

If you need an instance of MongoDB in the cloud https://mlab.com/ have free and inexpensive options.

## Getting Started in development

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
# asigurari-de-acasa
