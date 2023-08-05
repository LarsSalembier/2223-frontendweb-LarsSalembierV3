# Examenopdracht Front-end Web Development

- Student: Lars Salembier
- Studentennummer: xxxxxxxxx
- E-mailadres: lars.salembier@student.hogent.be

## Vereisten

Ik verwacht dat volgende software reeds geïnstalleerd is:

- [NodeJS](https://nodejs.org)
- [Yarn](https://yarnpkg.com)
- [MySQL Community Server](https://dev.mysql.com/downloads/mysql/)

> Vul eventueel aan

## Opstarten

> Schrijf hier hoe we de applicatie starten (.env bestanden aanmaken, commando's om uit te
> voeren...)

### Opstarten in development-modus

Voer het commando `yarn dev` uit. Dit zal een lokale webserver opstarten met HMR voor development.

### Opstarten in production-modus

1. Voer het commando `yarn build` uit. Dit zal het project builden en in een folder `./dist`
   plaatsen.
2. Voer het commando `yarn preview` uit. Dit zal het gebuilde project in `./dist` opstarten in een
   lokale webserver.

## Testen

> Schrijf hier hoe we de testen uitvoeren (.env bestanden aanmaken, commando's om uit te voeren...)

Voer het commando `yarn test` uit. Dit zal alle testen uitvoeren.

## Development

Bij development op dit project is het aanbevolen volgende VSCode-plugins te gebruiken:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier ESLint](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint)

Zo kan je eenvoudig aan de stijl- en lintingregels van het project voldoen.
