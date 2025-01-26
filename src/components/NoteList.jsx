import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes }) {
  if (notes.length === 0) {
    return (
      <section className="notes-list-empty">
        <p className="notes-list__empty">Tidak ada catatan aktif</p>
      </section>
    );
  }

  return (
    <section className="notes-list">
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </section>
  );
}

export default NoteList;
