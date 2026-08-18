function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 border-t border-white/10 px-6 py-16 text-white">

      {/* 배경 빛 */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-violet-600/10 blur-[140px]" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* 상단 */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* 로고 */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <span className="text-3xl">🌙</span>

              <h2 className="text-2xl font-black tracking-tight">
                잠수리
              </h2>
            </div>

            <p className="mt-3 text-sm text-slate-400">
              AI가 분석하는 나만의 수면 습관
            </p>
          </div>

          {/* 링크 */}
          <div className="flex items-center gap-6 text-sm text-slate-400">

            <a
              href="#feature"
              className="hover:text-violet-300 transition-colors"
            >
              주요 기능
            </a>

            <span className="text-slate-700">|</span>

            <a
              href="https://sleepmbti.vercel.app"
              className="hover:text-violet-300 transition-colors"
            >
              수면 MBTI
            </a>

          </div>

        </div>

        {/* 구분선 */}
        <div className="my-10 h-px bg-white/10" />

        {/* 하단 */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-xs text-slate-500">
            © 2026 잠수리. All rights reserved.
          </p>

          <p className="text-xs text-slate-600">
            Sleep better, live better 🌙
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;