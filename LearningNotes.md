# [Tutorial: Tic-Tac-Toe](https://react.dev/learn/tutorial-tic-tac-toe)


## Terminology
- component = a piece of reusable code that represents a part of a user interface
  - used to render, manage, and update UI elements of an application
- `JSX element` = a combination of JavaScript code and HTML tags that describe what should be displayed
- `</___>` = closes a JSX element specified by ___ to indicate that any following content should not be placed inside the button
- `styles.css` = file that defines the styles of the React App
  - `*` and `body` = define the style of large parts of the app
  - `.___` = selector that defines the style of any component where the className property is set to ___
- `index.js` = the bridge between components and the web browser
- `state` = used by components to remember things
- `useState` = special React function that can be called by a componbent to let it remember things
- `props` = allows a parent component to pass a state back down to its children that keeps them in sync with each other and their parent


## React Requirements
1. React components need to return a single JSX element and not multiple adjacent JSX elements


## Code Snippets
```
export default function Square() {
  return <button className="square">X</button>;
}
```
- `{___}` = curly braces; used to escape from JSX into JavaScript
- `arr.slice()` = method that returns the selected elements in an array as a new array without changing the original array; selects from a given start up to a not inclusive given end
- `<button>` = JSX element
- `className='___'` = button property/prop that tells CSS how to style the button
- `default` = keyword taht tells other files in the code that the attributed function is the main funciton of the file
- `export` = JavaScript keyword that makes a function accessible outside of a file
- `...history` = spread syntax that enumerates all the items in array history
- `return` = JavaScript keyword that means whatever comes after is returned as a value to the function's caller


## Run Project
Locally:
```
npm start
```
Access [HERE](http://localhost:3000/)
> In Chrome, access console with "option + command + j"

## Tools
[React Developer Tools (Chrome)](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)


## HTML
### Elements
-  `<div>` - by default a block element (takes all available width, and comes with line breaks before and after); used as a container for other HTML elements

### [Basic Formatting](https://www.w3schools.com/html/html_formatting.asp)
- `<b>` - Bold text
- `<del>` - Deleted text
- `<em>` - Emphasized text
- `<i>` - Italic text
- `<ins>` - Inserted text
- `<mark>` - Marked text
- `<small>` - Smaller text
- `<strong>` - Important text
- `<sub>` - Subscript text
- `<sup>` - Superscript text