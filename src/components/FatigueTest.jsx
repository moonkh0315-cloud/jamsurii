import { useState } from "react"

function analyzeFatigue(
  hrv,
  sleepHours,
  sleepEfficiency,
  activityLevel,
  isNightShift
) {
  const baseScore = 100.0

  const hrvPenalty = Math.max(0, (50 - hrv) * 0.8)
  const sleepPenalty = Math.max(0, 7.5 - sleepHours) * 8.5
  const efficiencyPenalty = Math.max(0, (85 - sleepEfficiency) * 0.6)
  const shiftPenalty = isNightShift ? 15.0 : 0.0
  const activityPenalty =
    activityLevel > 15000 || activityLevel < 2000 ? 5.0 : 0.0

  const totalPenalty =
    hrvPenalty +
    sleepPenalty +
    efficiencyPenalty +
    shiftPenalty +
    activityPenalty

  const fatigueScore = Math.max(
    0,
    Math.min(100, Math.round((baseScore - totalPenalty) * 10) / 10)
  )

  if (fatigueScore <= 40) {
    return {
      fatigueScore,
      riskLevel: "CRITICAL",
      riskText: "고위험",
      icon: "🚨",
      message:
        "피로도가 위험 수준입니다. 순간 졸음으로 인한 사고 위험이 매우 높습니다.",
      actionGuide:
        "즉시 작업을 중단하고 15~20분간 파워 냅을 취하는 것을 권장합니다.",
    }
  }

  if (fatigueScore <= 70) {
    return {
      fatigueScore,
      riskLevel: "WARNING",
      riskText: "주의",
      icon: "⚠️",
      message:
        "생체 리듬 저하가 감지되었습니다. 작업 집중도가 떨어질 수 있습니다.",
      actionGuide:
        "퇴근 후 충분한 수면을 취하고 일정한 수면 패턴을 유지해 주세요.",
    }
  }

  return {
    fatigueScore,
    riskLevel: "NORMAL",
    riskText: "양호",
    icon: "✓",
    message:
      "현재 신체 회복 상태와 수면 질이 안정적인 상태입니다.",
    actionGuide:
      "현재의 수면 일정과 생활 패턴을 일정하게 유지해 주세요.",
  }
}

export default function FatigueTest() {
  const [hrv, setHrv] = useState("")
  const [sleepHours, setSleepHours] = useState("")
  const [sleepEfficiency, setSleepEfficiency] = useState("")
  const [activityLevel, setActivityLevel] = useState("")
  const [isNightShift, setIsNightShift] = useState(false)

  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleAnalyze = () => {
    if (!hrv || !sleepHours || !sleepEfficiency || !activityLevel) {
      alert("모든 항목을 입력해주세요.")
      return
    }

    setLoading(true)

    setTimeout(() => {
      const analysis = analyzeFatigue(
        Number(hrv),
        Number(sleepHours),
        Number(sleepEfficiency),
        Number(activityLevel),
        isNightShift
      )

      setResult(analysis)
      setLoading(false)
    }, 1000)
  }

  const getScoreStyle = () => {
    if (!result) return ""

    if (result.riskLevel === "CRITICAL") {
      return "from-red-500 to-orange-400"
    }

    if (result.riskLevel === "WARNING") {
      return "from-yellow-400 to-orange-400"
    }

    return "from-emerald-400 to-cyan-400"
  }

  return (
    <section 
     id="fatigue-test"
     className="scroll-mt-20 relative overflow-hidden bg-slate-950 px-6 py-24 text-white">
      {/* 배경 효과 */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">

        {/* 제목 */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-sm text-violet-300">
            <span className="h-2 w-2 rounded-full bg-violet-400" />
            잠수리 AI 피로도 분석
          </div>

          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            오늘의 피로도를
            <span className="bg-gradient-to-r from-violet-300 to-indigo-300 bg-clip-text text-transparent">
              {" "}확인해보세요
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-400 md:text-base">
            수면 및 생체 데이터를 기반으로 <br /> 현재 피로 상태를
            분석하고 적절한 휴식 가이드를 제공합니다.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">

          {/* ================= 입력 카드 ================= */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-violet-950/20 backdrop-blur-xl md:p-8">

            <div className="mb-7">
              <p className="text-lg font-semibold">
                생체 데이터 입력
              </p>

              <p className="mt-1 text-sm text-slate-500">
                현재 상태에 가까운 값을 입력해주세요.
              </p>
            </div>

            <div className="space-y-5">

              {/* HRV */}
              <div>
                <label className="mb-2 flex items-center justify-between text-sm">
                  <span className="text-slate-300">
                    HRV
                  </span>

                  <span className="text-xs text-slate-500">
                    ms
                  </span>
                </label>

                <input
                  type="number"
                  value={hrv}
                  onChange={(e) => setHrv(e.target.value)}
                  placeholder="예: 50"
                  className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3.5 text-white outline-none transition placeholder:text-slate-600 focus:border-violet-400/60 focus:bg-white/[0.06]"
                />
              </div>

              {/* 수면시간 */}
              <div>
                <label className="mb-2 flex items-center justify-between text-sm">
                  <span className="text-slate-300">
                    수면 시간
                  </span>

                  <span className="text-xs text-slate-500">
                    hours
                  </span>
                </label>

                <input
                  type="number"
                  step="0.1"
                  value={sleepHours}
                  onChange={(e) => setSleepHours(e.target.value)}
                  placeholder="예: 6.5"
                  className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3.5 text-white outline-none transition placeholder:text-slate-600 focus:border-violet-400/60 focus:bg-white/[0.06]"
                />
              </div>

              {/* 수면효율 */}
              <div>
                <label className="mb-2 flex items-center justify-between text-sm">
                  <span className="text-slate-300">
                    수면 효율
                  </span>

                  <span className="text-xs text-slate-500">
                    %
                  </span>
                </label>

                <input
                  type="number"
                  value={sleepEfficiency}
                  onChange={(e) =>
                    setSleepEfficiency(e.target.value)
                  }
                  placeholder="예: 85"
                  className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3.5 text-white outline-none transition placeholder:text-slate-600 focus:border-violet-400/60 focus:bg-white/[0.06]"
                />
              </div>

              {/* 활동량 */}
              <div>
                <label className="mb-2 flex items-center justify-between text-sm">
                  <span className="text-slate-300">
                    오늘 걸음 수
                  </span>

                  <span className="text-xs text-slate-500">
                    steps
                  </span>
                </label>

                <input
                  type="number"
                  value={activityLevel}
                  onChange={(e) =>
                    setActivityLevel(e.target.value)
                  }
                  placeholder="예: 5000"
                  className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3.5 text-white outline-none transition placeholder:text-slate-600 focus:border-violet-400/60 focus:bg-white/[0.06]"
                />
              </div>

              {/* 야간근무 */}
              <button
                type="button"
                onClick={() => setIsNightShift(!isNightShift)}
                className={`flex w-full items-center justify-between rounded-2xl border p-4 text-left transition ${
                  isNightShift
                    ? "border-violet-400/40 bg-violet-500/10"
                    : "border-white/10 bg-black/20 hover:bg-white/[0.04]"
                }`}
              >
                <div>
                  <p className="text-sm font-medium">
                    야간 근무 중인가요?
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    교대근무 여부를 분석에 반영합니다.
                  </p>
                </div>

                <div
                  className={`flex h-6 w-11 items-center rounded-full p-1 transition ${
                    isNightShift
                      ? "bg-violet-500"
                      : "bg-slate-700"
                  }`}
                >
                  <div
                    className={`h-4 w-4 rounded-full bg-white transition ${
                      isNightShift
                        ? "translate-x-5"
                        : "translate-x-0"
                    }`}
                  />
                </div>
              </button>

              {/* 분석 버튼 */}
              <button
                onClick={handleAnalyze}
                disabled={loading}
                className="group relative mt-2 w-full overflow-hidden rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 py-4 font-semibold shadow-lg shadow-violet-900/20 transition hover:scale-[1.01] hover:from-violet-500 hover:to-indigo-500 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    데이터를 분석하고 있어요...
                  </span>
                ) : (
                  "AI 피로도 분석하기"
                )}
              </button>
            </div>
          </div>

          {/* ================= 결과 카드 ================= */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-violet-950/20 backdrop-blur-xl md:p-8">

            {!result ? (
              <div className="flex h-full min-h-[500px] flex-col items-center justify-center text-center">

                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl border border-violet-400/20 bg-violet-500/10">
                  <span className="text-3xl">◌</span>
                </div>

                <p className="text-lg font-semibold">
                  분석 결과가 아직 없습니다
                </p>

                <p className="mt-2 max-w-xs text-sm leading-6 text-slate-500">
                  왼쪽의 생체 데이터를 입력하고
                  <br />
                  분석을 시작해주세요.
                </p>

              </div>
            ) : (
              <div>

                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">
                      AI 분석 결과
                    </p>

                    <p className="mt-1 text-lg font-semibold">
                      오늘의 피로도
                    </p>
                  </div>

                  <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-400">
                    Prototype
                  </div>
                </div>

                {/* 점수 */}
                <div className="flex flex-col items-center">

                  <div className="relative flex h-52 w-52 items-center justify-center rounded-full border-[14px] border-white/5">

                    <div
                      className={`absolute inset-[-14px] rounded-full bg-gradient-to-r ${getScoreStyle()} opacity-20 blur-xl`}
                    />

                    <div className="text-center">
                      <p className="text-5xl font-bold tracking-tight">
                        {result.fatigueScore}
                      </p>

                      <p className="mt-1 text-sm text-slate-500">
                        / 100
                      </p>
                    </div>
                  </div>

                  {/* 상태 */}
                  <div className="mt-7 text-center">

                    <div className="mb-2 text-3xl">
                      {result.icon}
                    </div>

                    <p className="text-xl font-bold">
                      {result.riskLevel}
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      {result.riskText}
                    </p>

                  </div>
                </div>

                {/* 메시지 */}
                <div className="mt-8 space-y-3">

                  <div className="rounded-2xl border border-white/5 bg-black/20 p-4">
                    <p className="mb-2 text-xs font-medium text-violet-300">
                      ANALYSIS
                    </p>

                    <p className="text-sm leading-6 text-slate-300">
                      {result.message}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/5 bg-black/20 p-4">
                    <p className="mb-2 text-xs font-medium text-violet-300">
                      SLEEP GUIDE
                    </p>

                    <p className="text-sm leading-6 text-slate-300">
                      {result.actionGuide}
                    </p>
                  </div>

                </div>

              </div>
            )}
          </div>

        </div>

        {/* 안내 */}
        <p className="mt-6 text-center text-xs text-slate-600">
          ※ 본 결과는 잠수리 서비스의 피로도 분석 프로토타입이며,
          의료적 진단을 목적으로 하지 않습니다.
        </p>

      </div>
    </section>
  )
}