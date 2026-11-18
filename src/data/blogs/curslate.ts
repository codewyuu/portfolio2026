import { BlogPost } from '@/types/blog'

export const curslate: BlogPost = {
  id: 'curslate-performance-journey',
  title: 'CurSlate Performance Journey: 40% Faster Browser Translation',
  readTime: '3 min read',
  externalUrl: '',
  author: 'Yuvraj Sharma',
  date: '2026-02-01',
  image: '/mag3.jpg',
  tags: ['CurSlate', 'Chrome Extension', 'JavaScript', 'Babel', 'Performance'],
  content: [
    'CurSlate focused on one clear metric: deliver accurate translation previews fast enough to feel instant inside browsing flows.',
    '',
    'Optimization work that mattered most:',
    '',
    '- Modular extension architecture for predictable runtime behavior',
    '- Translation pipeline optimization to hit <300ms processing in common paths',
    '- Auto language detection and responsive preview rendering near 0.2s',
    '- Power-user controls for hover timing and keyboard-driven workflows',
    '',
    'Result: a smoother in-browser translation experience with about 40% faster performance than earlier builds.'
  ].join('\n')
}
