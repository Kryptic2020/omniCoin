import React, { useState } from 'react';
import guideData from '../../utils/guideData';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import {
	Heading,
	Text,
	Container,
} from '../StyledComponents';
import ModalGuide from '../CustomModals/ModalGuide';



function Guide() {
    const initialState = {
							image: '',
							link: '',
							title: null,
							summary: '',
							keywords: '',
						};
	const [modalShow, setModalShow] = useState(false);
	const [tempData, setTempData] = useState(initialState);

    const onClose = () => {
        setModalShow(false)
    }

	const cards = guideData.map((e, idx) => {
		return (
			<Card
				className='col-12 col-sm-3 my-3 m-sm-4 box-shadow'
				key={idx}
                id='guide__card__container'
                onClick={() => {
						setTempData({
							image: e.image,
							link: e.link,
							title: e.title,
							summary: e.summary,
							keywords: e.Keywords,
						});
                    setModalShow(true)
                    console.log("hey", modalShow)
					}}
			><div>
				<Text className=' m-3'>{e.title}</Text>
				<div>
					&#x1F50E;&#xFE0E;
				</div>
                    
                </div>
			</Card>
		);
	});

	return (
		<div>
			<Heading>Guides</Heading>
			<Text className='my-5'>
				Click on images below to learn about Crypto
				and Stocks!
			</Text>
			<Container className='rounded box-shadow'>
					<Row className='col-12 d-flex-wrap justify-content-around m-auto text-center p-2'>
						{cards}
					</Row>
            </Container>
            {<ModalGuide  show={modalShow} onClose={onClose} data={tempData}/> }
		</div>
	);
}

export default Guide;
