function Hero() {
  return (
    <section className="relative min-h-[110vh] overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-violet-950">

      {/* =========================
          배경 빛
      ========================= */}

      <div className="absolute -top-20 -left-20 w-[450px] h-[450px] rounded-full bg-violet-700 opacity-20 blur-[180px]" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-violet-600 opacity-20 blur-[180px]" />

      <div className="absolute top-[40%] left-[35%] w-[300px] h-[300px] rounded-full bg-indigo-500 opacity-10 blur-[150px]" />


      {/* =========================
          초승달
          → 깜빡이지 않고 은은하게 고정
      ========================= */}

      <svg
        className="absolute top-16 right-5 w-40 h-40 opacity-30 z-0"
        viewBox="0 0 100 100"
      >
        <path
          d="
            M60 15
            A35 35 0 1 0 60 85
            A25 35 0 1 1 60 15
          "
          fill="white"
        />
      </svg>


      {/* =========================
          별
          → 화면 전체에 자연스럽게 배치
          → 모두 같은 효과
      ========================= */}

      {/* 왼쪽 위 */}
      <div className="absolute top-28 left-[10%] w-2 h-2 rounded-full bg-white opacity-70 animate-pulse z-0" />

      {/* 왼쪽 중앙 */}
      <div className="absolute top-[45%] left-[20%] w-1.5 h-1.5 rounded-full bg-white opacity-60 animate-pulse z-0" />

      {/* 중앙 위 */}
      <div className="absolute top-[27%] left-[42%] w-2 h-2 rounded-full bg-white opacity-70 animate-pulse z-0" />

      {/* ★ 중앙 */}
      <div className="absolute top-[40%] left-[50%] w-2 h-2 rounded-full bg-white opacity-70 animate-pulse z-0" />

      {/* 중앙 아래 */}
      <div className="absolute bottom-[28%] left-[45%] w-1.5 h-1.5 rounded-full bg-white opacity-60 animate-pulse z-0" />

      {/* 오른쪽 중앙 */}
      <div className="absolute top-[55%] right-[24%] w-2 h-2 rounded-full bg-white opacity-70 animate-pulse z-0" />

      {/* 오른쪽 위 */}
      <div className="absolute top-[24%] right-[32%] w-1.5 h-1.5 rounded-full bg-white opacity-60 animate-pulse z-0" />

      {/* 오른쪽 아래 */}
      <div className="absolute bottom-[22%] right-[10%] w-2 h-2 rounded-full bg-white opacity-60 animate-pulse z-0" />

      {/* 작은 별 */}
      <div className="absolute top-[35%] left-[33%] w-1 h-1 rounded-full bg-white opacity-50 animate-pulse z-0" />

      <div className="absolute bottom-[35%] left-[30%] w-1 h-1 rounded-full bg-white opacity-50 animate-pulse z-0" />

      <div className="absolute top-[65%] right-[35%] w-1 h-1 rounded-full bg-white opacity-50 animate-pulse z-0" />


      {/* =========================
          메인 콘텐츠
      ========================= */}

      <div className="relative z-10 max-w-7xl mx-auto w-full px-10 py-20">

        <div className="grid md:grid-cols-2 gap-20 items-center min-h-[90vh]">


          {/* =========================
              왼쪽
          ========================= */}

          <div>

            <p className="text-violet-400 uppercase tracking-[5px] text-lg font-semibold mb-5">
              AI SLEEP SOLUTION
            </p>


            <h1 className="text-7xl font-black leading-tight text-white">
              잠수리
            </h1>


            <p className="text-slate-300 text-xl mt-8 leading-9">

              AI가 사용자의 수면 패턴을 분석하여

              <br />

              가장 건강한 수면 습관을 만들어드립니다.

            </p>


            <p className="text-slate-300 text-xl mt-6 leading-9">

              나만의 수면 MBTI를 검사하고

              <br />

              맞춤형 수면 솔루션까지 받아보세요.

            </p>


            {/* 버튼 */}

            <div className="mt-12 flex gap-5">

              <a
                href="https://sleepmbti.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  bg-violet-600
                  hover:bg-violet-500
                  duration-300
                  px-8
                  py-4
                  rounded-full
                  font-bold
                  shadow-lg
                  shadow-violet-900/40
                "
              >
                😴 수면 MBTI 검사
              </a>


              <a
                href="#feature"
                className="
                  border
                  border-slate-500
                  hover:border-violet-400
                  hover:text-violet-300
                  duration-300
                  px-8
                  py-4
                  rounded-full
                "
              >
                앱 소개
              </a>

            </div>

          </div>


          {/* =========================
              오른쪽 휴대폰 화면
          ========================= */}

          <div className="flex justify-center">

            <div
              className="
                w-[300px]
                rounded-[40px]
                bg-slate-900
                border
                border-slate-700
                shadow-2xl
                shadow-violet-950/40
                p-6
              "
            >

              {/* 앱 이름 */}

              <div className="text-center">

                <p className="text-violet-400 font-bold">
                  🌙 잠수리
                </p>


                <h2 className="mt-5 text-slate-400">
                  오늘의 수면 점수
                </h2>


                <h1 className="text-6xl font-black text-white">
                  92
                </h1>


                <p className="text-green-400 mt-2">
                  ▲ 어제보다 +8점
                </p>

              </div>


              {/* 수면 효율 */}

              <div className="mt-10">

                <div className="flex justify-between text-sm mb-2">

                  <span>
                    수면 효율
                  </span>

                  <span>
                    92%
                  </span>

                </div>


                <div className="h-3 rounded-full bg-slate-700">

                  <div
                    className="
                      h-3
                      w-[92%]
                      rounded-full
                      bg-violet-500
                    "
                  />

                </div>

              </div>


              {/* 수면 MBTI */}

              <div className="mt-10 bg-slate-800 rounded-3xl p-6">

                <p className="text-slate-400">
                  오늘의 수면 MBTI
                </p>


                <h2 className="text-2xl font-bold mt-2">
                  🦁 EFDA
                </h2>


                <p className="mt-2 text-slate-300">
                  에너자이저 아기 사자
                </p>

              </div>


              {/* 하단 정보 */}

              <div className="grid grid-cols-3 gap-3 mt-10">

                <div className="bg-slate-800 rounded-2xl p-4 text-center">

                  <p className="text-2xl">
                    😴
                  </p>

                  <p className="text-sm mt-2 text-slate-400">
                    8시간
                  </p>

                </div>


                <div className="bg-slate-800 rounded-2xl p-4 text-center">

                  <p className="text-2xl">
                    ❤️
                  </p>

                  <p className="text-sm mt-2 text-slate-400">
                    안정
                  </p>

                </div>


                <div className="bg-slate-800 rounded-2xl p-4 text-center">

                  <p className="text-2xl">
                    🌙
                  </p>

                  <p className="text-sm mt-2 text-slate-400">
                    숙면
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* =========================
          아래 스크롤 화살표
      ========================= */}

      <div
        className="
          absolute
          bottom-8
          left-1/2
          -translate-x-1/2
          text-slate-400
          animate-bounce
          text-3xl
          z-10
        "
      >
        ↓
      </div>

    </section>
  );
}

export default Hero;