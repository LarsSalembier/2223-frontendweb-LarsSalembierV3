# Examenopdracht Front-end Web Development

- Student: Lars Salembier
- Studentennummer: 202293794
- E-mailadres: lars.salembier@student.hogent.be

## Vereisten

Ik verwacht dat volgende software reeds geïnstalleerd is:

- [NodeJS](https://nodejs.org)
- [Yarn](https://yarnpkg.com)

## Opstarten

Maak volgend `.env`-bestand aan:

```
VITE_REACT_APP_AUTH0_DOMAIN='voorbeeld.eu.auth0.com'
VITE_REACT_APP_AUTH0_CLIENT_ID='WWDDAWAWADWADWDDWWDDWAADSASDSADADS'
VITE_REACT_APP_AUTH0_API_AUDIENCE='https://api.voorbeeld.be'
VITE_API_URL='http://localhost:9000/api'
```

### Opstarten in development-modus

Voer het commando `yarn dev` uit. Dit zal een lokale webserver opstarten met HMR voor development.

### Opstarten in production-modus

1. Voer het commando `yarn build` uit. Dit zal het project builden en in een folder `./dist`
   plaatsen.
2. Voer het commando `yarn preview` uit. Dit zal het gebuilde project in `./dist` opstarten in een
   lokale webserver.

## Testen

Jammergenoeg zijn er geen tests te bespeuren. Doordat ik de (achteraf gezien niet zo slimme) keuze gemaakt heb om Typescript te gebruiken voor de tweede iteratie van dit project, en het feit dat mocking daardoor vrijwel onmogelijk / zeer moeilijk wordt. Zelfs opzetten van een Cypress custom commando (voor de authenticatie) bleek niet mogelijk. Na vele uren hiermee met de handen in het haar te zitten heb ik het schrijven van testen bij dit project opgegeven. Ik heb nog geprobeerd om unit tests te schrijven, maar ook hier is er nood aan mocking en dit is zeer ingewikkeld. Bovendien is mocking met Jest niet geondersteund in combinatie met ESM en werkt het mocken van modules momenteel niet. Met Typescript er nog eens bij gemoeid was het te veel.

Ter vergelijking, bij Web Services heb ik in 260 integratietests geschreven. Het is echt gewoon te ingewikkeld en slecht gedocumenteerd om het verder te zetten. Nu nog terugkeren naar JavaScript zou ook enorm zonde zijn.

Ik hoop op uw begrip,

Lars.

## Development

Bij development op dit project is het aanbevolen volgende VSCode-plugins te gebruiken:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

Zo kan je eenvoudig aan de stijl- en lintingregels van het project voldoen.
