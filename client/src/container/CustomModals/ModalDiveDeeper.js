import React,{useState} from 'react'
import { Modal } from 'react-bootstrap'
import ThumbnailBox from '../ThumbnailBox/ThumbnailBox'
import { Text } from '../StyledComponents';

export default function ModalDiveDeeper({itemName,content}) {
  const [show, setShow] = useState(false);
  return (
    <div>
       <div onClick={() => setShow(true)}>
        {itemName}
      </div>

      <Modal className='bg-dark'
        show={show}
        onHide={() => setShow(false)}
        size="xl"
        dialogClassName=""
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header  closeButton className='bg-omni-dark'>
          <Modal.Title>
            <Text>{itemName}</Text>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <ThumbnailBox  content={content}/>
        </Modal.Body>
      </Modal>
    </div>
  )
}
