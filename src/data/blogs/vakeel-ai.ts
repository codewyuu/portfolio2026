import { BlogPost } from '@/types/blog'

export const vakeelAi: BlogPost = {
  id: 'vakeel-ai-case-research-engine',
  title: 'Inside Vakeel AI: Building Legal Search for 5.2 Crore+ Cases',
  readTime: '4 min read',
  externalUrl: '',
  author: 'Yuvraj Sharma',
  date: '2025-12-10',
  image: '/mag2.jpg',
  tags: ['Vakeel AI', 'LegalTech', 'NLP', 'Semantic Search', 'Gemini'],
  content: [
    'Vakeel AI was designed to make legal research faster for lawyers and citizens by turning complex case repositories into queryable answers.',
    '',
    'Core system choices:',
    '',
    '- NLP intent routing for legal-domain queries',
    '- Semantic retrieval and ranking over Supreme, High, and District Court judgments',
    '- AI-assisted drafting and summarization with Gemini-powered workflows',
    '- Product architecture scaled for 50+ active users with consistent response quality',
    '',
    'This reduced legal documentation time by roughly 70% while keeping answers grounded in case context.'
  ].join('\n')
}
