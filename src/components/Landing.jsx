import { useEffect, useState } from "react"
import "./Landing.css"
import { getZodiacSigns } from "../utils/getZodiacSigns"

const Landing = () => {

  const [signs, setSigns] = useState(undefined)

  useEffect(() => {
    getZodiacSigns().then(data => setSigns(data))
  }, [])

  const elements = signs && signs.map(sign => {
    const signName = sign.signName[0].toUpperCase() + sign.signName.substring(1) //Here I am using javascript to capitalize the first letter in the sign name. Below I did it in the jsx
    return (
      <div key={sign.id} className="elementDiv">
        <p>{`Sign: ${signName}, the ${sign.representedBy}`}</p>
        <p>Element: {`${sign.element[0].toUpperCase() + sign.element.substring(1)}`}</p>
      </div>
    )
  })

  return (
    <div className="splash">
      <h1 className="header">Zodiac Signs!</h1>
      <div className="elementsContainer">
        {elements}
      </div>
    </div>
  )
}

export default Landing