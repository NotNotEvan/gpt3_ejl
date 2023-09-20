import React from 'react';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports'
import './blog.css';

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>
        A lot is happening, 
        We are blogging about it.</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
          <Article imgUrl={blog01} date="Sep 26, 2021" title="From Zero to Chatbot: The Evolution of GPT Technology"/>
        </div>
        <div className='gpt3__blog-container_groupB'>
          <Article imgUrl={blog02} date="Aug 30, 2021" title="Chat GPT: Bridging the Gap Between AI and Human Conversations"/>
          <Article imgUrl={blog03} date="Aug 14, 2021" title="Decoding Chat GPT: The Future of AI-Powered Communication"/>
          <Article imgUrl={blog04} date="Jul 19, 2021" title="Behind the Scenes: How Chat GPT Transforms Text into Talk"/>
          <Article imgUrl={blog05} date="Jul 02, 2021" title="The Rise of Chat GPT: Revolutionizing Digital Interactions"/>
        </div>
      </div>
    </div>
  )
}

export default Blog