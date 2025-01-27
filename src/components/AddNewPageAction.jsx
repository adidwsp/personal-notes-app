import React from 'react'
import PropTypes from 'prop-types'
import { HiX, HiCheck } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'

function AddNewPageAction({ handleSave }) {
  const navigate = useNavigate()

  return (
      <>
        <div className="add-new-page__action">
            <button
            className="action"
            type="button"
            title="Tambah"
            onClick={() => navigate('/')}
            >
            <HiX />
            </button>
            <button
            className="action"
            type="button"
            title="Tambah"
            onClick={() => handleSave()}
            >
            <HiCheck />
            </button>
        </div>
      </>
  )
}

AddNewPageAction.propTypes = {
  handleSave: PropTypes.func.isRequired
}

export default AddNewPageAction;
