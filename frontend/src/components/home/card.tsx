/**
 * @since 2023/07/16
 * @author ThinhHV <thinh@thinhhv.com>
 * @description description
 * @copyright (c) 2023 Company Platform
 */

import { ReactNode } from 'react'
import ReactMarkdown from 'react-markdown'

export default function Card({
  title,
  description,
  demo,
  actions,
  large,
}: {
  title: ReactNode | string
  description: string
  demo: ReactNode
  actions?: ReactNode
  large?: boolean
}) {
  return (
    <div
      className={`relative col-span-1 flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md ${
        large ? 'md:col-span-2' : ''
      }`}
    >
      <div className="flex h-72 items-center justify-center overflow-hidden">{demo}</div>
      <div className="mx-auto mt-5 px-5 text-left">
        <h2 className="mb-5 bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display text-xl font-bold text-transparent md:text-xl md:font-normal">
          {title}
        </h2>
        <div className="prose-sm leading-normal text-gray-500 md:prose">
          <ReactMarkdown
            components={{
              a: ({ node: _, ...props }) => (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  {...props}
                  className="font-medium text-gray-800 underline transition-colors"
                />
              ),
              code: ({ node: _, ...props }) => (
                <code
                  {...props}
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore (to fix "Received `true` for a non-boolean attribute `inline`." warning)
                  inline="true"
                  className="rounded-sm bg-gray-100 px-1 py-0.5 font-mono font-medium text-gray-800"
                />
              ),
            }}
          >
            {description}
          </ReactMarkdown>
        </div>
      </div>
      <div className="flex-1"></div>
      {actions && <div className="mx-auto my-5 text-center">{actions}</div>}
    </div>
  )
}
