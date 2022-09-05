import React from 'react'
import { Button, Modal } from '..'

export default function Confirm({title, content, onOk, onCancel}) {
  return (
    <>
      <Modal title={title} width={360} onClose={onCancel}>
        {content}
        <hr />
        <div className="d-flex" style={{gap: '15px', margin: '2px 0'}}>
          <Button variant="rounded" color="blue" onClick={onOk}>Подтвердить</Button>
          <Button variant="rounded" color="silver" onClick={onCancel}>Отмена</Button>
        </div>
      </Modal>
    </>
  )
}
