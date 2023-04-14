import React from 'react'
import "../styles/CodeEditorBlock.css"
import {BsArrowLeftRight, BsChatSquareText, BsChevronRight, BsClipboardData, BsPencil} from "react-icons/bs"
import {FiChevronRight, FiCopy} from "react-icons/fi"
import openAi from "../assets/openAI.png"
import { useState } from 'react'

const CodeEditorBlock = () => {

  const [responseText, setResponseText] = useState([
    "The code above is a function definition. ",
    "It defines a new function called `HelloWorld` that takes a single argument called `text`",
    "The body of the function is a single line of code that prints out the value of 'text'if it is defined, or `Hello World` if it is not defined.",
  ])

  return (
    <>
      <div className='code-editor-block-container'>
        <div className='editor-side'>
          <div className='header'>
            <BsChatSquareText fontSize={28} />
            <div className='header-text'>Explain Code</div>
          </div>
          <div className='sub-header'>Explain some code based on the syntax provided</div>
          <div className='text-bold'>Paste your code below:</div>
          <div className='code-editor'>
            <span className='text-blue'>function</span> <span className='text-red'>HelloWorld</span>(text) {"{"} <br />
            &emsp; echo text || <span className='text-green'>"Hello World"</span>; <br />
            {"}"}
          </div>
          <button className='enhance-btn'>
            <FiCopy />
            Enhance with AI
          </button>
        </div>
        <div className='output-side'>
          <div className='header'>
            <div className='point'>
              <FiChevronRight fontSize={20} fontWeight={800} />
            </div>
            <h4>What does this code do?</h4>
          </div>
          <div className='subheader'>The following code does:</div>

          {responseText.map((resp, index) => (
            <div className='each-resp' style={{ borderBottom: index !== (responseText.length - 1) ? '1px solid #e8e8e8' : 'none'}}>
              <div className='resp-point'>
                <FiChevronRight fontSize={18} />
              </div>
              <div className='resp-text'>
                {resp}
              </div>
            </div>
          ))}
          
          <button className='copy-btn'>
            <FiCopy />
            <div>Copy Output</div>
          </button>
        </div>
      </div>
      <div className='options-container'>
        <div>
          <button className=''>
            <BsChatSquareText />
            <div>Explain Code</div>
          </button>
          <button className=''>
            <div>(.*)</div>
            <div>Regex</div>
          </button>
          <button className=''>
            <BsArrowLeftRight />
            <div>Convert Code</div>
          </button>
        </div>
        <div>
          <button className=''>
            <BsPencil />
            <div>Fix Grammar</div>
          </button>
          <button className=''>
            <BsClipboardData />
            <div>Todo</div>
          </button>
        </div>
        <div>
          <img src={openAi} alt="openAI"  style={{height: "40px"}} />
          <div>Powered By</div>
        </div>
      </div>
    </>
  )
}

export default CodeEditorBlock