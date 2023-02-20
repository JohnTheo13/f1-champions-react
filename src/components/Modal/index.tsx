import { ReactNode, useEffect, useRef } from 'react'
import Modal from 'react-modal'
import Button from '../Button'
import { MoadalStyles, customStyles } from './styles'

interface ModalProps {
  children: ReactNode
  title: string
  onClose: () => void
}

const ModalContainer = ({ children, title, onClose }: ModalProps) => {
  const modal = useRef(null)

  Modal.setAppElement('#root')
  useEffect(() => {
    if (modal?.current) {
      document.body.style.position = 'fixed'
      document.body.style.left = '0'
      document.body.style.right = '0'
    }
    return () => {
      document.body.style.position = ''
      document.body.style.left = ''
      document.body.style.right = ''
    }
  }, [modal])

  return (
    <Modal isOpen style={customStyles}>
      <MoadalStyles className="modal" ref={modal}>
        <div className="modal__title">
          <h3>{title}</h3>
          <Button aria-controls="close dialoge" onClick={onClose}>
            X
          </Button>
        </div>
        <div className="modal__body">{children}</div>
      </MoadalStyles>
    </Modal>
  )
}

export default ModalContainer
