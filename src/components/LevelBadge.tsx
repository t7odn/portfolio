import { SkillLevel, skillLevelLabels } from '@/types/skill'

interface LevelBadgeProps {
  level: SkillLevel
  count: number
  isActive: boolean
  onClick: () => void
}

const LevelBadge = ({ level, count, isActive, onClick }: LevelBadgeProps) => {
  const getLevelColor = (level: SkillLevel, isActive: boolean) => {
    const baseColors = {
      beginner: isActive
        ? 'bg-green-500 text-white'
        : 'bg-green-100 text-green-800 hover:bg-green-200',
      intermediate: isActive
        ? 'bg-yellow-500 text-white'
        : 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200',
      advanced: isActive
        ? 'bg-red-500 text-white'
        : 'bg-red-100 text-red-800 hover:bg-red-200',
    }
    return baseColors[level]
  }

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${getLevelColor(
        level,
        isActive
      )}`}
    >
      {skillLevelLabels[level]} ({count})
    </button>
  )
}

export default LevelBadge