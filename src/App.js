import { Route, BrowserRouter, Routes } from 'react-router-dom';

import Todo from './components/Todo';
import AboutApp from './components/AboutApp';
import AboutAuthor from './components/AboutAuthor';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="/about-app" element={<AboutApp />} />
          <Route path="/about-author" element={<AboutAuthor />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
