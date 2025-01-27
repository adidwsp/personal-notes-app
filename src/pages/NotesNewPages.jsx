import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddNewPageAction from '../components/AddNewPageAction';
import { addNote } from '../utils/local-data';

export default function NotesNewPages() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: '',
    body: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((data) => ({ ...data, [name]: value }));
  };

  const handleSave = () => {
    const { title, body } = form;
    addNote({ title, body });
    navigate('/');
  };

  return (
    <section className="add-new-page">
      <div className="add-new-page__input">
        <input
          className="add-new-page__input__title"
          name="title"
          placeholder="Catatan rahasia"
          value={form.title}
          onChange={handleChange}
        />
        <textarea
          className="add-new-page__input__body"
          name="body"
          value={form.body}
          onChange={handleChange}
          placeholder="Sebenarnya saya adalah..."
        />
      </div>
      <AddNewPageAction handleSave={handleSave} />
    </section>
  );
}
