import React from 'react'
import { Heading, Text } from '../StyledComponents';

const About = () => {
  return (
      <div id='about' className='mt-5 about box-shadow px-sm-5 px-3 py-sm-1 py-1'>
						<Heading>
							About
						</Heading>
						<Text data-aos='fade-up' className='my-3'>
							If you're here then you've probably hit the point where cryptocurrency and the talk surrounding it has pushed you to the point where you simply can't ignore it anymore. Don't worry, we've all been there and know how frustrating it can be to feel completely out of the loop in relation to a technology that it seems everyone and their mother won't stop talking about.
						</Text>
            <Text className='my-3'>
              The solution to this global gossip? omniCoin. We set out with a basic idea in mind: create a repository of knowledge for beginners and novices in the crypto space. Want to learn what a "cold wallet" is? We got your back. Want to have a better understanding of how cryptocurrencies prices fluctuate in a given period of time? Not only do we have your back, we also got you a nice little graph that makes understanding these things much easier. 
            </Text>
            <Text id='stocks' className='my-3 mb-5'>
              Our name, omniCoin, literally translates to everyone's coin and that's how we want to operate moving forward. No one should be left behind as tech advances and we will do our best to make sure the Australian people remain in the know about this rapidly evolving industry. 
            </Text>
					</div>
  )
}
export default About;