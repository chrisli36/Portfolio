import profile_pic from '../assets/images/teletubby.jpg';

export default function About() {
    return (
      <section id="about">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Hi, I'm Christopher.
              {/* <br className="hidden lg:inline-block" />I love  */}
            </h1>
            <p className="mb-8 leading-relaxed">
              I am currently pursuing a double major in Computer Science and Mathematics at Duke University. 
              With a strong passion for software development and machine learning, I am dedicated to creating 
              high-impact solutions. 
            </p>
            <div className="flex justify-center">
              <a
                href="#contact"
                className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                Contact Me
              </a>
              <a
                href="#projects"
                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                Past Projects
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-top rounded"
              alt="hero"
              src={profile_pic}
              style={{ width: '100%', height: 'auto', aspectRatio: '1 / 1' }}
            />
          </div>
        </div>
      </section>
    );
};