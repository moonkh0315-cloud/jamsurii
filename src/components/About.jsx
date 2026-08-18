function About() {
  return (
    <section
      id="about"
      className="bg-slate-950 text-white py-28 px-8"
    >
      <div className="max-w-6xl mx-auto text-center">

        <p className="text-violet-400 font-bold tracking-[4px] mb-3">
          ABOUT
        </p>

        <h2 className="text-5xl font-black mb-8">
          잠수리란?
        </h2>

        <p className="text-slate-300 text-xl leading-10 max-w-4xl mx-auto">

          잠수리는 AI를 활용하여 사용자의 수면 습관을 분석하고,

          <br />

          수면 MBTI를 통해 자신의 수면 성향을 확인할 수 있는

          맞춤형 수면 관리 서비스입니다.

          <br /><br />

          매일의 수면을 기록하고,

          개인에게 맞는 개선 방법을 제안하여

          더 건강한 생활을 만들어드립니다.

        </p>

      </div>
    </section>
  );
}

export default About;