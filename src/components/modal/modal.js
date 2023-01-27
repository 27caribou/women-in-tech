import React from "react"

export const Modal = ({ open, onClose, children }) => {
  if (!open) return null

  return (
    <div className="modal">
      <div className="modal-container">
        <button className="modal-close" onClick={() => onClose()}>
          x
        </button>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  )
}
