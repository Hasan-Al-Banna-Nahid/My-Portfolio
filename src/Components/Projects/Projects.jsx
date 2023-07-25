/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { FaEye, FaGithub } from "react-icons/fa";
import AnimatedCursor from "react-animated-cursor";

const Projects = () => {
  return (
    <div>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "var(--cursor-color)",
        }}
        outerStyle={{
          border: "3px solid var(--cursor-color)",
        }}
      />
      <Header />
      <h2 className="text-3xl font-bold text-center my-6">Projects</h2>
      <div className="grid md:grid-cols-3">
        {/* Card 1 */}
        <div className="card w-96 bg-base-300 shadow-xl mx-auto my-6">
          <Carousel className="w-[400px]" width={380} dynamicHeight={380}>
            <div>
              <img src="/dev1.png" />
            </div>
            <div>
              <img src="/dev2.png" />
            </div>
            <div>
              <img src="/dev3.png" />
            </div>
          </Carousel>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-[22px] text-red-800">
              Developer Career
            </h2>
            <li className="font-bold text-slate-800">
              This Site Is Like a Job Portal.
            </li>{" "}
            <br />
            <br />
            <li className="font-bold text-slate-800">
              In Applied Page Which Job Is Clicked To Apply Those Job Show Them
              And It Stored In LocalStorage.
            </li>
            <br />
            <li className="font-bold text-slate-800">
              In Statistics Page May Previous Assignment Marks Is Shown In
              Chart.
            </li>
            <br />
            <li className="font-bold text-slate-800">
              In this Blog Page There Are some Question For React JS And Answer
              Those Question.
            </li>
            <br />
            <li className="font-bold text-slate-800">
              In Featured Job Details Button Clicked It will Go To Another Route
              There Are Companies And Designation And Then There Is Also A
              Details Button Which Show Job Details In the Another Page.
            </li>
            <div className="card-actions">
              <button className="btn btn-outline btn-primary">
                <FaEye className="text-[18px] mx-2" />
                <Link to="https://developercareer.netlify.app/" target="_blank">
                  Live Site
                </Link>
              </button>
              <button className="btn btn-outline btn-info">
                <FaGithub className="text-[18px] mx-2" />{" "}
                <Link
                  to="https://github.com/Hasan-Al-Banna-Nahid/Developer-Career-React"
                  target="_blank"
                >
                  Source Code
                </Link>
              </button>
            </div>
          </div>
        </div>
        {/* Card 1 */}

        {/* Card 2 */}
        <div className="card w-96 bg-base-300 shadow-xl mx-auto my-6">
          <Carousel className="w-[400px]" width={380} dynamicHeight={380}>
            <div>
              <img src="/toy1.png" />
            </div>
            <div>
              <img src="/toy2.png" />
            </div>
            <div>
              <img src="/toy3.png" />
            </div>
          </Carousel>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-[22px] text-red-800">Toy Man</h2>
            <li className="font-bold text-slate-800">
              This Is a Toy Selling Site
            </li>{" "}
            <br />
            <br />
            <li className="font-bold text-slate-800">
              there is a All Toy Section in Header Which Show All The Toys That
              A user added There is also a details button which navigate to
              other Route and Show Full Details of A toy
            </li>
            <br />
            <li className="font-bold text-slate-800">
              In my Toy Section in header also show user added toys and a delete
              and edit button which is managed by backed crud operation
            </li>
            <br />
            <li className="font-bold text-slate-800">
              in header there is also a add a toy section where user can add a
              toy and it will save into the database
            </li>
            <br />
            <li className="font-bold text-slate-800">
              at last there is user profile picture and show the username if
              available this is conditional if user logged in then only it will
              the details for profile picture,username my toys,add a toys
              otherwise it show a login button which redirect to the login page
            </li>{" "}
            <br />
            <li className="font-bold text-slate-800">
              in login page there is two option if user new to this site then
              he/she have to signUp otherwise if any have account they can login
              after login user can see logOut icon which for signOut
            </li>
            <div className="card-actions">
              <button className="btn btn-outline btn-primary">
                <FaEye className="text-[18px] mx-2" />{" "}
                <Link to="https://toyman.netlify.app/" target="_blank">
                  Live Site
                </Link>
              </button>
              <button className="btn btn-outline btn-primary">
                <FaEye className="text-[18px] mx-2" />{" "}
                <Link to="https://toyman.vercel.app/" target="_blank">
                  Live Site(Server)
                </Link>
              </button>
              <button className="btn btn-outline btn-info">
                <FaGithub className="text-[18px] mx-2" />{" "}
                <Link
                  to="https://github.com/Hasan-Al-Banna-Nahid/Toy-Man-React-Firebase-Express-Mongo"
                  target="_blank"
                >
                  Source Code Client Side
                </Link>
              </button>
              <button className="btn btn-outline btn-info">
                <FaGithub className="text-[18px] mx-2" />{" "}
                <Link
                  to="https://github.com/Hasan-Al-Banna-Nahid/Toy-Man-ServerSide"
                  target="_blank"
                >
                  Source Code Server Side
                </Link>
              </button>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        {/* Card 3 */}
        <div className="card w-96 bg-base-300 shadow-xl mx-auto my-6">
          <Carousel className="w-[400px]" width={380} dynamicHeight={380}>
            <div>
              <img src="/v1.png" />
            </div>
            <div>
              <img src="/v2.png" />
            </div>
            <div>
              <img src="/v3.png" />
            </div>
          </Carousel>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-[22px] text-red-800">Vedhak</h2>
            <li className="font-bold text-slate-800">
              This is Summer camp activities Site
            </li>{" "}
            <br />
            <li className="font-bold text-slate-800">
              In Home Page There is a carousel Banner And a Popular Class &
              Popular Instructors & Our Activities With A footer section
            </li>
            <br />
            <li className="font-bold text-slate-800">
              In Classes Tab in navbar Which is show the class which is added by
              an instructor
            </li>
            <br />
            <li className="font-bold text-slate-800">
              In instructor Tab is also show the instructor info based on
              database
            </li>
            <br />
            <li className="font-bold text-slate-800">
              Most Important part is dashboard where is 3 dashboard one is for
              student one for instructor and one for admin
            </li>
            <br />
            <li className="font-bold text-slate-800">
              In student dashboard student choose a class from classes tab and
              show the classes in myclass tab where student can pay for the
              class and paid class is show in my enrolled class
            </li>{" "}
            <br />
            <li className="font-bold text-slate-800">
              In Instructor dashboard Instructor can add a class and update the
              class and show relavent information
            </li>{" "}
            <br />
            <li className="font-bold text-slate-800">
              In Admin Dashboard Admin dashboard admin can make instructor and
              update the classes ststus and delete them
            </li>{" "}
            <li className="font-bold text-slate-800">
              <span>
                Admin Pass : Iamnahid591998@outlook.com / 123456Hasan$$
              </span>
            </li>{" "}
            <div className="card-actions">
              <button className="btn btn-outline btn-primary">
                <FaEye className="text-[18px] mx-2" />{" "}
                <Link to="https://summer-camp-f4fcb.web.app/" target="_blank">
                  Live Site
                </Link>
              </button>

              <button className="btn btn-outline btn-info">
                <FaGithub className="text-[18px] mx-2" />{" "}
                <Link
                  to="https://github.com/Hasan-Al-Banna-Nahid/Summer-Camp"
                  target="_blank"
                >
                  Source Code Client Side
                </Link>
              </button>
              <button className="btn btn-outline btn-info">
                <FaGithub className="text-[18px] mx-2" />{" "}
                <Link
                  to="https://github.com/Hasan-Al-Banna-Nahid/Summer-Camp-Server"
                  target="_blank"
                >
                  Source Code Server Side
                </Link>
              </button>
            </div>
          </div>
        </div>
        {/* Card 3 */}

        {/* Card 4 */}
        <div className="card w-96 bg-base-300 shadow-xl mx-auto my-6">
          <Carousel className="w-[400px]" width={380} dynamicHeight={380}>
            <div>
              <img src="/emphires/1 (1).png" />
            </div>
            <div>
              <img src="/emphires/1 (2).png" />
            </div>
            <div>
              <img src="/emphires/1 (3).png" />
            </div>
            <div>
              <img src="/emphires/1 (4).png" />
            </div>
            <div>
              <img src="/emphires/1 (5).png" />
            </div>
            <div>
              <img src="/emphires/1 (6).png" />
            </div>
            <div>
              <img src="/emphires/1 (7).png" />
            </div>
          </Carousel>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-[22px] text-red-800">Emphires</h2>
            <li className="font-bold text-slate-800">
              This is a Job Portal site
            </li>{" "}
            <br />
            <li className="font-bold text-slate-800">
              There Is A Landing page And a candidates search Functionality
            </li>{" "}
            <div className="card-actions">
              <button className="btn btn-outline btn-primary">
                <FaEye className="text-[18px] mx-2" />{" "}
                <Link to="https://emphires-1fd59.web.app/" target="_blank">
                  Live Site
                </Link>
              </button>

              <button className="btn btn-outline btn-info">
                <FaGithub className="text-[18px] mx-2" />{" "}
                <Link
                  to="https://github.com/Hasan-Al-Banna-Nahid/Emphires"
                  target="_blank"
                >
                  Source Code Client Side
                </Link>
              </button>
            </div>
          </div>
        </div>
        {/* Card 4 */}

        {/* Card 5 */}
        <div className="card w-96 bg-base-300 shadow-xl mx-auto my-6">
          <Carousel className="w-[400px]" width={380} dynamicHeight={380}>
            <div>
              <img src="/Recruitment/1 (1).png" />
            </div>
            <div>
              <img src="/Recruitment/1 (2).png" />
            </div>
            <div>
              <img src="/Recruitment/1 (3).png" />
            </div>
            <div>
              <img src="/Recruitment/1 (4).png" />
            </div>
          </Carousel>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-[22px] text-red-800">
              Recruitment Agency
            </h2>
            <li className="font-bold text-slate-800">
              This is a Job Portal site
            </li>{" "}
            <br />
            <li className="font-bold text-slate-800">
              There Is A Landing page And a candidates search Functionality
            </li>{" "}
            <div className="card-actions">
              <button className="btn btn-outline btn-primary">
                <FaEye className="text-[18px] mx-2" />{" "}
                <Link to="https://recruitment-ce371.web.app/" target="_blank">
                  Live Site
                </Link>
              </button>

              <button className="btn btn-outline btn-info">
                <FaGithub className="text-[18px] mx-2" />{" "}
                <Link
                  to="https://github.com/Hasan-Al-Banna-Nahid/Recruitment"
                  target="_blank"
                >
                  Source Code Client Side
                </Link>
              </button>
            </div>
          </div>
        </div>
        {/* Card 5 */}

        {/* Card 6*/}
        <div className="card w-96 bg-base-300 shadow-xl mx-auto my-6">
          <Carousel className="w-[400px]" width={380} dynamicHeight={380}>
            <div>
              <img src="/Job Board/1 (1).png" />
            </div>
            <div>
              <img src="/Job Board/1 (2).png" />
            </div>
            <div>
              <img src="/Job Board/1 (3).png" />
            </div>
            <div>
              <img src="/Job Board/1 (4).png" />
            </div>
            <div>
              <img src="/Job Board/1 (5).png" />
            </div>
          </Carousel>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-[22px] text-red-800">Job Board</h2>
            <li className="font-bold text-slate-800">
              This is a Job Portal site
            </li>{" "}
            <br />
            <li className="font-bold text-slate-800">
              There Is A Landing page And a candidates search Functionality
            </li>{" "}
            <div className="card-actions">
              <button className="btn btn-outline btn-primary">
                <FaEye className="text-[18px] mx-2" />{" "}
                <Link to="https://job-board-dd1b3.web.app/" target="_blank">
                  Live Site
                </Link>
              </button>

              <button className="btn btn-outline btn-info">
                <FaGithub className="text-[18px] mx-2" />{" "}
                <Link
                  to="https://github.com/Hasan-Al-Banna-Nahid/Job-board"
                  target="_blank"
                >
                  Source Code Client Side
                </Link>
              </button>
            </div>
          </div>
        </div>
        {/* Card 6*/}
        {/* Card 7 */}
        <div className="card w-96 bg-base-300 shadow-xl mx-auto my-6">
          <Carousel className="w-[400px]" width={380} dynamicHeight={380}>
            <div>
              <img src="./Belletrist/Screenshot 2023-07-26 031920.png" />
            </div>
            <div>
              <img src="./Belletrist/Screenshot 2023-07-26 031933.png" />
            </div>
            <div>
              <img src="./Belletrist/Screenshot 2023-07-26 031945.png" />
            </div>
            <div>
              <img src="./Belletrist/Screenshot 2023-07-26 031957.png" />
            </div>
            <div>
              <img src="./Belletrist/Screenshot 2023-07-26 032008.png" />
            </div>
            <div>
              <img src="./Belletrist/Screenshot 2023-07-26 032031.png" />
            </div>
            <div>
              <img src="./Belletrist/Screenshot 2023-07-26 032041.png" />
            </div>
            <div>
              <img src="./Belletrist/Screenshot 2023-07-26 032053.png" />
            </div>
            <div>
              <img src="./Belletrist/Screenshot 2023-07-26 032209.png" />
            </div>
          </Carousel>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-[22px] text-red-800">Belletrist</h2>
            <li className="font-bold text-slate-800">
              This is a Script Writing Site
            </li>{" "}
            <br />
            <li className="font-bold text-slate-800">
              There Is ChatGPT integration for Chat Completion
            </li>{" "}
            <div className="card-actions">
              <button className="btn btn-outline btn-primary">
                <FaEye className="text-[18px] mx-2" />{" "}
                <Link to="https://belletrist-8e1fe.web.app/" target="_blank">
                  Live Site
                </Link>
              </button>

              <button className="btn btn-outline btn-info">
                <FaGithub className="text-[18px] mx-2" />{" "}
                <Link
                  to="https://github.com/Hasan-Al-Banna-Nahid/Belletrist"
                  target="_blank"
                >
                  Source Code Client Side
                </Link>
              </button>
            </div>
          </div>
        </div>
        {/* Card 7 */}
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
