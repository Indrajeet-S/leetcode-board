"use client"
import {
  Excalidraw,
  getSceneVersion,
  MainMenu,
  serializeAsJSON,
  WelcomeScreen,
} from "@excalidraw/excalidraw"
import Image from "next/image"
import * as React from "react"
import { ExcalidrawElement } from "@excalidraw/excalidraw/types/element/types"
import { AppState, BinaryFiles, ExcalidrawInitialDataState } from "@excalidraw/excalidraw/types/types"
import { debounce } from "@/lib/utils"
import { saveDocument } from "@/lib/firebase/client"

interface ExcalidrawWrapperProps {
  identifier: string
  initialData: ExcalidrawInitialDataState | null
}



const ExcalidrawWrapper: React.FC<ExcalidrawWrapperProps> = ({
  identifier,
  initialData
}) => {
  let lastSceneVersion = -1
  const on_change = async (
    elements: readonly ExcalidrawElement[],
    appState: AppState,
    files: BinaryFiles
  ) => {

    const sceneVersion = getSceneVersion(elements)

    if (sceneVersion > lastSceneVersion) {
      console.log("caching")
      const content = serializeAsJSON(elements, appState, files, "local")

      try {
        await saveDocument("excalidraw", identifier, { content })
        console.log("Data saved to Firestore")
      } catch (error) {
        console.error("Error saving data to Firestore:", error)
      }
      lastSceneVersion = sceneVersion
    }
  }


  return (
    <div style={{ height: "90.5vh", width: "100%" }}>
      <Excalidraw onChange={debounce(on_change, 500)} initialData={initialData}>
        <WelcomeScreen>
          <WelcomeScreen.Hints.MenuHint />
          <WelcomeScreen.Hints.ToolbarHint />
          <WelcomeScreen.Center>
            <WelcomeScreen.Center.Logo>
              <Image
                src="/center_logo.jpeg"
                alt="LC Board"
                width={200}
                height={200}
              />
            </WelcomeScreen.Center.Logo>
            <WelcomeScreen.Center.Heading>
              Notes, Made Simple!
            </WelcomeScreen.Center.Heading>
            <WelcomeScreen.Center.Menu>
              <WelcomeScreen.Center.MenuItemLoadScene />
              <WelcomeScreen.Center.MenuItemHelp />
            </WelcomeScreen.Center.Menu>
          </WelcomeScreen.Center>
          <WelcomeScreen.Hints.HelpHint />
        </WelcomeScreen>

        <MainMenu>
          <MainMenu.DefaultItems.LoadScene />
          <MainMenu.DefaultItems.Export />
          <MainMenu.DefaultItems.SaveAsImage />
          <MainMenu.DefaultItems.Help />
          <MainMenu.DefaultItems.ClearCanvas />
          <MainMenu.DefaultItems.ToggleTheme />
          <MainMenu.DefaultItems.ChangeCanvasBackground />
        </MainMenu>
      </Excalidraw>
    </div>
  )
}
export default ExcalidrawWrapper
