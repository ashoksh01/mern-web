import React from "react";

function About() {
  return (
    <div>
      <section id="about"></section>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src="assets/profile.png" alt="About" className="w-75 mt-5" />
          </div>
          <div className="col-md-6">
            <h3 className="fs-5 mb-0">About Us</h3>
            <h1 className="display-6 mb-2 ">
              Who <b>We</b> 
              <b> Are </b>
            </h1>
            <hr className="w-50" />
            <p className="lead mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              sequi accusamus qui consequatur itaque blanditiis. Natus tempore
              sunt iusto asperiores exercitationem error, veniam quam aliquid
              nihil ipsam, itaque illo! Placeat ab fuga, quisquam porro beatae
              expedita magnam adipisci modi ea fugiat minus reprehenderit cumque
              pariatur numquam optio aliquid non iste? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Exercitationem delectus, quos
              repudiandae sed sapiente repellat expedita recusandae
              necessitatibus iure assumenda atque nesciunt similique, optio at
              aliquam perspiciatis quod tempora ad aut quis laboriosam
              repellendus temporibus vitae. Ipsam voluptatem itaque ab delectus
              unde nisi, labore magnam perferendis eligendi ipsum aperiam
              aliquid veritatis natus, animi assumenda repudiandae vero
              voluptatibus qui reiciendis quisquam placeat maiores tempora
              repellendus modi. Beatae minus odio quaerat. Minus, distinctio?
              Beatae vitae exercitationem dolores?
            </p>
            <button className="btn btn-primary rounded-pill px-4 py-2">Get Started</button>
            <button className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2">Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
