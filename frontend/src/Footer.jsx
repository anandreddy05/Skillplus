function Footer(){
        return (
          <footer className=" text-white py-12 bg-gray-700 h-100">
            <br />
            <div className="container mx-auto flex justify-between items-center">
              <div>
              <p className="text-lg font-bold">Skill<i className="fa-solid fa-plus"></i></p>


                <p className="text-gray-400"><i class="fa-regular fa-copyright"></i> 2025 All rights reserved.</p>
              </div>
              <div className="flex space-x-6">
                <a href="#" className="hover:text-blue-400">About Us</a>
                <a href="#" className="hover:text-blue-400">Contact</a>
                <a href="#" className="hover:text-blue-400">Privacy Policy</a>
              </div>
              
              <div className="flex space-x-4">
              <h1 className="">Follow Us On</h1>
                <a href="#" className="hover:text-blue-400  "><i className="fa-brands fa-twitter fa-shake "></i></a>
                <a href="#" className="hover:text-blue-400"><i className ="fa-brands fa-linkedin"></i></a>
                <a href="#" className="hover:text-blue-400"><i className ="fa-brands fa-square-facebook"></i></a>
                <a href="#" className="hover:text-blue-400"><i className ="fa-brands fa-instagram"></i></a>
              </div>
            </div>
          </footer>
        );
      };
export default Footer;