"use client"
import {
  Excalidraw,
  MainMenu,
  serializeAsJSON,
  WelcomeScreen,
} from "@excalidraw/excalidraw"
import Image from "next/image"
import * as React from "react"
import { ExcalidrawElement } from "@excalidraw/excalidraw/types/element/types"
import { AppState, BinaryFiles } from "@excalidraw/excalidraw/types/types"

const ExcalidrawWrapper: React.FC = () => {
  const on_change = (
    elements: readonly ExcalidrawElement[],
    appState: AppState,
    files: BinaryFiles
  ) => {
    console.log("Function invoked")
    const content = serializeAsJSON(elements, appState, files, "local")
    localStorage.setItem("excalidraw", content)
  }

  const retriveInitialData = () => {
    const content = localStorage.getItem("excalidraw")
    if (content != null) {
      return JSON.parse(content)
    }
  }

  return (
    <div style={{ height: "90.5vh", width: "100%" }}>
      <Excalidraw onChange={on_change} initialData={retriveInitialData()}>
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
