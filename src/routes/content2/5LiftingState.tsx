import { useReducer, ChangeEvent, useState } from 'react'

interface NameInputProps {
  name?: string
}

const NameInput = (props: NameInputProps) => {
  const [name, setName] = useState(props.name)
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }
  return <input type="text" onChange={handleChange} value={name ?? ''}></input>
}

interface AgeProps {
  age: number
}

const Age = (props: AgeProps) => {
  const [age, setAge] = useState(props.age)
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAge(parseInt(event.target.value))
  }
  return <input type="number" onChange={handleChange} value={age ?? 0}></input>
}

interface CardProps {
  name: string
  age: number
  onClick?: () => void
}

const Card = (props: CardProps) => {
  return (
    <div>
      <Age age={props.age} />
      <NameInput name={props.name} />
      <button onClick={props.onClick}>Click</button>
    </div>
  )
}

interface ParentState {
  name: string
  age: number
}

type ParentAction =
  | {
      type: 'setName'
      payload: string
    }
  | {
      type: 'setAge'
      payload: number
    }

const parentReducer = (state: ParentState, action: ParentAction) => {
  switch (action.type) {
    case 'setName':
      return { ...state, name: action.payload }
    case 'setAge':
      return { ...state, age: action.payload }
    default:
      return state
  }
}

const Parent = () => {
  const [state] = useReducer(parentReducer, {
    name: 'foo',
    age: 0,
  })

  const handleClick = () => {
    console.log('clicked')
  }

  return <Card name={state.name} age={state.age} onClick={handleClick} />
}

export default function ParentChildren() {
  return <Parent />
}
