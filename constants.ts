import { SearchProblem } from './types';

export const SEARCH_PROBLEMS: SearchProblem[] = [
  {
    title: '8-Puzzle Problem',
    description: 'The 8-puzzle consists of a 3x3 grid with eight numbered tiles and one blank space. The objective is to slide the tiles around to reach a specified goal configuration.',
    stateRepresentation: 'A 3x3 array or a 9-element vector representing the positions of the numbered tiles and the blank space.',
    stateSpace: 'There are 9! = 362,880 possible permutations of the tiles. However, only half of these states (181,440) are reachable from any given starting state.',
    actions: 'Move the blank space: Up, Down, Left, or Right. Actions are only allowed if the blank space does not move off the board.',
    transitionFunction: 'Given a state and an action, it returns the new state resulting from swapping the blank tile with the adjacent tile in the direction of the move.',
    performanceMeasure: 'Path Cost. Each move costs 1. The goal is to find the solution with the minimum number of moves.',
    startState: {
        visual: [
            [7, 2, 4],
            [5, 0, 6], // 0 represents the blank space
            [8, 3, 1]
        ],
        text: 'A scrambled configuration of the tiles on the 3x3 grid.'
    },
    goalState: {
        visual: [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 0] // 0 represents the blank space
        ],
        text: 'The tiles are arranged in ascending order, with the blank space often at the end.'
    },
    goalTest: 'Checks if the current state\'s configuration matches the goal state\'s configuration exactly.',
  },
  {
    title: '8-Queens Problem',
    description: 'The challenge is to place eight chess queens on an 8x8 chessboard so that no two queens threaten each other. This means no two queens can share the same row, column, or diagonal.',
    stateRepresentation: 'An array of 8 integers, where the array index `i` represents the column and the value `a[i]` represents the row where the queen in that column is placed. This formulation ensures one queen per column.',
    stateSpace: 'For the incremental formulation (placing one queen per column), there are 8^8 = 16,777,216 possible states. This is the total number of ways to place 8 queens in 8 columns.',
    actions: 'Place a queen in the next empty column in a row that is not currently under attack by any existing queens.',
    transitionFunction: 'Given a state with `k` queens, an action adds a queen to column `k+1`, resulting in a new state with `k+1` queens.',
    performanceMeasure: 'There is no path cost. The performance is measured by whether a goal state (a valid solution) is found or not.',
    startState: {
        visual: [
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
        ],
        text: 'An empty 8x8 chessboard.'
    },
    goalState: {
        visual: [
            ['', '', '', '', 'Q', '', '', ''],
            ['', '', 'Q', '', '', '', '', ''],
            ['', '', '', '', '', '', 'Q', ''],
            ['', '', '', '', '', '', '', ''],
            ['Q', '', '', '', '', '', '', ''],
            ['', '', '', 'Q', '', '', '', ''],
            ['', 'Q', '', '', '', '', '', ''],
            ['', '', '', '', '', 'Q', '', ''],
        ],
        text: 'A state with 8 queens on the board, where no queen can attack any other queen. (This is one of 92 possible solutions).'
    },
    goalTest: 'Checks if all 8 queens are on the board and if no two queens share the same row or diagonal (the state representation already prevents same-column attacks).',
  },
  {
    title: 'Chess Game',
    description: 'A two-player strategy game played on an 8x8 board. The objective is to checkmate the opponent\'s king, putting it under an inescapable threat of capture.',
    stateRepresentation: 'A complete description of the board state, including the position of every piece, whose turn it is to move, castling rights for both players, and any possible en passant captures.',
    stateSpace: 'Extremely large. The number of legal chess positions is estimated to be between 10^43 and 10^50. The game-tree complexity is even larger, approximately 10^123.',
    actions: 'The set of all legal moves for the player whose turn it is. This includes standard piece moves, castling, and pawn promotions.',
    transitionFunction: 'Takes a current state and a legal move to produce the resulting board state. This includes updating piece positions, switching the player turn, and updating special rules like castling rights.',
    performanceMeasure: 'For an AI agent, this is typically defined by a utility function that evaluates the board position. A win is +1, a draw is 0, and a loss is -1. Path cost (number of moves) is not the primary measure.',
    startState: 'The standard initial setup of all 32 pieces on the 8x8 board, with White to move first.',
    goalState: 'Any state where the opponent is in checkmate. This is a terminal state where the game ends.',
    goalTest: 'Checks if the opponent\'s king is currently in check and there are no legal moves the opponent can make to escape the check.',
  },
  {
    title: 'Water Jug Problem',
    description: 'Given two jugs with capacities of 4 and 3 gallons and an infinite supply of water, the goal is to measure exactly 2 gallons of water into the 4-gallon jug.',
    stateRepresentation: 'A pair of integers (x, y), where `x` is the amount of water in the 4-gallon jug (0 ≤ x ≤ 4) and `y` is the amount of water in the 3-gallon jug (0 ≤ y ≤ 3).',
    stateSpace: 'The state space is the set of all possible pairs (x, y), resulting in 5 * 4 = 20 possible states. However, many of these might not be reachable from the start state.',
    actions: 'The actions include filling a jug, emptying a jug, or pouring water from one jug to another until the source is empty or the destination is full.',
    transitionFunction: 'Takes a state (x, y) and an action, returning the new state. For example, \'Fill Jug X\' from (0, y) results in (4, y). \'Pour from X to Y\' from (x, y) results in (x - d, y + d) where d is the amount poured.',
    performanceMeasure: 'Path Cost. Each action costs 1. The objective is to find the shortest sequence of actions to reach the goal.',
    startState: '(0, 0) - Both jugs are empty.',
    goalState: 'Any state (2, y), meaning there are exactly 2 gallons in the 4-gallon jug.',
    goalTest: 'Checks if the current state (x, y) has x = 2.',
  },
  {
    title: 'Missionaries and Cannibals Problem',
    description: 'Three missionaries and three cannibals must cross a river using a boat that can carry at most two people. At no point can the number of cannibals outnumber the number of missionaries on either river bank.',
    stateRepresentation: 'A tuple (m, c, b), where `m` is the number of missionaries on the starting bank, `c` is the number of cannibals on the starting bank, and `b` indicates the boat\'s location (1 for starting bank, 0 for the goal bank).',
    stateSpace: 'The set of valid states (m, c, b) where missionaries are not outnumbered. There are 32 total states, but only a subset are valid and reachable.',
    actions: 'Move the boat from one bank to the other with one or two people. Possible moves are sending: 1 missionary, 2 missionaries, 1 cannibal, 2 cannibals, or 1 of each.',
    transitionFunction: 'Applies a legal action to a state. For example, if the state is (3, 3, 1) and the action is to move one missionary and one cannibal across, the new state becomes (2, 2, 0).',
    performanceMeasure: 'Path Cost. Each river crossing is one step. The goal is to find the minimum number of crossings.',
    startState: '(3, 3, 1) - All missionaries, cannibals, and the boat are on the starting bank.',
    goalState: '(0, 0, 0) - Everyone is on the goal bank.',
    goalTest: 'Checks if the current state is (0, 0, 0).',
  },
];