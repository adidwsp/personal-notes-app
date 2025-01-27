import React from 'react'
import PropTypes from 'prop-types'
import { HiPlus } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'

function HomePageAction({ handleSave }) {
  const navigate = useNavigate()

  return (
    <>
        <div className="homepage__action">
            <button
            className="action"
            type="button"
            title="Tambah"
            onClick={() => navigate('/notes/new')}
            >
            <HiPlus />
        </button>
        </div>
    </>
  )
}


export default HomePageAction;
