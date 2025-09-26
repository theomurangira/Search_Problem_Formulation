
import React from 'react';
import ProblemCard from './components/ProblemCard';
import { SEARCH_PROBLEMS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-slate-900 tracking-tight">
            AI Search Problem Formulation
          </h1>
          <p className="mt-2 text-lg text-slate-600">
            An illustration of how classic AI problems are defined for search algorithms.
          </p>
        </div>
      </header>
      <main className="container mx-auto p-4 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
          {SEARCH_PROBLEMS.map((problem) => (
            <ProblemCard key={problem.title} problem={problem} />
          ))}
        </div>
      </main>
      <footer className="text-center py-6 text-slate-500">
        <p>Built with React, TypeScript, and Tailwind CSS.</p>
      </footer>
    </div>
  );
};

export default App;
