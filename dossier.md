# Lars Salembier (Studentennummer)

> Duid aan welke vakken je volgt en vermeld voor deze vakken de link naar jouw GitHub repository. In het geval je slechts één vak volgt, verwijder alle inhoud omtrent het andere vak. Verwijder alle instructies (lijnen die starten met >)

- [x] Front-end Web Development
  - [GitHub repository](github.com/HOGENT-Web)
  - [Online versie](github.com/HOGENT-Web)
- [x] Web Services: GITHUB URL
  - [GitHub repository](github.com/HOGENT-Web)
  - [Online versie](github.com/HOGENT-Web)

**Logingegevens**

- Gebruikersnaam/e-mailadres:
- Wachtwoord:

> Vul eventueel aan met extra accounts voor administrators of andere rollen.

## Projectbeschrijving

> Omschrijf hier duidelijk waarover jouw project gaat. Voeg een domeinmodel (of EERD) toe om jouw entiteiten te verduidelijken.

## Screenshots

> Voeg enkele (nuttige!) screenshots toe die tonen wat de app doet.

## Behaalde minimumvereisten

> Duid per vak aan welke minimumvereisten je denkt behaald te hebben

### Front-end Web Development

- **componenten**

  - [ ] heeft meerdere componenten - dom & slim (naast login/register)
  - [ ] definieert constanten (variabelen, functies en componenten) buiten de component
  - [ ] minstens één form met validatie (naast login/register)
  - [ ] login systeem (eigen of extern zoals bv. Auth0) <br />

- **routing**

  - [ ] heeft minstens 2 pagina's (naast login/register)
  - [ ] routes worden afgeschermd met authenticatie en autorisatie <br />

- **state-management**

  - [ ] meerdere API calls (naast login/register)
  - [ ] degelijke foutmeldingen indien API call faalt
  - [ ] gebruikt `useState` enkel voor lokale state
  - [ ] gebruikt `Context`, `useReducer`, `Redux`… voor globale state <br />

- **hooks**

  - [ ] kent het verschil tussen de hooks (`useCallback`, `useEffect`…)
  - [ ] gebruikt de hooks op de juiste manier <br />

- **varia**
  - [ ] een aantal niet-triviale testen (unit- en/of end-to-end- en/of UI-testen)
  - [ ] minstens één extra technologie
  - [ ] duidelijke en volledige `README.md`
  - [ ] volledig en tijdig ingediend dossier

### Web Services

- **datalaag**

  - [ ] voldoende complex (meer dan één tabel)
  - [ ] één module beheert de connectie + connectie wordt gesloten bij sluiten server
  - [ ] heeft migraties
  - [ ] heeft seeds <br />

- **repositorylaag**

  - [ ] definieert één repository per entiteit (niet voor tussentabellen) - indien van toepassing
  - [ ] mapt OO-rijke data naar relationele tabellen en vice versa <br />

- **servicelaag met een zekere complexiteit**

  - [ ] bevat alle domeinlogica
  - [ ] bevat geen SQL-queries of databank-gerelateerde code <br />

- **REST-laag**

  - [ ] meerdere routes met invoervalidatie
  - [ ] degelijke foutboodschappen
  - [ ] volgt de conventies van een RESTful API
  - [ ] bevat geen domeinlogica
  - [ ] degelijke authorisatie/authenticatie op alle routes <br />

- **varia**
  - [ ] een aantal niet-triviale testen (min. 1 controller >=80% coverage)
  - [ X ] minstens één extra technologie
  - [ ] duidelijke en volledige `README.md`
  - [ X ] maakt gebruik van de laatste ES6-features (object destructuring, spread operator...)
  - [ ] volledig en tijdig ingediend dossier

## Projectstructuur

### Front-end Web Development

> Hoe heb je jouw applicatie gestructureerd (mappen, design patterns, hiërarchie van componenten, state...)?

### Web Services

> Hoe heb je jouw applicatie gestructureerd (mappen, design patterns...)?

## Extra technologie

### Front-end Web Development

> Wat is de extra technologie? Hoe werkt het? Voeg een link naar het npm package toe!

#### Typescript

De website is volledig geschreven in [Typescript](https://www.npmjs.com/package/typescript). TypeScript is een opensource-programmeertaal die JavaScript uitbreidt met statische types. Dit maakt het mogelijk om fouten op te sporen tijdens het ontwikkelingsproces in plaats van tijdens de uitvoering. Hierdoor kan de code efficiënter en betrouwbaarder worden ontwikkeld.

#### Vite

De website wordt gebuild met [Vite](https://www.npmjs.com/package/vite) in plaats van Create-React-App (CRA). Vite is een frontend build tool die véél sneller is dan CRA. De opstart- en recompiletijden van Vite-applicaties zijn zéér kort.

#### Speedy Web Compiler (SWC)

Vite is geconfigureerd om [SWC](https://swc.rs/) te gebruiken in plaats van de standaard Typescript compiler Babel. SWC is een supersnelle Typescript compiler die 20 tot 70 keer sneller is dan Babel.

#### ESLint en Prettier

Tijdens development gebruiken we de linting tool [ESLint](https://www.npmjs.com/package/eslint). ESLint zal problemen in de code vroegtijdig aanduiden. We gebruiken hierbovenop de opinionated codeformatter [Prettier](https://www.npmjs.com/package/prettier) om extra code styling toe te voegen.

##### ESLint Configuraties

We gebruiken hierbij [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb) als basisconfiguratie. Deze opinionated style guide voor React-projecten ontwikkeld door Airbnb is zeer populair en zorgt voor uniforme code practices doorheen het hele project.

- We breiden deze style guide uit voor gebruik met Typescript via de plugin [eslint-config-airbnb-typescript](https://www.npmjs.com/package/eslint-config-airbnb-typescript)

Hierbovenop gebruiken we [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier) om de Prettier-stijlregels toe te passen.

##### ESLint Plugins

We gebruiken ook enkele plugins die ESLint uitbreiden voor gebruik met:

- `import`/`export` syntax:
  [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
- React: [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)
  - Hooks: [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
  - JSX: [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)
- Typescript:
  - [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)
  - [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser)
- Prettier: [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier)

#### Vitest

We gebruiken [Vitest](https://www.npmjs.com/package/vitest) in plaats van Jest om onze unit tests te runnen. Dit omdat Vitest beter integreert met Vite en vooral veel sneller is dan Jest.

#### NextUI

We gebruiken [NextUI](https://www.npmjs.com/package/@nextui-org/react) als UI-framework. NextUI is een React UI-framework gebaseerd op TailwindCSS en Framer Motion.

#### Framer Motion

We gebruiken [Framer Motion](https://www.npmjs.com/package/framer-motion) om animaties toe te voegen aan onze website. Framer Motion is een React library voor het maken van animaties.

#### TailwindCSS

We gebruiken [TailwindCSS](https://www.npmjs.com/package/tailwindcss) als CSS-framework. TailwindCSS is een utility-first CSS-framework. Dit betekent dat het geen kant-en-klare componenten bevat zoals Bootstrap, maar dat je zelf de componenten moet bouwen. We gebruiken TailwindCSS omdat het een zeer lichtgewicht framework is en omdat het zeer flexibel is. TailwindCSS is ook zeer populair en heeft een grote community.

We gebruiken [prettier-plugin-tailwindcss](https://www.npmjs.com/package/prettier-plugin-tailwind) om TailwindCSS classes te formatteren en ordenen met Prettier.

We gebruiken [PostCSS](https://www.npmjs.com/package/postcss) om TailwindCSS te compileren naar CSS. PostCSS is een tool voor het transformeren en optimaliseren van CSS met JavaScript.

We gebruiken [Autoprefixer](https://www.npmjs.com/package/autoprefixer) om vendor prefixes toe te voegen aan onze CSS. Dit zorgt ervoor dat onze CSS-code compatibel is met alle browsers.

We gebruiken [PostCSS-import](https://www.npmjs.com/package/postcss-import) om CSS-bestanden te importeren in andere CSS-bestanden.

We gebruiken [PostCSS-nested](https://www.npmjs.com/package/postcss-nested) om geneste CSS te schrijven.

### Web Services

> Wat is de extra technologie? Hoe werkt het? Voeg een link naar het npm package toe!

## Testresultaten

### Front-end Web Development

> Schrijf hier een korte oplijsting en beschrijving van de geschreven testen

### Web Services

> Schrijf hier een korte oplijsting en beschrijving van de geschreven testen + voeg een screenshot van de coverage en uitvoering toe

## Gekende bugs

### Front-end Web Development

> Zijn er gekende bugs?

### Web Services

> Zijn er gekende bugs?
