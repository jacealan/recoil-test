import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil"
import { textState } from "./atom"
import TextInput from "./TextInput"
import CharacterCount from "./ChracterCount"

function CharacterCounter() {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  )
}

export default CharacterCounter
