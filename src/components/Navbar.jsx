function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-slate-950/60 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <h1 className="text-3xl font-bold text-violet-400">
          🌙 잠수리
        </h1>

        <ul className="hidden md:flex gap-10 text-lg">

          <li>
            <a href="#about" className="hover:text-violet-400 duration-300">
              소개
            </a>
          </li>

          <li>
            <a href="#feature" className="hover:text-violet-400 duration-300">
              기능
            </a>
          </li>

          <li>
            <a href="#mbti" className="hover:text-violet-400 duration-300">
              수면 MBTI
            </a>
          </li>

        </ul>

      </div>
    </nav>
  );
}

export default Navbar;