import { Skill, skillLevelLabels } from '@/types/skill'

interface SkillCardProps {
  skill: Skill
}

const SkillCard = ({ skill }: SkillCardProps) => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
      case 'advanced':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
    }
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="text-2xl">{skill.icon}</div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            {skill.name}
          </h3>
        </div>
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(
            skill.level
          )}`}
        >
          {skillLevelLabels[skill.level]}
        </span>
      </div>

      {skill.description && (
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          {skill.description}
        </p>
      )}

      {skill.yearsOfExperience && (
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <span>経験年数: {skill.yearsOfExperience}年</span>
        </div>
      )}
    </div>
  )
}

export default SkillCard