
import GraphicsDesignImg from '../../assets/images/courses_card/Complete-Graphics-Design-Masterclass-Course-in-Pokhara-XDezo-Academy.png'
import UiImg from '../../assets/images/courses_card/Complete-UI_UX-Masterclass-Course-in-Pokhara-XDezo-Academy.png'
import FullStackPHPImg from '../../assets/images/courses_card/Full-Stack-Web-Development-with-PHP-_-Laravel-Course-XDezo-Academy.png'
import FullStackdjangoImg from '../../assets/images/courses_card/Full-Stack-Web-Development-with-Python-_-Django-Course-XDezo-Academy.png'
import digitalMarketingImg from '../../assets/images/courses_card/Complete-Digital-Marketing-Masterclass-Course-XDezo-Academy.png'
import SEOImg from '../../assets/images/courses_card/Complete-SEO-Masterclass-Course-XDezo-Academy.png'
import FrontEndReactImg from '../../assets/images/courses_card/FrontEnd-Development-with-React-JS-Course-XDezo-Academy.png'
import mobileAppImg from '../../assets/images/courses_card/Mobile-App-Development-with-Flutter-Course-XDezo-Academy.png'

const CoursesAndTraining = () => {
    const courses = [
        {
          link: "../../courses_pages/design_page/graphics_design.html",
          imgSrc: GraphicsDesignImg,
          title: "Complete Graphics Design Masterclass Course",
          description: "Hands-on experience with the latest Graphics design tools and technology.",
        },
        {
          link: "../../courses_pages/design_page/ui_ux.html",
          imgSrc: UiImg,
          title: "Complete UI/UX Masterclass Course",
          description: "Hands-on experience with the latest designing tools and technology.",
        },
        {
          link: "../../courses_pages/development_pages/laravel.html",
          imgSrc: FullStackPHPImg,
          title: "Full Stack Web Development with PHP Laravel Course",
          description: "Hands-on experience with the latest programming languages and technology.",
        },
        {
          link: "../../courses_pages/development_pages/django.html",
          imgSrc: FullStackdjangoImg,
          title: "Full Stack Web Development with Python Django Course",
          description: "Giving wings to the artists who'd like to take it up as a career or just a hobby.",
        },
        {
          link: "../../courses_pages/marketing_pages/digital_marketing.html",
          imgSrc: digitalMarketingImg,
          title: "Complete Digital Marketing Masterclass Course",
          description: "Hands-on experience with the latest marketing ideas and technology.",
        },
        {
          link: "../../courses_pages/marketing_pages/seo.html",
          imgSrc: SEOImg,
          title: "Complete SEO Masterclass Course",
          description: "Hands-on experience with the latest SEO Techniques and technology.",
        },
        {
          link : "../../courses_pages/development_pages/react.html",
          imgSrc: FrontEndReactImg,
          title: "Front End Development with ReactJS Course",
          description: "The study of ancient and modern languages, philosophy, history, and more.",
        },
        {
          link: "../../courses_pages/development_pages/flutter.html",
          imgSrc:mobileAppImg,
          title: "Mobile App Development with Flutter Course",
          description: "The study of ancient and modern languages, philosophy, history, and more.",
        }
      ];
      
  
    return (
      <section className="courses-and-training-section">
        <div className="courses-and-training-div">
          <h1>Our Trainings and Courses</h1>
          <div className="courses-and-training-card-div">
            {courses.map((course, index) => (
              <a href={course.link} key={index}>
                <div className={`card card${index + 1}`}>
                  <img src={course.imgSrc} alt="to be updated" />
                  <div className="card_description">
                    <h2>{course.title}</h2>
                    <p>{course.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  };

  export default CoursesAndTraining