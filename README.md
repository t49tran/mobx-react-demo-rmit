# Mobx React Demo

Introduction to Mobx - React for RMIT students

## Run locally

```
npm start
```

You also need to create an `env.local` file which the following content:

```
REACT_APP_BASE_API_URL=http://localhost:3006
```

### Backend

There is a backend repo that provides data for this applications. You should fetch it and run it locally as well

## Code structure

### Services

External data services, those services are solely responsible in communicating with external data sources.

```
src
-- services
```

### Stores

Mobx stores, local in-memory data storage that manage the data for the application.

In this application, the data is provided to the application using a Provider - Consumer pattern.

```
src
-- stores
```

### React components

There are mainly two types of React components:

- Container: React components that are hooked to the stores.
- Visual components: React components that are purely presentational

```
src
-- components
```
