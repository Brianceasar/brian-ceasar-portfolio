export default function Footer() {
    return (
      <footer className="bg-gradient-to-b from-[#e9f8ff] to-[#f7f5ff] py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; 2024. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://www.linkedin.com/in/brian-ceasar" target="_blank" rel="noreferrer">
              <i className="fa fa-linkedin text-[#0e0004] hover:text-[#B00D1C]"></i>
            </a>
            <a href="https://x.com/beeczr" target="_blank" rel="noreferrer">
              <i className="fa fa-twitter text-[#0e0004] hover:text-[#B00D1C]"></i>
            </a>
            <a href="https://instagram.com/_brianceasar" target="_blank" rel="noreferrer">
              <i className="fa fa-instagram text-[#0e0004] hover:text-[#B00D1C]"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
  