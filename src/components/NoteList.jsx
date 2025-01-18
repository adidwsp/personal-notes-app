import React from 'react';
import NoteItem from './NoteItem';
import { getActiveNotes } from '../utils/local-data';

function NoteList() {
  const notes = getActiveNotes();

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
