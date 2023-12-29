import React from 'react'
import "./FSD.css"
import { Link } from 'react-router-dom';


function FSD() {
  const data = [
    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers.webp",
      head: "Top Ways to Assess Soft Skills in Full Stack Developers in 2024 ",
      text: "When you’re hiring a full-stack developer, what are the most important things you look for?",
      next: "Read More » ",
      date: "15 May 2023",
      status: "No comment",
    },
    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/10/Featured-Image-top-product-based-companies-for-full-stack-developers.webp",
      head: "Top Ways to Assess Soft Skills in Full Stack Developers in 2024 ",
      text: "When you’re hiring a full-stack developer, what are the most important things you look for?",
      next: "Read More » ",
      date: "15 May 2023",
      status: "No comment",
    },
    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer-.webp",
      head: "Top Ways to Assess Soft Skills in Full Stack Developers in 2024 ",
      text: "When you’re hiring a full-stack developer, what are the most important things you look for?",
      next: "Read More » ",
      date: "15 May 2023",
      status: "No comment",
    },
  ];
  return (
    <div className="container fsd-container">
      <div className="row row-box">
        {data.map((item, i) => {
          return (
            <div key={i} className="col-lg-4 col-md-6 col-sm-6 col-box mb-4 d-flex justify-content-start">
              <div className="card">
                <img
                  src={item.img}
                  className="card-img-top  fsd-img"
                  alt="..."
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-start" style={{ wordWrap: 'break-word' }}>{item.head}</h5>
                  <p className="card-text text-start text-secondary" style={{ wordWrap: 'break-word' }}>{item.text}</p>
                  <Link className="text-start fw-bold text-decoration-none text-success">
                    {item.next}
                  </Link>
                </div>
                <hr className='m-0 p-0' />
                <div className="container-sm px-0 py-3 px-3">
                  <div className="d-flex  align-items-center fds">
                    <p className="card-title text-secondary m-0">{item.date}</p>
                    <span className="px-2"> </span>
                    <p className="d-flex justify-content-between text-secondary m-0 align-items-center">
                      <i class="bi bi-dot d-flex justify-content-center align-items-center p-0 text-secondary fw-bold"></i>
                      {item.status}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default FSD