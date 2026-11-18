'use client'

import { Children, FC, isValidElement, useMemo, useState } from 'react'
import { BlogPost } from '@/types/blog'
import ReactMarkdown from 'react-markdown'
import BlogReaderControls from './BlogReaderControls'
import { useTheme } from 'next-themes'

interface BlogContentProps {
  blog: BlogPost
}

export const BlogContent: FC<BlogContentProps> = ({ blog }) => {
  const [mode, setMode] = useState<'read' | 'listen'>('read')
  const [fontStep, setFontStep] = useState<0 | 1 | 2>(0)
  const { resolvedTheme, setTheme } = useTheme()

  const fontScale = useMemo(() => {
    if (fontStep === 1) return 0.86
    if (fontStep === 2) return 0.94
    return 0.78
  }, [fontStep])

  return (
    <article className="max-w-none md:pb-0">
      <header className="mb-8 sm:mb-10 md:mb-12 not-prose mx-auto max-w-[42rem] text-center">
        <h1 className="mx-auto max-w-[32rem] text-[1.05rem] sm:text-[1.2rem] md:text-[1.35rem] font-bold leading-snug tracking-[-0.01em] mb-2 sm:mb-3 whitespace-normal break-words text-center">
          {blog.title}
        </h1>
      </header>

      {blog.content && (
        <div
          className="mx-auto max-w-[42rem] transition-colors duration-300"
          style={{
            fontSize: `${fontScale}rem`,
            opacity: mode === 'listen' ? 0.92 : 1,
          }}
        >
          <ReactMarkdown
            components={{
              p: ({ children }) => {
                const nodes = Children.toArray(children)
                const firstNode = nodes[0]
                const isImageOnlyParagraph =
                  nodes.length === 1 && isValidElement(firstNode) && firstNode.type === 'img'
                if (isImageOnlyParagraph) {
                  return <p className="mt-4 mb-1.5">{children}</p>
                }
                const paragraphText = nodes
                  .map((node) => (typeof node === 'string' ? node : ''))
                  .join('')
                  .trim()
                const isFigureCaption = /^figure:/i.test(paragraphText)
                if (isFigureCaption) {
                  return (
                    <p className="mb-4 mt-0.5 text-center italic text-[0.88em] leading-[1.45] text-neutral-500 dark:text-neutral-400">
                      {children}
                    </p>
                  )
                }
                return <p className="mb-2.5 leading-[1.45] tracking-[0.001em] text-justify">{children}</p>
              },
              h1: ({ children }) => <h1 className="text-3xl sm:text-4xl font-semibold mt-5 mb-2.5 leading-tight">{children}</h1>,
              h2: ({ children }) => <h2 className="text-2xl sm:text-3xl font-semibold mt-4 mb-2 leading-tight">{children}</h2>,
              h3: ({ children }) => <h3 className="text-xl sm:text-2xl font-medium mt-3 mb-1.5 leading-tight">{children}</h3>,
              strong: ({ children }) => <strong className="font-bold">{children}</strong>,
              code: ({ className, children }) =>
                className ? (
                  <code className="block rounded-xl border border-neutral-300/80 bg-neutral-100 px-3 py-2.5 text-[0.88em] leading-relaxed text-neutral-900 dark:border-neutral-700/80 dark:bg-neutral-900 dark:text-neutral-100">
                    {children}
                  </code>
                ) : (
                  <code className="rounded-md border border-neutral-300/90 bg-neutral-100 px-1.5 py-0.5 text-[0.9em] text-neutral-900 dark:border-neutral-700/90 dark:bg-neutral-800 dark:text-neutral-100">
                    {children}
                  </code>
                ),
              pre: ({ children }) => <pre className="mb-3 mt-2 overflow-x-auto">{children}</pre>,
              img: ({ src, alt }) => (
                <img
                  src={src ?? ''}
                  alt={alt ?? ''}
                  loading="lazy"
                  className="w-full h-auto rounded-lg border border-neutral-200/70 dark:border-neutral-800/80"
                />
              ),
              a: ({ children, href }) => (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-500 hover:text-emerald-400 underline underline-offset-2"
                >
                  {children}
                </a>
              ),
              ul: ({ children }) => <ul className="list-disc pl-6 mb-2.5 space-y-1">{children}</ul>,
              ol: ({ children }) => <ol className="list-decimal pl-6 mb-2.5 space-y-1">{children}</ol>,
              li: ({ children }) => <li className="leading-[1.45] text-justify">{children}</li>,
            }}
          >
            {blog.content}
          </ReactMarkdown>
        </div>
      )}
      <BlogReaderControls
        mode={mode}
        onModeChange={setMode}
        fontStep={fontStep}
        onFontStepChange={setFontStep}
        themeMode={resolvedTheme === 'light' ? 'light' : 'dark'}
        onThemeToggle={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
      />
    </article>
  )
}
