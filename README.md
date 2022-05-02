# #govbins

Source code for [councilbins.nz](http://councilbins.nz/)

## Running it

Install the dependencies:

```bash
yarn install
```

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding a bin

Add the image in `/public/images`, then add another entry in `/src/bins.js` with the information:

```javascript
  {
    fileName: "ruapara.jpg",
    slug: "new-plymouth-district",
    localAuthorityCode: "NPD",
    collectionDate: "22 April 2022",
    contributorHandle: "@mattlane",
    contributorURL: "https://twitter.com/mattlane",
    colour: "green",
    councilName: "New Plymouth District",
  }
```
