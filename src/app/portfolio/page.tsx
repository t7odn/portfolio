'use client'

import { useState, useMemo } from 'react'
import SkillCard from '@/components/SkillCard'
import LevelBadge from '@/components/LevelBadge'
import { skills } from '@/data/skills'
import { SkillLevel, SkillCategory, skillCategoryLabels } from '@/types/skill'

export default function Portfolio() {
  const [selectedLevel, setSelectedLevel] = useState<SkillLevel | 'all'>('all')
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory | 'all'>('all')

  const levelCounts = useMemo(() => {
    return {
      beginner: skills.filter(skill => skill.level === 'beginner').length,
      intermediate: skills.filter(skill => skill.level === 'intermediate').length,
      advanced: skills.filter(skill => skill.level === 'advanced').length,
    }
  }, [])

  const categoryCounts = useMemo(() => {
    return {
      language: skills.filter(skill => skill.category === 'language').length,
      framework: skills.filter(skill => skill.category === 'framework').length,
      tool: skills.filter(skill => skill.category === 'tool').length,
      database: skills.filter(skill => skill.category === 'database').length,
      middleware: skills.filter(skill => skill.category === 'middleware').length,
    }
  }, [])

  const filteredSkills = useMemo(() => {
    return skills.filter(skill => {
      const levelMatch = selectedLevel === 'all' || skill.level === selectedLevel
      const categoryMatch = selectedCategory === 'all' || skill.category === selectedCategory
      return levelMatch && categoryMatch
    })
  }, [selectedLevel, selectedCategory])

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Portfolio
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          技術スキルと経験について
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
          スキルレベル別フィルター
        </h2>
        <div className="flex flex-wrap gap-3 mb-6">
          <button
            onClick={() => setSelectedLevel('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
              selectedLevel === 'all'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            すべて ({skills.length})
          </button>
          {(Object.keys(levelCounts) as SkillLevel[]).map(level => (
            <LevelBadge
              key={level}
              level={level}
              count={levelCounts[level]}
              isActive={selectedLevel === level}
              onClick={() => setSelectedLevel(level)}
            />
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
          カテゴリ別フィルター
        </h2>
        <div className="flex flex-wrap gap-3 mb-6">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
              selectedCategory === 'all'
                ? 'bg-purple-500 text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            すべて
          </button>
          {(Object.keys(categoryCounts) as SkillCategory[]).map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                selectedCategory === category
                  ? 'bg-purple-500 text-white'
                  : 'bg-purple-100 text-purple-800 hover:bg-purple-200 dark:bg-purple-900 dark:text-purple-200 dark:hover:bg-purple-800'
              }`}
            >
              {skillCategoryLabels[category]} ({categoryCounts[category]})
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map(skill => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>

      {filteredSkills.length === 0 && (
        <div className="text-center py-12">
          <div className="text-4xl mb-4">🔍</div>
          <p className="text-gray-600 dark:text-gray-300">
            選択した条件に一致するスキルがありません
          </p>
        </div>
      )}
    </div>
  )
}