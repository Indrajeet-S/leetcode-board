"use client"
import { Excalidraw, convertToExcalidrawElements } from "@excalidraw/excalidraw"

// import "@excalidraw/excalidraw/index.css"

const ExcalidrawWrapper: React.FC = () => {
  // console.info(convertToExcalidrawElements([{
  //   type: "rectangle",
  //   id: "rect-1",
  //   width: 186.47265625,
  //   height: 141.9765625,
  // },]));
  return (
    <div className="flex h-screen">
      <main className="flex-grow">
        <div className="h-full">
          <Excalidraw />
        </div>
      </main>
    </div>
  )
}
export default ExcalidrawWrapper
