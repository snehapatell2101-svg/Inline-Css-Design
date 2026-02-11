import React from 'react'

const Card1 = () => {
  return (
    <div>
      <div className="card border-dark" style={{ width: " 19rem" }}>
        <div className="card-body">
          <h5 className="card-title text-center" style={{ fontSize: "20px", color: "blue" }}>UI/UX</h5>

          <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, consectetur!</p>
          <a href="#" className="card-link">Cancle</a>
          <a href="#" className="card-link">Submit</a>
        </div>
      </div>
    </div>
  )
}

export default Card1
