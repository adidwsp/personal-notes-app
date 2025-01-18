import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NoteList from './components/NoteList';
import NoteDetail from './components/NoteDetail';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <main>
          <section className="homepage">
            <h2>Catatan Aktif</h2>
            <SearchBar />
            <NoteList />
          </section>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;