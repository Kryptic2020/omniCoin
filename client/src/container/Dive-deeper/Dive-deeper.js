import React from 'react'
import CustomModal from '../CustomModal/CustomModal'
import { Heading, Li, DiveBox } from '../StyledComponents';
import {videosContent, moviesContent,booksContent,podcastsContent,humorContent} from '../../utils/diveDeepData'

export default function DiveDeeper() {
  
  return (
    <div id="divedeeper">
      <Heading className="m-5 text-center">Dive Deeper</Heading>
      <DiveBox className="d-flex text-center flex-wrap m-auto rounded justify-content-around col-12 col-sm-12">
        <Li className="col-4 col-sm-2"><CustomModal content={videosContent} itemName='Videos' /></Li>
        <Li className="col-4 col-sm-2"><CustomModal content={moviesContent} itemName='Movies' /></Li>
        <Li className="col-4 col-sm-2"><CustomModal content={booksContent} itemName='Books'/></Li>
        <Li className="col-4 col-sm-2"><CustomModal content={podcastsContent} itemName='Podcast' /></Li>
        <Li className="col-4 col-sm-2"><CustomModal content={humorContent} itemName='Humor'/></Li>
      </DiveBox>
    </div>
  )
}
