/* esdivnt-disable no-unused-vars */
import { FaStrava } from "react-icons/fa";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Experience = () => {
  return (
    <div>
      <Header />
      <div className="flex justify-center items-center">
        <div>
          <h3 className="text-4xl font-bold p-6 text-[#6D214F]">
            Experience :{" "}
          </h3>
          <div className="grid md:grid-cols-3 gap-6 font-semibold text-3xl ">
            <div className="my-8">
              <FaStrava className="text-3xl text-[#fff200]" />{" "}
              <div className="card w-96 bg-[#c44569] shadow-xl">
                <div className="card-body">
                  <p>
                    Develop responsive and dynamic web applications using
                    ReactJS, ExpressJS, and MongoDB.
                  </p>
                </div>
              </div>
            </div>
            <div className="my-8">
              <FaStrava className="text-3xl text-[#ff3838]" />
              <div className="card w-96 bg-[#546de5] shadow-xl">
                <div className="card-body">
                  <p>
                    Collaborate with the design team to create visually
                    appealing user interfaces.
                  </p>
                </div>
              </div>
            </div>
            <div className="my-8">
              <FaStrava className="text-3xl text-[#3d3d3d]" />
              <div className="card w-96 bg-[#574b90] shadow-xl">
                <div className="card-body">
                  <p>
                    Implement RESTful APIs and integrate with backend systems.
                  </p>
                </div>
              </div>
            </div>
            <div className="my-8">
              <FaStrava className="text-3xl text-[#7158e2]" />
              <div className="card w-96 bg-[#009432] shadow-xl">
                <div className="card-body">
                  <p>
                    Optimize web applications for maximum speed and scalability.
                  </p>
                </div>
              </div>
            </div>
            <div className="my-8">
              <FaStrava className="text-3xl text-[#c56cf0]" />
              <div className="card w-96 bg-[#1289A7] shadow-xl">
                <div className="card-body">
                  <p>
                    Conduct testing and debugging to ensure seamless user
                    experience across different browsers and devices.
                  </p>
                </div>
              </div>
            </div>
            <div className="my-8">
              <FaStrava className="text-3xl text-[#1e272e]" />
              <div className="card w-96 bg-[#6F1E51] shadow-xl">
                <div className="card-body">
                  <p>
                    Collaborate with the backend team to integrate frontend
                    components with server-side logic.
                  </p>
                </div>
              </div>
            </div>
            <div className="my-8">
              <FaStrava className="text-3xl text-[#3c40c6]" />
              <div className="card w-96 bg-[#7f8fa6] shadow-xl">
                <div className="card-body">
                  <p>
                    Implemented responsive designs using HTML, CSS, Bootstrap,
                    and Tailwind CSS.
                  </p>
                </div>
              </div>
            </div>
            <div className="my-8">
              <FaStrava className="text-3xl text-[#05c46b]" />
              <div className="card w-96 bg-[#8c7ae6] shadow-xl">
                <div className="card-body">
                  <p>
                    Utilized ReactJS to build interactive and dynamic user
                    interfaces.
                  </p>
                </div>
              </div>
            </div>
            <div className="my-8">
              <FaStrava className="text-3xl text-[#c44569]" />
              <div className="card w-96 bg-[#0097e6] shadow-xl">
                <div className="card-body">
                  <p>
                    Integrated Firebase for real-time data synchronization and
                    user authentication.
                  </p>
                </div>
              </div>
            </div>
            <div className="my-8">
              <FaStrava className="text-3xl text-[#303952]" />
              <div className="card w-96 bg-[#535c68] shadow-xl">
                <div className="card-body">
                  <p>
                    Collaborated with clients to gather requirements and provide
                    ongoing support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <Footer />
    </div>
  );
};

export default Experience;
