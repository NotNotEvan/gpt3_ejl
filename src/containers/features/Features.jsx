import React from 'react';
import { Feature } from '../../components';
import './features.css';


const featuresData = [
  {
    title: 'Generative Text Output',
    text: 'Creates human-like text based on the input it receives, allowing for natural language interaction with users.'
  },
  {
    title: 'Context Awareness',
    text: 'Understands and responds based on the context of the conversation, leading to more coherent and relevant dialogue.'
  },
  {
    title: 'Fine-tuning Capabilities',
    text: 'Can be customized for specific tasks or industries, making it versatile for different applications.'
  },
  {
    title: 'Large Scale Data Training',
    text: 'Utilizes a massive dataset to learn language patterns, enabling it to generate more accurate and diverse responses.'
  }
];

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'> 
      <div className='gpt3__features-heading'>
         <h1 className='gradient__text'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
         <p>Request Early Access to Get Started</p>
      </div>
      <div className='gpt3__features-container'> 
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index}/> 
        ))}
      </div>
    </div>
  )
}

export default Features