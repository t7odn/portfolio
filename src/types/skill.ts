export type SkillLevel = 'beginner' | 'intermediate' | 'advanced'

export type SkillCategory = 'language' | 'framework' | 'tool' | 'database' | 'middleware'

export interface Skill {
  id: string
  name: string
  level: SkillLevel
  category: SkillCategory
  icon?: string
  description?: string
  yearsOfExperience?: number
}

export const skillLevelLabels: Record<SkillLevel, string> = {
  beginner: '初級',
  intermediate: '中級',
  advanced: '上級',
}

export const skillCategoryLabels: Record<SkillCategory, string> = {
  language: 'プログラミング言語',
  framework: 'フレームワーク',
  tool: 'ツール',
  database: 'データベース',
  middleware: 'ミドルウェア',
}