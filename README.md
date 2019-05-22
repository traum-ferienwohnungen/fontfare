# FontFare
> _Fare_ is the [Maori](https://translate.google.com/#mi/en/fare). word for *Home* .

## Installing

```bash
npm install @traum-ferienwohnungen/fontfare
cp node_modules/@traum-ferienwohnungen/fontfare/dist/ YOUR_DIRECTORY
```

```scss
@import ~/@traum-ferienwohnungen/fontfare/dist/scss/_fontfare;
$font-path: "YOUR_DIRECTORY";
```

## Using the icons

Using the icons is a simple as adding two classes to your DOM Node.   
The `ff` class implies that the element should be a `f`ont`f`are icon.
Then just add the name of the icon you want to use.   
> Example.   
> ![airportIcon](./icons/airport.svg)   
> `airport.svg` becomes `ff-airport`


```html
<i class="ff ff-wifi"></i>
```

## Developer guide

```bash
# Use the node version specified in .nvmrc
nvm use
# Install packages
npm i
# Add files to icons folder
# Generate font
npm run build
```
