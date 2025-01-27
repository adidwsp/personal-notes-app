import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { HiArrowLeft, HiCheck } from 'react-icons/hi';
import { editNote, getNote } from '../utils/local-data';
import NotFoundPages from './NotFoundPages';
import NoteDetailAction from '../components/NoteDetailAction';

export default function NotesEditPages() {
  const [form, setForm] = useState({
    id: '',
    archived: false,
    title: '',
    body: '<b><i><u>Isi Catatan</u></i></b>',
  });
  const { id } = useParams();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((data) => ({ ...data, [name]: value }));
  };

  const handleSave = () => {
    const { title, body } = form;
    editNote({ id, title, body });
    navigate(`/notes/${id}`);
  };

  useEffect(() => {
    const showNote = getNote(id);
    if (showNote) {
      const { title, archived, body } = showNote;
      setForm({ id, title, archived, body });
    }
  }, [id]);

  return (
    <section className="edit-page">
      {form.id !== '' ? (
        <>
          <Link to="/" title="Kembali">
            <HiArrowLeft /> Kembali
          </Link>
          <div className="edit-page__input">
            <input
              className="edit-page__input__title"
              placeholder="Judul"
              name="title"
              value={form.title}
              onChange={handleChange}
            />
            <textarea
              className="edit-page__input__body"
              name="body"
              value={form.body}
              onChange={handleChange}
              placeholder="Isi Catatan"
            />
          </div>
        </>
      ) : (
        <NotFoundPages />
      )}

      <button
        className="action"
        type="button"
        title="Simpan"
        onClick={() => handleSave()}
      >
        <HiCheck />
      </button>
      
    </section>
  );
}
