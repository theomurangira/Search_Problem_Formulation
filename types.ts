
export type VisualGrid = (number | string)[][];

export interface VisualState {
  visual: VisualGrid;
  text: string;
}

export interface SearchProblem {
  title: string;
  description: string;
  stateRepresentation: string;
  stateSpace: string;
  actions: string;
  transitionFunction: string;
  performanceMeasure: string;
  startState: string | VisualState;
  goalState: string | VisualState;
  goalTest: string;
}
