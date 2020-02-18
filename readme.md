# bap-think-pink

## Installation
Installeer volgende zaken om video's te kunnen renderen.

```
yarn global add @nexrender/server @nexrender/worker @nexrender/action-encode @nexrender/action-upload
```

## Render server & worker starten
1. Per shell moeten we onze google credentials instellen. De JSON voor dit project is megeleverd en is te vinden in de `credentials` folder. [PATH_TO_JSON] is relative aan waar de shell gestart word.
```
export GOOGLE_APPLICATION_CREDENTIALS=[PATH_TO_JSON]
```

2. Run volgende code elk in een aparte shell
```
nexrender-server --port=3050 --secret=baplife
```
```
nexrender-worker --host=http://localhost:3050 --secret=baplife
```
