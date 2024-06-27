import { Skeleton } from "@/components/ui/skeleton"

export default function ExcalidrawSkeleton() {
  return (
    <div className="flex flex-col space-y-3">
      <div className="flex justify-center mt-4">
        <Skeleton className="h-10 w-2/5 rounded-md" />
      </div>
      <Skeleton
        className="rounded-xl"
        style={{ height: "80.5vh", width: "100%" }}
      />
    </div>
  )
}
