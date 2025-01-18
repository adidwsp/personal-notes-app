import React from 'react';
import { useSearchParams } from 'react-router-dom';
import NoteItem from './NoteItem';
import { getActiveNotes } from '../utils/local-data';

function NoteList() {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get('search');

  const notes = getActiveNotes().filter((note) =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="notes-list">
      {notes.length === 0 ? (
        <p>Tidak ada catatan aktif</p>
      ) : (
        notes.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))
      )}
    </section>
  );
}

export default NoteList;