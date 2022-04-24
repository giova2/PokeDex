## Pokedex clone

This project was developed in a weekend:

### How to run it
I used `yarn create next-app` to create it.
In terms to run it locally, running `yarn && yarn dev` should be enough to give it a try

### Decisions
I decided not to use typescript to speed up the development process taking the risk of having trivial but tricky errors.
I left testing for later for same reason.
Regarding the add pokemon mocked functionality, I just add a form with two inputs for the complexity and the amount of props that a pokemon could have, I hope that not to be very serious issue.
It has a main component with the list of pokemons, a pagination and a button to add a pokemon, 
The add pokemon button routes you to the mocked form to add a pokemon.
Pressing the details button below each pokemon picture brings you to the deatail page.

I'm use to structure the components as a unit with:
A types.ts file: which contain the types used exclusively for that component
An index.tsx file: which has all the major logic of the component as well as some hooks to connect it to some API, or other stuff.
A Presentational.tsx file that is pretended to has just the component itself and receive the props properly sanitized by index.tsx
A constants.ts file which has the parameterizable hardcoded props that may appear around the component logic or rendering.
A [COMPONENT_NAME].test.ts file that has the tests written regarding the functionality of this particular component
A styles.ts/styles.module.scss file which contain the styles customization for the component
Could has a .stories file to bring an isolated environment to have a playground for developing/UserTest the component

