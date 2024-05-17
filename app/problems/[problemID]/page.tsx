import type { Metadata } from "next"

type Props = {
  params: {
    problemID: string
  }
}

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `${params.problemID} | Whiteboard`,
  }
}

export default function ProblemID({ params }: Props) {
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
      <div className="relative px-6 pt-10 pb-8 shadow-xl ring-1 ring-white/25 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
        <div className="flex">
          <div>Hello {params.problemID}</div>
        </div>
      </div>
    </div>
  )
}
