import React from 'react'

import {Modal} from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Text } from '../StyledComponents';

export default function ModalGuide({show,onClose, data}) {
	//const [modalShow, setModalShow] = useState(true)

  return (
    <div>
      <Modal className='col-10 bg-dark'
				show={show}
				onHide={onClose}
				size='lg'
				arial-labelledby='contained-modal-title-vcenter'
				centered
			>
				<Modal.Header className='bg-omni-dark'>
					<Modal.Title id='contained-modal-title-vcenter'>
						<Text>{data.title}</Text>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body className=' m-auto '>
					<div className='mx-3 my-5'><Text>{data.summary}</Text></div>
					<p className='text-center my-2 '>
						<a
					href={data.link}
					target='blank'
					rel='noreferrer'
				>
					Go to site
				</a></p>
				</Modal.Body>
				<Modal.Footer className='bg-omni-dark'>
					<p className='m-auto'><Text>Keywords:</Text></p>
						<p className='m-auto'><Text>{data.keywords}</Text></p>
					<Button className="button"
						onClick={onClose}
					>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
      
    </div>
  )
}
