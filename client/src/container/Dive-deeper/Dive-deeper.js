import React from 'react'
import ModalDiveDeeper from '../CustomModals/ModalDiveDeeper'
import { Heading, Li, DiveBox } from '../StyledComponents';
import {videosContent, moviesContent,booksContent,podcastsContent,humorContent} from '../../utils/diveDeepData'

export default function DiveDeeper() {
  
  return (
    <div id="divedeeper">
      <Heading className="m-5 text-center">Dive Deeper</Heading>
      <DiveBox className="d-flex text-center flex-wrap m-auto rounded justify-content-around col-12 col-sm-12 box-shadow px-2">
        <Li className="col-3 col-sm-2 box-shadow m-2 rounded"><ModalDiveDeeper content={videosContent} itemName='Videos' /></Li>
        <Li className="col-3 col-sm-2 box-shadow m-2 rounded"><ModalDiveDeeper content={moviesContent} itemName='Movies' /></Li>
        <Li className="col-3 col-sm-2 box-shadow m-2 rounded"><ModalDiveDeeper content={booksContent} itemName='Books'/></Li>
        <Li className="col-4 col-sm-2 box-shadow m-2 rounded"><ModalDiveDeeper content={podcastsContent} itemName='Podcast' /></Li>
        <Li className="col-3 col-sm-2 box-shadow m-2 rounded"><ModalDiveDeeper content={humorContent} itemName='Humor'/></Li>
      </DiveBox>
    </div>
  )
}
