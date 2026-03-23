export interface TopicSeed {
  name: string
  slug: string
  priority: number
  examArea: 'ga1' | 'ga2' | 'wiso'
  icon: string
  subtopics: { name: string; slug: string; content?: string }[]
}

export interface QuestionSeed {
  topicSlug: string
  subtopicSlug: string
  type: 'multiple_choice' | 'sql_editor' | 'pseudocode' | 'fill_blank' | 'matching' | 'true_false' | 'flashcard'
  difficulty: 'easy' | 'medium' | 'hard'
  questionText: string
  questionData: any
  explanation?: string
  xpReward?: number
}
