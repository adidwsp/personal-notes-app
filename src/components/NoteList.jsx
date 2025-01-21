import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes }) {
  return (
    <section className="notes-list">
      {notes.length === 0 ? (
        <p>Tidak ada catatan aktif</p>
      ) : (
        notes.map((note) => <NoteItem key={note.id} note={note} />)
      )}
    </section>
  );
}

export default NoteList;
