import React from 'react'
import PropTypes from 'prop-types'
import { HiOutlineTrash } from 'react-icons/hi'
import { BiArchiveIn, BiArchiveOut } from 'react-icons/bi'
import { AiOutlineEdit } from 'react-icons/ai'

function NoteDetailAction({
  archived, handleEdit, handleArchive, handleDelete
 }) {
  return (
    <div className="detail-page__action">
      <>
        <button
          className="action"
          type="button"
          title="Edit"
          onClick={() => handleEdit()}
        >
          <AiOutlineEdit />
        </button>
        <button
          className="action"
          type="button"
          title={archived ? 'Aktifkan' : 'Arsipkan'}
          onClick={() => handleArchive()}
        >
          {archived ? <BiArchiveOut /> : <BiArchiveIn />}
        </button>
        <button
          className="action"
          type="button"
          title="Hapus"
          onClick={() => handleDelete()}
        >
          <HiOutlineTrash />
        </button>
      </>
    </div>
  )
}

NoteDetailAction.propTypes = {
  archived: PropTypes.bool.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleArchive: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
}

export default NoteDetailAction;
