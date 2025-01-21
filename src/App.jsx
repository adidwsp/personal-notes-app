import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NoteList from './components/NoteList';
import NoteDetail from './components/NoteDetail';
import SearchBar from './components/SearchBar';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <HomePage />
      </div>
    </BrowserRouter>
  );
}

export default App;