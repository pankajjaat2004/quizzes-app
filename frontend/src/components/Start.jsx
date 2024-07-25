import React from 'react'

const Start = ({ startQuizSelector, showStart }) => {
  return (
    <section className='text-white text-center bg-dark' style={{ display: `${showStart ? 'block' : 'none'}` }}>
            <div className="container">
                <div className="row vh-100 align-items-center justify-content-center">
                    <div className="col-lg-8">
                        <h1 className='fw-bold mb-4'>Welcome<br/>to<br/>Quiz Application</h1>
                        <button onClick={startQuizSelector} className="btn px-5 py-3 bg-success text-white fw-bold"> Enter </button>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Start
