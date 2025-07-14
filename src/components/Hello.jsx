import { useState } from "react"

export default function Hello() {
  const chrome_version = api.chrome()
  const node_version = api.node()
  const electron_version = api.electron()
  const [counter, setCounter] = useState(0)

  return (
    <div className="flex flex-col gap-3 items-center justify-center min-h-screen">
      <h1 className="text-3xl text-center">Electron with react and tailwind css starter code.</h1>
      <p className="text-center">~ Monsur</p>
      <div>
        <p className="text-center">Chrome version: {chrome_version}</p>
        <p className="text-center">Node version: {node_version}</p>
        <p className="text-center">Electron version: {electron_version}</p>
      </div>
      <div>
        <button className="px-2 py-1 rounded-lg bg-slate-900 shadow-2xl" onClick={() => setCounter(counter + 1)}>{counter} Clicks!!</button>
      </div>


    </div>
  )
}