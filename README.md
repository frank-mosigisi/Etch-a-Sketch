# Etch-a-Sketch Project

This project is a browser version of something between a sketchpad and an Etch-a-Sketch.

## Installation and Setup Instructions

No special installation is required. You can clone this repository to your machine, and open the `index.html` file in your browser.

## Script Description

The script provides interactivity for a grid-based drawing area:

- The `fullGrid(gridCount)` function generates a square grid that's `gridCount` cells wide/high. Each cell is a `div` with the class `square`, and is a child of a `div` with the class `gridItem`.

- The `applyHoverEffect()` function applies a 'mouseenter' event listener to each grid cell (square). When the mouse enters a cell, the cell's background color changes to a random color, using the `getRandomColor()` function.

- The `clearButton` clears the coloring on all the cells, resetting them to the initial state.

- The `newSkectheButton` generates a new grid based on user input. It prompts the user to enter the number of grid cells per side. If the number is valid (a number between 1 and 100), the old grid is cleared and a new grid is generated.

## Code Structure

- `gridContainer` is the container for the grid.
- `clearButton` is the button for clearing the grid.
- `newSketchButton` is the button for creating a new grid.
- `defaultSquares` is the default number of squares (16x16 grid).

Functions:

- `fullGrid(gridCount)`: This function generates a square grid of `gridCount` by `gridCount` cells.
- `applyHoverEffect()`: This function adds the hover effect on grid cells to change their color.
- `getRandomColor()`: This function generates a random color.
- `generateNewGrid()`: This function prompts the user for a number and generates a new grid.
- Event listener on `newSketchButton` to generate a new grid on click.

## How to Use

- Hover over cells to color them.
- Click the clear button to remove all cell colors.
- Click the new game button to specify a new grid size and start a new game.

Remember to have fun sketching!