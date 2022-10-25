import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil"
import { textState } from "./atom"

const charCountState = selector({
  key: "charCountState", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(textState)

    return text.length
  },
})

function CharacterCount() {
  const count = useRecoilValue(charCountState)

  return <>Character Count: {count}</>
}

export default CharacterCount
