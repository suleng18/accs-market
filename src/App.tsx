import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';
import { TooltipProvider } from './components/ui/tooltip';
import FallbackRenderer from './components/FallbackRenderer';
import Router from './router';
import { Toaster } from './components/ui/sonner';

import './App.css';
function App() {
  return (
    <BrowserRouter>
      <TooltipProvider delayDuration={300}>
        <ErrorBoundary fallbackRender={FallbackRenderer}>
          <Router />
        </ErrorBoundary>
      </TooltipProvider>
      <Toaster position="top-right" richColors />
    </BrowserRouter>
  );
}

export default App;
