# [Tutorial: Tic-Tac-Toe](https://react.dev/learn/tutorial-tic-tac-toe)

## Terminology
- component = a piece of reusable code that represents a part of a user interface
  - used to render, manage, and update UI elements of an application
- `JSX element` = a combination of JavaScript code and HTML tags that describe what should be displayed
- `classNBame='___'` = button property/prop that tells CSS how to style the button
- `</___>` = closes a JSX element specified by ___ to indicate that any following content should not be placed inside the button
- `styles.css` = file that defines the styles of the React App
  - `*` and `body` = define the style of large parts of the app
  - `.___` = selector that defines the style of any component where the className property is set to ___
- `index.js` = the bridge between components and the web browser

## React Requirements
1. React components need to return a single JSX element and not multiple adjacent JSX elements


## Code Snippets
```
export default function Square() {
  return <button className="square">X</button>;
}
```
- `export` = JavaScript keyword that makes a function accessible outside of a file
- `default` = keyword taht tells other files in the code that the attributed function is the main funciton of the file
- `return` = JavaScript keyword that means whatever comes after is returned as a value to the function's caller
- `<button>` = JSX element