import logo from "./logo.svg"
import "./App.css"

import React from "react"
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil"
import CharacterCounter from "./CharacterCounter"

function App() {
  return (
    <>
      <RecoilRoot>
        <CharacterCounter />
      </RecoilRoot>
    </>
  )
}

export default App
