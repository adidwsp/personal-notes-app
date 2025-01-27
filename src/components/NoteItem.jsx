import React from 'react';
import { Link } from 'react-router-dom';
import { showFormattedDate } from '../utils/index';
import PropTypes from 'prop-types';

function NoteItem({ note }) {
  return (
    <article className="note-item">
      <h3 className="note-item__title">
        <Link to={`/notes/${note.id}`}>{note.title}</Link>
      </h3>
      <p className="note-item__createdAt">
        {showFormattedDate(note.createdAt)}
      </p>
      <p className='note-item__body'>{note.body}</p>
    </article>
  );
}

NoteItem.propTypes = {
  note: PropTypes.object.isRequired,
};

export default NoteItem;