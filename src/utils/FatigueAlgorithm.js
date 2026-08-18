// src/utils/fatigueAlgorithm.js

// =====================================================
// 잠수리 피로도 분석 알고리즘
// =====================================================

export function analyzeFatigue({
  hrv,
  sleepHours,
  sleepEfficiency,
  activityLevel,
  isNightShift,
}) {
  let baseScore = 100

  // ---------------------------------------------
  // 1. HRV
  // ---------------------------------------------
  const hrvPenalty = Math.max(0, (50 - hrv) * 0.8)

  // ---------------------------------------------
  // 2. 수면 시간
  // ---------------------------------------------
  const sleepPenalty = Math.max(0, 7.5 - sleepHours) * 8.5

  // ---------------------------------------------
  // 3. 수면 효율
  // ---------------------------------------------
  const efficiencyPenalty =
    Math.max(0, 85 - sleepEfficiency) * 0.6

  // ---------------------------------------------
  // 4. 야간근무
  // ---------------------------------------------
  const shiftPenalty = isNightShift ? 15 : 0

  // ---------------------------------------------
  // 5. 활동량
  // ---------------------------------------------
  const activityPenalty =
    activityLevel > 15000 || activityLevel < 2000 ? 5 : 0

  // ---------------------------------------------
  // 최종 피로도
  // ---------------------------------------------
  const totalPenalty =
    hrvPenalty +
    sleepPenalty +
    efficiencyPenalty +
    shiftPenalty +
    activityPenalty

  const fatigueScore = Math.max(
    0,
    Math.min(
      100,
      Math.round((baseScore - totalPenalty) * 10) / 10
    )
  )

  // ---------------------------------------------
  // 위험 등급
  // ---------------------------------------------
  let riskLevel
  let message

  if (fatigueScore <= 40) {
    riskLevel = "CRITICAL"
    message =
      "현재 피로도가 매우 높은 상태입니다. 집중력과 반응 속도가 떨어질 수 있습니다."
  } else if (fatigueScore <= 70) {
    riskLevel = "WARNING"
    message =
      "피로가 누적된 상태입니다. 오늘은 회복을 우선하는 것이 좋습니다."
  } else {
    riskLevel = "NORMAL"
    message =
      "현재 회복 상태와 수면 상태가 비교적 안정적입니다."
  }

  // ---------------------------------------------
  // 피로 원인 분석
  // ---------------------------------------------
  const causes = []

  // HRV
  if (hrv < 30) {
    causes.push({
      name: "회복 상태 저하",
      icon: "❤️",
      score: 25,
      solution:
        "몸의 회복 상태가 낮습니다. 오늘은 무리한 활동을 줄이고 충분한 휴식을 취하세요.",
    })
  } else if (hrv < 40) {
    causes.push({
      name: "회복 상태 주의",
      icon: "❤️",
      score: 15,
      solution:
        "평소보다 회복 상태가 낮을 수 있습니다. 오늘은 활동 강도를 조금 낮춰주세요.",
    })
  }

  // 수면 시간
  if (sleepHours < 5) {
    causes.push({
      name: "심각한 수면 부족",
      icon: "😴",
      score: 30,
      solution:
        "수면 시간이 매우 부족합니다. 가능한 한 빠르게 충분한 수면 시간을 확보하세요.",
    })
  } else if (sleepHours < 6) {
    causes.push({
      name: "수면 부족",
      icon: "😴",
      score: 22,
      solution:
        "오늘은 평소보다 일찍 잠자리에 들어 수면 시간을 확보하세요.",
    })
  } else if (sleepHours < 7) {
    causes.push({
      name: "수면 시간 부족",
      icon: "😴",
      score: 12,
      solution:
        "다음 수면에서는 최소 7시간 이상의 수면을 목표로 하세요.",
    })
  }

  // 수면 효율
  if (sleepEfficiency < 70) {
    causes.push({
      name: "수면의 질 저하",
      icon: "🌙",
      score: 25,
      solution:
        "수면 환경을 어둡고 조용하게 만들고 취침 전 스마트폰 사용을 줄여보세요.",
    })
  } else if (sleepEfficiency < 85) {
    causes.push({
      name: "수면의 질 주의",
      icon: "🌙",
      score: 15,
      solution:
        "취침 시간을 일정하게 유지하고 취침 전 카페인과 과도한 활동을 피하세요.",
    })
  }

  // 활동량
  if (activityLevel > 15000) {
    causes.push({
      name: "높은 신체 활동량",
      icon: "🏃",
      score: 15,
      solution:
        "활동량이 많습니다. 수분을 충분히 섭취하고 가벼운 스트레칭으로 몸을 회복하세요.",
    })
  } else if (activityLevel < 2000) {
    causes.push({
      name: "낮은 활동량",
      icon: "🚶",
      score: 8,
      solution:
        "오랫동안 움직이지 않았다면 5~10분 정도 가볍게 걷거나 스트레칭을 해주세요.",
    })
  }

  // 야간근무
  if (isNightShift) {
    causes.push({
      name: "야간근무로 인한 생체리듬 부담",
      icon: "🌃",
      score: 20,
      solution:
        "근무 후 밝은 빛을 피하고 어둡고 조용한 환경에서 수면을 취하세요.",
    })
  }

  // 높은 영향도 순서로 정렬
  causes.sort((a, b) => b.score - a.score)

  // ---------------------------------------------
  // 주요 원인
  // ---------------------------------------------
  const mainCause =
    causes.length > 0
      ? causes[0]
      : {
          name: "특별한 피로 원인이 감지되지 않았습니다.",
          icon: "✨",
          score: 0,
          solution:
            "현재 생활 패턴을 유지하고 규칙적인 수면을 이어가세요.",
        }

  // ---------------------------------------------
  // 맞춤 솔루션
  // ---------------------------------------------
  const solutions = causes
    .slice(0, 2)
    .map((cause) => cause.solution)

  if (solutions.length === 0) {
    solutions.push(
      "현재 생활 패턴을 유지하세요.",
      "규칙적인 수면 시간을 유지하세요.",
      "수분 섭취와 가벼운 활동을 꾸준히 해주세요."
    )
  } else {
    solutions.push(
      "오늘은 무리한 활동보다 회복을 우선하세요."
    )
  }

  // ---------------------------------------------
  // 오늘의 행동 가이드
  // ---------------------------------------------
  const actions = []

  if (fatigueScore <= 40) {
    actions.push(
      "가능하다면 현재 작업을 잠시 중단하고 휴식을 취하세요.",
      "15~20분 정도의 짧은 휴식을 고려하세요."
    )
  } else if (fatigueScore <= 70) {
    actions.push(
      "오늘은 무리한 활동보다 회복을 우선하세요.",
      "충분한 수분을 섭취하세요."
    )
  } else {
    actions.push(
      "현재 컨디션을 유지하면서 일정을 진행하세요."
    )
  }

  if (sleepHours < 6) {
    actions.push(
      "오늘 수면 시간을 평소보다 충분히 확보하세요."
    )
  }

  if (sleepEfficiency < 75) {
    actions.push(
      "취침 전 스마트폰 사용과 강한 빛을 줄여주세요."
    )
  }

  if (isNightShift) {
    actions.push(
      "야간근무 후에는 밝은 빛을 피하고 어둡고 조용한 환경에서 수면하세요."
    )
  }

  actions.push(
    "가능한 한 일정한 시간에 잠들고 일어나세요."
  )

  // ---------------------------------------------
  // 최종 결과
  // ---------------------------------------------
  return {
    fatigueScore,
    riskLevel,
    message,
    mainCause,
    causes,
    solutions,
    actions,
  }
}