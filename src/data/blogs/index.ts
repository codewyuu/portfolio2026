import { BlogPost } from '@/types/blog'
import { claudeLeak } from './claude-leak'
import { hawkwatch } from './hawkwatch'
import { vakeelAi } from './vakeel-ai'
import { curslate } from './curslate'

export const blogs: BlogPost[] = [
  claudeLeak,
  hawkwatch,
  vakeelAi,
  curslate
]

export const getBlogById = (id: string): BlogPost | undefined => {
  return blogs.find(blog => blog.id === id)
}
