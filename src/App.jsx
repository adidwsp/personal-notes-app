import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NoteList from './components/NoteList';
import NoteDetail from './components/NoteDetail'; // Komponen untuk menampilkan detail catatan

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<NoteList />} />
          <Route path="/notes/:id" element={<NoteDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;