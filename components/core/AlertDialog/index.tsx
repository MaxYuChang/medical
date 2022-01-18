import React, { useState } from 'react'
import BaseDialog from '../BaseDialog'
import Button from '../Button'

export default function AlertPop({ open, title, content, onOk, onCancel }) {
  const [openPopup, setOpenPopup] = useState(open)

  // function handleClickCancel() {
  //   setOpenPopup(false)
  //   onCancel()
  // }

  function handleClickOk() {
    setOpenPopup(false)
    onOk()
  }

  return (
    <BaseDialog open={openPopup} onClose={onCancel}>
      <div className="p-10">
        <header className="text-[#333333] font-semibold text-center mb-[1.875rem]">{title}</header>
        <div className="text-sm text-center mb-[1.875rem]">{content}</div>
        <footer className="flex justify-center items-center">
          <div>
            <button onClick={handleClickOk}>確定</button>
          </div>
          <div className="w-5"></div>
          {/* <div>
            <Button type="button" onClick={handleClickCancel}>
              取消
            </Button>
          </div> */}
        </footer>
      </div>
    </BaseDialog>
  )
}
