import { useState } from "react"
import { Navigate } from "react-router-dom"

export default function About() {
  const [user, setUser] = useState('Vini')

  if (!user) {
    return <Navigate to="/" replace={true}/>
  }

  return (
    <div className="about">
      <h2>About us</h2>
      <p>Eu amo muito minha bebe é eu amo</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio fugiat inventore non nostrum deleniti dolore quam id veritatis eos? Aliquam doloribus incidunt quibusdam minus dolor molestiae quod voluptates reiciendis officia.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in, obcaecati beatae harum quas magni reiciendis unde aliquam quo exercitationem porro quasi non eos quam quia aperiam a enim. Unde.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut odit facilis asperiores minus totam! Quas dolores magnam consequatur aspernatur hic soluta deleniti repellendus, quisquam illo amet, corrupti eum nihil alias!</p>

      <button onClick={() => setUser(null)}>Logout</button>
    </div>
  )
}