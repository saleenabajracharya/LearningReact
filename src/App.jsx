import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { StateExample } from './hooks/use-state'
import { EffectExample } from './hooks/use-effect'
import { ContextExample } from './hooks/use-content'
import { ReducerExample } from './hooks/use-reducer'
import { RefExample } from './hooks/use-ref'
function App() {
  return (
    <div>
      <h1>Welcome to My App</h1>
      {/* <StateExample />
      <EffectExample/> */}
      <ContextExample/>
      <ReducerExample/>
      <RefExample />
    </div>
  );
}

export default App
