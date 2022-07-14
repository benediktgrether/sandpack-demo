import { Sandpack } from '@codesandbox/sandpack-react'
import { nightOwl } from '@codesandbox/sandpack-themes'

export default function CodeEditor({ files }: any) {
  return (
    <Sandpack
      template="react-ts"
      files={files}
      theme={nightOwl} />
  )
}
