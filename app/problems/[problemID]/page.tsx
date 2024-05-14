export default function ProblemID({
  params,
}: {
  params: { problemID: string }
}) {
  return <div>Hello {params.problemID}</div>
}
