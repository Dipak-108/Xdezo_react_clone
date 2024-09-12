
import '../assets/css/aboutus.css'; 
import fbIcon from '../assets/images/home page images/fb-icon.png';
import instaIcon from '../assets/images/home page images/insta-icon.png';
import dineshImg from '../assets/images/home page images/Dinesh_11.jpg';
import parenthesisImg from '../assets/images/home page images/parenthesis.png';

const AboutUs = () => {
  return (
    <div>
     
      {/* About Us Section */}
      <section className="top">
        <div className="about_us">
          <h1>About Us</h1>
        </div>
        <div className="about_company">
          <div className="number1_about_company">
            <div className="about_company_left">
              <h1>#1 IT Training Company In Pokhara Nepal</h1>
            </div>
            <div className="about_company_right">
              <p className="para1_acr">
                At XDezo Academy, we believe everyone should have an equal
                opportunity to create progress through technology and develop the
                skills of tomorrow. We want to inspire and multiply the creative
                exploration that takes the next step in their creative journey.
              </p>

              <p className="para2_acr">
                Learn, Apply & Innovate. We help individuals, organizations, and
                companies to go further by placing learning at the center of their
                strategies.
              </p>
            </div>
          </div>

          <div className="ceo_image_quote">
            <div className="ceo_image">
              <div className="dinesh_img_div">
                <img src={dineshImg} alt="Dinesh Thapa" />
              </div>
            </div>
            <div className="ceo_quote">
              <div className="left_open_parenthesis">
                <img src={parenthesisImg} alt="Parenthesis" />
              </div>
              <p className="quote">
                “At XDezo Academy, the happiness of our students is our utmost
                priority.”
              </p>
              <p className="ceo_name">Dinesh Thapa — CEO</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Description Section */}
      <section className="company_description_section">
        <div className="company_description">
          <h2>Leading IT Training Company in Pokhara, Nepal</h2>
          <div className="company_description_paragraphs">
            <p>
              XDezo Academy is a renowned IT training company; dedicated to
              providing exceptional training and courses for individuals aiming to
              excel in their careers. With a commitment to excellence, we offer the
              best and highest-quality IT training programs that equip students with
              the skills and knowledge necessary to thrive in the dynamic IT
              industry.
            </p>
            <p>
              Our expert instructors and cutting-edge curriculum ensure that our
              students receive comprehensive and up-to-date training, enabling them
              to stay ahead of the curve. At XDezo Academy, we are passionate about
              empowering individuals to achieve their career goals and unlock their
              full potential.
            </p>
          </div>
        </div>
        <hr />

        {/* Core Values Section */}
        <div className="core_values">
          <h2>Our Core Values</h2>
          <p>
            We have a culture that is modern, relevant, and inspires students to
            have a brighter future. We are determined in our approach to learning,
            are creative in our thinking, and bold in our ambitions.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="form_section">
        <form>
          <label htmlFor="fname">
            Full Name: <span className="span_red">*</span>
          </label>
          <input type="text" required />

          <label htmlFor="email">
            Email: <span className="span_red">*</span>
          </label>
          <input type="email" required />

          <label htmlFor="phone">
            Phone: <span className="span_red">*</span>
          </label>
          <input type="tel" required />

          <label>
            What course are you interested in taking?<span className="span_red">*</span>
          </label>
          <textarea required></textarea>
          <input type="submit" value="Submit" />
        </form>
      </section>

      {/* Footer Section */}
      <footer>
        <section className="footer">
          <div className="footer_container_div">
            <div className="left_footer">
              <h1>Xdezo Academy</h1>
              <p>Pokhara -07, Ratna Chowk, Kaski, 33700</p>

              <h1>Contact</h1>
              <p>
                <a title="phone" href="tel:9824153358">+977 9824153358</a>
                <br />
                <a title="email" href="mailto:academy@xdezo.com">academy@xdezo.com</a>
              </p>
            </div>
            <div className="right_footer">
              <h1>Our Location</h1>
              <p>Pokhara -07, Ratna Chowk, Kaski, 33700</p>
              <p>
                <a title="phone" href="tel:9824153358">+977 9824153358</a>
                <br />
                <a title="phone" href="tel:9745453664">+977 9745453664</a>
              </p>
            </div>
          </div>

          <div className="footer_social_media_div">
            <div className="footer_social_media_icons">
              <span className="footer_fb">
                <a href="">
                  <img src={fbIcon} alt="Facebook Icon" />
                </a>
              </span>
              <span className="footer_insta">
                <a href="">
                  <img src={instaIcon} alt="Instagram Icon" />
                </a>
              </span>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default AboutUs;
