import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
      <div className="text-center">
        <div className="flex justify-center gap-8 mb-8">
          <a
            href="https://vite.dev"
            target="_blank"
            className="transition-transform hover:scale-110"
          >
            <img src={viteLogo} className="h-24 w-24" alt="Vite logo" />
          </a>
          <a
            href="https://react.dev"
            target="_blank"
            className="transition-transform hover:scale-110"
          >
            <img
              src={reactLogo}
              className="h-24 w-24 animate-spin-slow"
              alt="React logo"
            />
          </a>
        </div>

        <h1 className="text-5xl font-bold text-white mb-8">Vite + React</h1>

        <div className="bg-gray-800 rounded-lg p-8 shadow-xl max-w-md mx-auto">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            count is {count}
          </button>
          <p className="text-gray-300 mt-6">
            Edit{" "}
            <code className="bg-gray-700 px-2 py-1 rounded text-blue-400">
              src/App.tsx
            </code>{" "}
            and save to test HMR
          </p>
        </div>

        <p className="text-gray-400 mt-8">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  );
}

export default App;
