import React from 'react'

import {Modal} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

export default function ModalGuide({show,onClose, data}) {
	//const [modalShow, setModalShow] = useState(true)

  return (
    <div>
      <Modal className='col-10 box-shadow'
				show={show}
				onHide={onClose}
				size='lg'
				arial-labelledby='contained-modal-title-vcenter'
				centered
			>
				<Modal.Header className='bg-info'>
					<Modal.Title id='contained-modal-title-vcenter'>
						{data.title}
					</Modal.Title>
				</Modal.Header>
				<Modal.Body className=' m-auto bg-info'>
					<div className='bg-info mx-3 my-5'>{data.summary}</div>
					<p className='text-center my-2 '>
						<a
					href={data.link}
					target='blank'
					rel='noreferrer'
				>
					Go to site
				</a></p>
				</Modal.Body>
				<Modal.Footer className='bg-info'>
					<p className="m-auto">Keywords:</p>
					<p className="d-flex w-100 m-auto"
					>
						{data.keywords}
					</p>
					<Button
						onClick={onClose}
					>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
      
    </div>
  )
}
