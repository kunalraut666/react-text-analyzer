import React from 'react';
import aboutImg1 from "../assets/img/about-img1.png";
import aboutImg2 from "../assets/img/about-img2.png";
import aboutImg3 from "../assets/img/about-img3.png";
import aboutVideo from "../assets/video/about-video.mp4";

function About(props) {
console.log(props.mode);
  const aboutStyle = {
            backgroundColor: props.mode === 'dark' ? 'rgb(32 37 41)' : props.mode === 'green' ? 'green' : props.mode === 'blue' ? 'blue': props.mode === 'red' ? 'red' : 'rgb(248 249 250)',
            minHeight: "85vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
  };

  const cardStyle = {
    backgroundColor: props.mode === 'dark' ? 'rgb(32 37 41)' : props.mode === 'green' ? 'green' : props.mode === 'blue' ? 'blue': props.mode === 'red' ? 'red' : 'rgb(248 249 250)',
    color: (props.mode === 'dark' || props.mode === 'green' || props.mode === 'blue' || props.mode === 'red') ? 'white' : 'black',
    border: '1px solid'
  }

  return (
    <div style={aboutStyle}>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card h-100 zoom-effect" style={cardStyle}>
              <img src={aboutImg1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Landing Page</h5>
                <p className="card-text">
                  I've built a text manipulation website that offers easy-to-use
                  tools for converting text cases, removing extra spaces, and
                  analyzing text composition. With features like word count,
                  sentence count, and word density visualization, users can
                  quickly understand and optimize their writing.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 zoom-effect" style={cardStyle}>
              <img src={aboutImg2} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Text Summary</h5>
                <p className="card-text">
                  This represents a sample text summary, providing insights into
                  the composition of a given text. For instance, it indicates
                  that the text contains 91 words and 574 characters. Moreover,
                  there are 78 lowercase words and 4 sentences. It also
                  identifies the presence of 90 spaces and 9 punctuation marks.
                  Additionally, it notes 14 uppercase letters and estimates the
                  average time to read the text as approximately 21.84 minutes.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 zoom-effect" style={cardStyle}>
              <img src={aboutImg3} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Word Density</h5>
                <p className="card-text">
                  This is the word density analysis of a text, which shows the
                  frequency of each word in the text as a percentage of the
                  total words. For instance, the word "the" appears with a
                  density of 6.59%, indicating it's the most frequent word in
                  the text. Conversely, words like "lorem" and "ipsum" both have
                  a density of 4.40%, suggesting they occur less frequently.
                  This analysis provides valuable insights into the distribution
                  of words within the text, highlighting key terms and their
                  relative prevalence.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 zoom-effect" style={cardStyle}>
              <video autoPlay loop muted className="card-img-top">
                <source src={aboutVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="card-body">
                <h5 className="card-title">Themes</h5>
                <p className="card-text">
                  I've implemented a feature in the website that offers users
                  the ability to switch between five distinct themes: red,
                  green, blue, dark, and light. This functionality allows users
                  to customize their browsing experience according to their
                  preferences. Whether they prefer a vibrant and colorful
                  interface or a sleek and minimalistic design, they can easily
                  toggle between these themes with just a click. This feature
                  enhances user engagement and satisfaction by providing them
                  with flexibility and control over the visual presentation of
                  the website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
