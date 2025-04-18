import { useReducer, ChangeEvent } from 'react'

interface NameInputProps {
  name?: string
  onChange?: (name: string) => void
}

const NameInput = (props: NameInputProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.onChange?.(event.target.value)
  }
  return (
    <input
      className="border-2 border-blue-500"
      title="name"
      placeholder="name"
      type="text"
      onChange={handleChange}
      value={props.name ?? ''}
    ></input>
  )
}

interface AgeProps {
  age: number
  onChange?: (age: number) => void
}

const Age = (props: AgeProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.onChange?.(parseInt(event.target.value))
  }
  return (
    <input
      className="border-2 border-red-500"
      title="age"
      placeholder="age"
      type="number"
      onChange={handleChange}
      value={props.age ?? 0}
    ></input>
  )
}

interface CardProps {
  name: string
  age: number
  onClick?: () => void
  onChangeName?: (name: string) => void
  onChangeAge?: (age: number) => void
}

const Card = (props: CardProps) => {
  return (
    <div className="flex flex-col gap-2 border-2 border-green-500 p-2">
      <Age age={props.age} onChange={props.onChangeAge} />
      <NameInput name={props.name} onChange={props.onChangeName} />
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
  const [state, dispatch] = useReducer(parentReducer, {
    name: 'foo',
    age: 0,
  })

  const handleNameChange = (name: string) => {
    dispatch({ type: 'setName', payload: name })
  }

  const handleAgeChange = (age: number) => {
    dispatch({ type: 'setAge', payload: age })
  }

  const handleClick = () => {
    console.log('clicked')
  }

  return (
    <div>
      <div className="flex flex-col gap-2">
        <span>{state.name}</span>
        <span>{state.age}</span>
      </div>
      <Card name={state.name} age={state.age} onClick={handleClick} onChangeName={handleNameChange} onChangeAge={handleAgeChange} />
    </div>
  )
}

export default function ParentChildren() {
  return <Parent />
}
