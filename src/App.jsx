import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NoteDetail from './components/NoteDetail';
import HomePage from './pages/HomePage';
import Archieves from './pages/Archieves';
import NotesEditPages from './pages/NotesEditPage';
import NotesNewPages from './pages/NotesNewPages';
import NotFoundPages from './pages/NotFoundPages';
import RegisterPage from './pages/RegisterPage';


function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/archieves" element={<Archieves />} />
            <Route path="/notes/:id" element={<NoteDetail />} />
            <Route path="/notes/:id/edit" element={<NotesEditPages />} />
            <Route path="/notes/new" element={<NotesNewPages />} />
            <Route path="*" element={<NotFoundPages />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;