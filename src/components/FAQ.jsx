import { useState } from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineMinus} from 'react-icons/ai'

const FAQ = ({question, answer}) => {

const[isAnswerShowing, setisAnswerShowing] = useState(false);
    
  return (
           <article  className="faq" onClick={()=> setisAnswerShowing(prev=> !prev)}>
                 <div>
                      <h4>
                            {question}
                                <button className="faq__icon">
                                 {
                                    isAnswerShowing ? <AiOutlineMinus/> : <AiOutlinePlus/>
                                      }
                                </button>
                      </h4>
                </div>
             {isAnswerShowing&& <p>{answer}</p>}
    </article>
  )
}

export default FAQ