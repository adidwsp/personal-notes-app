import React from 'react';
import { getNote, archiveNote, unarchiveNote, deleteNote } from '../utils/local-data';
import { showFormattedDate } from '../utils/index';
import NoteDetailAction from './NoteDetailAction'; 
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


function NoteDetail() {
  const [note, setNote] = useState({})
  const { id } = useParams()
  const navigate = useNavigate()

  if (!note) {
    return <p>Catatan tidak ditemukan</p>;
  }

  const handleEdit = () => {
    navigate(`/notes/${id}/edit`)
  }

  const handleArchive = () => {
    if (note.archived) {
      unarchiveNote(id)
      navigate('/archives')
    } else {
      archiveNote(id)
      navigate('/')
    }
  }

  const handleDelete = () => {
    deleteNote(id)
    navigate('/')
  }

  useEffect(() => {
    const showNote = getNote(id)
    if (showNote) {
      setNote(showNote)
    }
  }, [])


  return (
    <section className="detail-page">
      <h3 className="detail-page__title">{note.title}</h3>
      <p className="note-item__createdAt">{showFormattedDate(note.createdAt)}</p>
      <div className="detail-page__body">{note.body}</div>

      <NoteDetailAction
        archived={note.archived || false}
        handleEdit={handleEdit}
        handleArchive={handleArchive}
        handleDelete={handleDelete}/>
    </section>
  );
}

export default NoteDetail;
