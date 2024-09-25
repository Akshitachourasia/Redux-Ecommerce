import "../../index.css";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-green-500">
      <div className="bg-white shadow-lg rounded-lg p-10 max-w-md mx-auto text-center transform transition-transform hover:scale-105 duration-300">
        <img
          src="https://marketplace.canva.com/EAFzjXx_i5w/1/0/1600w/canva-blue-illustrative-e-commerce-online-shop-logo-fZejT2DpGCw.jpg"
          alt="Welcome"
          className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-blue-500 shadow-md"
        />
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Welcome to My Ecommerce App
        </h1>
        <p className="text-xl text-gray-700 mb-2">
          Discover the best products at unbeatable prices!
        </p>
        <p className="text-lg text-gray-600 mb-6">
          Create an account to explore our exclusive deals!
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/auth/register"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg transform hover:translate-y-1"
          >
            Register Now
          </Link>
        </div>
      </div>
      <footer className="mt-10 text-gray-200">
        &copy; 2024 My Ecommerce App. All rights reserved.
      </footer>
      <svg
        className="absolute bottom-0 left-0 right-0 h-48 text-white"
        viewBox="0 0 1440 320"
      >
        <path
          fillOpacity="1"
          d="M0,192L30,197.3C60,203,120,213,180,229.3C240,245,300,267,360,245.3C420,224,480,160,540,133.3C600,107,660,117,720,128C780,139,840,149,900,138.7C960,128,1020,96,1080,96C1140,96,1200,128,1260,144C1320,160,1380,160,1410,160L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320H0Z"
        ></path>
      </svg>
    </div>
  );
};

export default Welcome;
