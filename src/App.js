import React from 'react';
import { ListPage } from './features/scenarios/ListPage';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import fontawesome from '@fortawesome/fontawesome'
import { faPlus, faCircle, faClock } from '@fortawesome/fontawesome-free-solid'

fontawesome.library.add(faPlus, faCircle, faClock);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="*" element={<ListPage />} />
      </Routes>
    </Router>
  );
}

export default App;
