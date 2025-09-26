
import React from 'react';
import { SearchProblem, VisualState, VisualGrid } from '../types';

interface PuzzleGridProps {
  grid: VisualGrid;
  title: string;
}

const PuzzleGrid: React.FC<PuzzleGridProps> = ({ grid, title }) => {
  const isQueens = grid.some(row => row.some(cell => cell === 'Q'));
  const gridSize = isQueens ? 'w-64 h-64' : 'w-48 h-48';
  
  return (
    <div className="mt-2 flex flex-col items-center">
      <h4 className="text-sm font-semibold text-slate-600 mb-2">{title}</h4>
      <div className={`grid ${isQueens ? 'grid-cols-8' : 'grid-cols-3'} gap-1 p-1 bg-slate-400 rounded-md shadow-inner ${gridSize}`}>
        {grid.flat().map((cell, index) => {
          if (isQueens) {
            const row = Math.floor(index / 8);
            const col = index % 8;
            const isDark = (row + col) % 2 === 1;
            return (
              <div key={index} className={`flex items-center justify-center text-2xl font-bold ${isDark ? 'bg-slate-300' : 'bg-slate-100'}`}>
                {cell === 'Q' && <span className="text-slate-800">♛</span>}
              </div>
            );
          } else {
             return (
              <div key={index} className={`flex items-center justify-center h-full w-full rounded-sm text-xl font-bold ${cell === 0 ? 'bg-slate-300' : 'bg-slate-100 text-slate-800'}`}>
                {cell !== 0 ? cell : ''}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

interface ProblemDetailProps {
  label: string;
  children: React.ReactNode;
}

const ProblemDetail: React.FC<ProblemDetailProps> = ({ label, children }) => (
  <div className="py-3 sm:grid sm:grid-cols-4 sm:gap-4">
    <dt className="text-sm font-medium text-slate-600">{label}</dt>
    <dd className="mt-1 text-sm text-slate-900 sm:mt-0 sm:col-span-3">{children}</dd>
  </div>
);

const renderState = (state: string | VisualState) => {
    if (typeof state === 'string') {
        return <p>{state}</p>;
    }
    return (
        <div className="flex flex-col md:flex-row md:items-start md:space-x-6">
            <p className="flex-1">{state.text}</p>
            <PuzzleGrid grid={state.visual} title="Visual Example" />
        </div>
    );
}

const ProblemCard: React.FC<{ problem: SearchProblem }> = ({ problem }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-shadow hover:shadow-2xl">
      <div className="p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">{problem.title}</h2>
        <p className="mt-2 text-slate-600">{problem.description}</p>
      </div>
      <div className="border-t border-slate-200 px-6 md:px-8 py-4">
        <dl className="divide-y divide-slate-200">
            <ProblemDetail label="State Representation">{problem.stateRepresentation}</ProblemDetail>
            <ProblemDetail label="State Space">{problem.stateSpace}</ProblemDetail>
            <ProblemDetail label="Actions">{problem.actions}</ProblemDetail>
            <ProblemDetail label="Transition Function">{problem.transitionFunction}</ProblemDetail>
            <ProblemDetail label="Performance Measure">{problem.performanceMeasure}</ProblemDetail>
            <ProblemDetail label="Start State">{renderState(problem.startState)}</ProblemDetail>
            <ProblemDetail label="Goal State">{renderState(problem.goalState)}</ProblemDetail>
            <ProblemDetail label="Goal Test">{problem.goalTest}</ProblemDetail>
        </dl>
      </div>
    </div>
  );
};

export default ProblemCard;
