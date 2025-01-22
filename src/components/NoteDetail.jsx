import React from 'react';
import { useParams } from 'react-router-dom';
import { getNote } from '../utils/local-data';
import { showFormattedDate } from '../utils/index';

function NoteDetail() {
  const { id } = useParams();
  const note = getNote(id);

  if (!note) {
    return <p>Catatan tidak ditemukan</p>;
  }

  return (
    <section className="detail-page">
      <h3 className='detail-page__title'>{note.title}</h3>
      <p className="note-item__createdAt">
              {showFormattedDate(note.createdAt)}
            </p>
      <div className="detail-page__body">{note.body}</div>
    </section>
  );
}

export default NoteDetail;