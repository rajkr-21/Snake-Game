# Snake Game 🐍

A simple Snake game built using **HTML, CSS, and JavaScript** — no frameworks or libraries, just the basics. This is the game we all have played and enjoyed in our childhood.

## Demo

Open `index.html` in your browser and start playing!

## Features

- Classic snake gameplay on a 25x25 grid
- Score tracking
- Keyboard controls (arrow keys) for desktop
- Swipe controls for mobile/touch devices
- Game resets automatically after game over

## Controls

| Device  | Control                          |
|---------|-----------------------------------|
| Desktop | Arrow keys (↑ ↓ ← →)              |
| Mobile  | Swipe up / down / left / right    |

## Tech Stack

- HTML5
- CSS3
- JavaScript

## How to Run

1. Clone this repository
   ```bash
   git clone https://github.com/your-username/snake-game.git
   ```
2. Open the project folder
   ```bash
   cd snake-game
   ```
3. Open `index.html` in your browser

That's it — no build steps or dependencies required.

## File Structure

```
snake-game/
├── index.html      # Game structure
├── style.css        # Styling for the board, snake, and food
├── script.js         # Game logic
└── README.md
```

## How It Works

- The game board is a CSS grid (25 columns x 25 rows).
- The snake's position is tracked as an array of `[x, y]` coordinates.
- Every 150ms, the game loop moves the snake, checks for collisions, and re-renders the board.
- Eating food increases the score and grows the snake.
- Hitting a wall or the snake's own body ends the game.

## Future Improvements

- [ ] Improve the UI.
- [ ] Add a pause button.
- [ ] Add difficulty levels (speed control).
- [ ] Store Game History using local storage.
- [ ] Add sound effects.

## License

This project is open source and free to use for learning purposes.
