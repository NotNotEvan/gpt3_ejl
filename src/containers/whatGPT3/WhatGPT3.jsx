import React from 'react';
import './whatGPT3.css';
import { Feature } from '../../components';

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title='What is GPT-3' text='GPT-3 stands for "Generative Pre-trained Transformer 3." It is an advanced language model developed by OpenAI. GPT-3 is designed to generate human-like text based on the input it receives. It is part of a family of models known as Transformers, which have revolutionized natural language processing tasks.'/>
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title="Chatbots" text="GPT-3's chatbot is a powerful AI language model that generates human-like text responses, providing natural and contextually relevant conversations."/>
        <Feature title="Knowledgebase" text="GPT-3 doesn't have an explicit knowledge base. It relies on pre-training from a vast amount of text data to generate responses and doesn't store information from previous interactions."/>
        <Feature title="Education" text="GPT-3 is not inherently educated but is trained on a diverse range of text data, making it capable of generating information on various educational topics."/>
      </div>
    </div>
  )
}

export default WhatGPT3