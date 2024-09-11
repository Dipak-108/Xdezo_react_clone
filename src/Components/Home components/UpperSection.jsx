import image1 from '../../assets/images/home page images/xdezo-landing-page.png'
const UpperSection = () => {
    return (
      <section className="upper-section">
        <div className="upper-container-div">
          <div className="upper-left-div">
            <p className="first-line">Ready to take your career to the next level?</p>
            <p className="second-line">Our comprehensive courses and expert instructors will give you the tools you need to succeed in the competitive world of IT.</p>
            <button>Send Enquiry Now</button>
          </div>
          <div className="upper-right-div">
            <div className="image-container">
              <img src={ image1} alt="a girl showcasing different tech stacks that are taught in Xdezo" />
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default UpperSection