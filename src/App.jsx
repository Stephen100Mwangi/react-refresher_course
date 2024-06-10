/* eslint-disable no-unused-vars */
import React from 'react'
import Header from './components/Header'
import Card from './components/Card'
import Greeting from './components/Greeting'
import Mapping from './components/Mapping'
import ObjectData from './components/ObjectData'
import Click from './components/Click'
import Counter from './components/Counter'
import Change from './components/Change'
import ColorPicker from './components/ColorPicker'
import UpdaterFunction from './components/UpdaterFunction'
import Objects from './components/Objects'
import Arrays from './components/Arrays'
import TodoList from './components/TodoList'
import ObjectArrays from './components/ObjectArrays'
import To_Do from './components/To_Do'
import EffectsHook from './components/EffectsHook'
import Window from './components/Window'
import DigitalClock from './components/DigitalClock'
import ComponentA from './components/USECONTEXT/ComponentA'
import UseRef from './components/USEREF/UseRef'
import StopWatch from './components/StopWatch'

const App = () => {
  return (
    <div>
      <Header></Header>
      <div className='flex flex-row flex-wrap items-center gap-5 justify-center'>
        <Card username="Mwangi Stephen" text="I love coding" image="https://picsum.photos/200"></Card>
        <Card username="Joe Mzito" text="Success is not final, failure is not fatal: it is the courage to continue that counts" image="https://picsum.photos/120"></Card>
        <Card username="John Wick" text="Nothing beats the power of a focused mind" image="https://picsum.photos/101"></Card>
        <Card></Card>
      </div>
      <Greeting />
      <Mapping />
      <ObjectData />
      <Click />
      <Counter />
      <Change />
      <ColorPicker />
      <UpdaterFunction />
      <Objects />
      <Arrays />
      <TodoList />
      <ObjectArrays />
      <To_Do />
      <EffectsHook />
      <Window></Window>
      <DigitalClock></DigitalClock>
      <ComponentA></ComponentA>
      <UseRef />
      <StopWatch></StopWatch>
      
    </div>
  )
}

export default App
