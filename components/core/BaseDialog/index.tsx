import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { DialogOverlay, DialogContent } from '@reach/dialog'
import styled from '@emotion/styled'
import IconClose from '@/components/icons/Close.svg'

const MotionDialogOverlay = motion(DialogOverlay)
const MotionDialogContent = motion(DialogContent)

const Wrapper = styled.div`
  @apply fixed inset-0 overflow-auto flex items-center;
  background: hsla(0, 0%, 0%, 0.33);

  [data-reach-dialog-content] {
    @apply relative rounded-lg bg-white w-72 m-auto;
  }
`

export type BaseDialogProps = {
  open: boolean
  width?: number
  height?: number
  onClose: () => void
  children: React.ReactNode
}

export default function BaseDialog({ width = 200, height, open, onClose, children }: BaseDialogProps) {
  const [openPopup, setOpenPopup] = useState(open)

  useEffect(() => {
    setOpenPopup(open)
  }, [open])

  function handleClose() {
    setOpenPopup(false)
    onClose()
  }

  return (
    <AnimatePresence>
      {openPopup && (
        <MotionDialogOverlay
          className="fixed inset-0 overflow-auto flex items-center shadow-sm"
          style={{ background: 'hsla(0, 0%, 0%, 0.33)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.2,
          }}
          onDismiss={handleClose}
          dangerouslyBypassFocusLock
        >
          <DialogContent
            className="relative rounded-lg bg-white w-72 m-auto"
            style={{ width, height }}
            // initial={{ y: -50, opacity: 0 }}
            // animate={{ y: 0, opacity: 1 }}
            // transition={{ min: 0, max: 100, bounceDamping: 2 }}
            aria-label="baes dialog"
          >
            <button className="absolute right-0 -top-8 h-5 w-5" onClick={handleClose}>
              <IconClose width={20} height={20} fill="#FFFFFF" viewBox="5 5 10 10" />
            </button>
            <div>{children}</div>
          </DialogContent>
        </MotionDialogOverlay>
      )}
    </AnimatePresence>
  )
}
