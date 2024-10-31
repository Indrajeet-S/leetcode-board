import type { Metadata } from "next"
import ExcalidrawWrapper from "@/components/custom/excalidraw-wrapper"
import { Suspense } from "react"
import ExcalidrawSkeleton from "@/app/problems/[problemID]/loading"
import { getDocumentData } from "@/lib/firebase/crud"
import { ExcalidrawInitialDataState } from "@excalidraw/excalidraw/types/types"

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

export default async function ProblemID({ params }: Props) {
  const data = await getDocumentData("excalidraw", params.problemID)
  const initialData = JSON.parse(data?.content || null) as (ExcalidrawInitialDataState |null) ;

  return (

    <Suspense fallback={<ExcalidrawSkeleton />}>
      <div className="z-100">
        <ExcalidrawWrapper identifier={params.problemID} initialData={initialData} />
      </div>
    </Suspense>
  )
}
