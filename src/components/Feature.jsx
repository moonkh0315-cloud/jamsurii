import {
  Brain,
  BedDouble,
  Lightbulb,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI 수면 분석",
    text: (<>AI가 수면 패턴을 분석하여 <br /> 맞춤형 리포트를 제공합니다.</>),
  },
  {
    icon: BedDouble,
    title: "수면 MBTI",
    text: "16가지 수면 성향을 분석하여 나만의 유형을 알려드립니다.",
  },
  {
    icon: BarChart3,
    title: "수면 기록",
    text: (<>매일의 수면 시간과 <br />수면 점수를 기록합니다.</>),
  },
  {
    icon: Lightbulb,
    title: "맞춤 솔루션",
    text: (<>사용자에게 적합한 <br />수면 개선 방법을 추천합니다.</>),
  },
];

function Feature() {
  return (
    <section
      id="feature"
      className="bg-slate-900 py-28 px-8 text-white"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-black text-center mb-20">
          주요 기능
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item) => {
            const IconComponent = item.icon;

            return (
              <div
                key={item.title}
                className="bg-slate-800 rounded-3xl p-8"
              >

                <IconComponent
                  size={48}
                  className="text-violet-400 mb-6"
                />

                <h3 className="text-2xl font-bold mb-4">
                  {item.title}
                </h3>

                <p className="text-slate-300 leading-7">
                  {item.text}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Feature;