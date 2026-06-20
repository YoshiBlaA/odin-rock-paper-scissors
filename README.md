# Rock Paper Scissors

A classic Rock Paper Scissors game playable in the browser console, built with vanilla JavaScript.

## About

This project is part of [The Odin Project](https://www.theodinproject.com/) Foundations curriculum. The game runs entirely in the browser's developer console and challenges you to beat the computer across 5 rounds.

## How to Play

1. Open `index.html` in your browser (or load the script in any JS environment)
2. Open the browser's developer console (`F12` → Console)
3. When prompted, type `rock`, `paper`, or `scissors` and press Enter
4. Play 5 rounds — the player with the most wins takes the game!

## Features

- Random computer choice generation
- Case-insensitive input handling
- Round-by-round result feedback in the console
- Score tracking across all 5 rounds
- Final winner announcement

## Project Structure

```
rock-paper-scissors/
├── index.html  # Entry point — loads the script in the browser
└── game.js     # All game logic
```

## Built With

- Vanilla JavaScript (no libraries, no frameworks — just JS)

## What I Learned

- Functions and control flow (`switch`, `if/else`)
- `Math.random()` for randomness
- String manipulation (`charAt`, `toUpperCase`, `slice`)
- `prompt()` for user input
- Iterative game loop with score tracking