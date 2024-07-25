// src/components/QuizSelector.jsx
import React, { useState } from 'react';

const QuizSelector = ({ startQuiz,setQuizJson,showQuizSelector }) => {
  return (

    <section className="bg-dark text-white" style={{ display: `${showQuizSelector ? 'block' : 'none'}` }}>
            <div className="container">
                <div className="row vh-100 align-items-center justify-content-center">
                    <div className="col-lg-8">
                        <div className="card p-4" style={{ background: '#3d3d3d', borderColor: '#646464' }}>
                            <div className="d-flex justify-content-between gap-md-3">
                                <h5 className='mb-2 fs-normal lh-base text-light'>Select Type of Quiz You Want To Play.</h5>
                            </div>
                            <div>

                                {
                                    <button className={`option w-100 text-start btn text-white py-2 px-3 mt-3 rounded btn-dark `}
                                        onClick={(event) => setQuizJson('DSA',event)
                                        }
                                    >
                                        Data Structure Quiz
                                    </button>
                                }

                                {/* {
                                    <button className={`option w-100 text-start btn text-white py-2 px-3 mt-3 rounded btn-dark `}
                                        onClick={(event) => setQuizJson('ComputerFundamental',event)
                                        }
                                    >
                                        Computer Fundamental Quiz
                                    </button>
                                }

                                {

                                    <button className={`option w-100 text-start btn text-white py-2 px-3 mt-3 rounded btn-dark `}
                                        onClick={(event) => setQuizJson('OOPs',event)
                                        }
                                    >
                                        Object Oriented Programming Quiz
                                    </button>

                                }

                                {

                                    <button className={`option w-100 text-start btn text-white py-2 px-3 mt-3 rounded btn-dark `}
                                    onClick={(event) => setQuizJson('ReactJS',event)}
                                    >
                                        React JS Quiz
                                    </button>

                                }

                                {

                                    <button className={`option w-100 text-start btn text-white py-2 px-3 mt-3 rounded btn-dark `}
                                        onClick={(event) => setQuizJson('Sports',event)}
                                    >
                                        Sports Quiz
                                    </button>

                                }

                                {
                                        
                                    <button className={`option w-100 text-start btn text-white py-2 px-3 mt-3 rounded btn-dark`}
                                        onClick={(event) => setQuizJson('currentAffairs',event)}
                                    >
                                        Current Affairs Quiz
                                    </button>
                                } */}
                            </div>
                            {
                                    // <button className='btn py-2 w-100 mt-3 bg-primary text-light fw-bold' onClick={startQuiz}>Start Quiz</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>

    // <div>
    //   <h1>Select Quiz Type</h1>
    //   <button onClick={() => onQuizSelect('math')}>Math Quiz</button>
    //   <button onClick={() => onQuizSelect('science')}>Science Quiz</button>
    // </div>

  )
}
// {
//     quizzes.map((quiz, index) => (
//         <button
//             key={index}
//             className={`option w-100 text-start btn text-white py-2 px-3 mt-3 rounded btn-dark`}
//             onClick={(event) => setQuizJson(quiz, event)}
//         >
//             {quiz} Quiz
//         </button>
//     ))
// }
export default QuizSelector;
