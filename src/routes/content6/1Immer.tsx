import { produce } from 'immer'
import { useState, useEffect } from 'react'

const cityNames = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Miami']
export const Immer = () => {
  const [state, setState] = useState({
    name: 'John',
    age: 30,
    address: {
      city: cityNames[0],
      country: 'USA',
    },
  })

  const handleIncreaseAge = () => {
    setState(
      produce(state, (draft) => {
        draft.age += 1
      }),
    )
  }

  const handleChangeSameAddress = () => {
    setState(
      produce(state, (draft) => {
        // set same address city
        draft.address.city = `${draft.address.city}`
      }),
    )
  }

  const handleChangeCity = () => {
    setState(
      produce(state, (draft) => {
        const index = cityNames.indexOf(draft.address.city)
        const nextCity = cityNames[index + 1] ?? cityNames[0]
        // address 를 사실 새로 만드는 로직이 아니지만 immer 에서는 새로 만드는 것으로 처리해준다.
        draft.address.city = nextCity
      }),
    )
  }

  useEffect(() => {
    // handleChangeCity 를 호출하면 새 address 를 만들지 않고 draft.address.city 를 바꾸었지만 address 를 deps 해도 effect 가 실행 된다
    console.log(state.address)
  }, [state.address])

  return (
    <div className="flex flex-col gap-2">
      <section>
        <h1>{state.name}</h1>
        <p>{state.age}</p>
        <p>{state.address.city}</p>
        <p>{state.address.country}</p>
      </section>
      <section className="flex gap-2">
        <button className="bg-blue-500 text-white p-2 rounded-md" onClick={handleIncreaseAge}>
          Increase Age
        </button>
        <button className="bg-blue-500 text-white p-2 rounded-md" onClick={handleChangeCity}>
          Change City
        </button>
        <button className="bg-blue-500 text-white p-2 rounded-md" onClick={handleChangeSameAddress}>
          Change Same Address
        </button>
      </section>
    </div>
  )
}

export const NotImmer = () => {
  const [state, setState] = useState({
    name: 'John',
    age: 30,
    address: {
      city: 'New York',
      country: 'USA',
    },
  })

  const handleClick = () => {
    setState((prev) => {
      return {
        ...prev,
        age: prev.age + 1,
      }
    })
  }

  const handleChangeCity = () => {
    setState((prev) => {
      const index = cityNames.indexOf(prev.address.city)
      const nextCity = cityNames[index + 1] ?? cityNames[0]
      return {
        ...prev,
        address: { ...prev.address, city: nextCity },
      }
    })
  }

  const handleChangeSameAddress = () => {
    setState((prev) => {
      // 만약 같은 city 를 할당하면서 객채를 만들지않아 effect 가 실행안되게 하려면 더 많은 로직이 필요
      // 아래 같은 경우엔 오브젝트를 새로 만들기 때문에 useEffect 가 실행 된다
      return { ...prev, address: { ...prev.address, city: `${prev.address.city}` } }
    })
  }
  useEffect(() => {
    console.log(state.address)
  }, [state.address])

  return (
    <div className="flex flex-col gap-2">
      <section>
        <h1>{state.name}</h1>
        <p>{state.age}</p>
        <p>{state.address.city}</p>
        <p>{state.address.country}</p>
      </section>
      <section className="flex gap-2">
        <button className="bg-blue-500 text-white p-2 rounded-md" onClick={handleClick}>
          Increment Age
        </button>
        <button className="bg-blue-500 text-white p-2 rounded-md" onClick={handleChangeCity}>
          Change City
        </button>
        <button className="bg-blue-500 text-white p-2 rounded-md" onClick={handleChangeSameAddress}>
          Change Same Address
        </button>
      </section>
    </div>
  )
}

export default function ImmerPage() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <section className="bg-gray-100 p-4 rounded-md">
        <p>Immer</p>
        <Immer />
      </section>
      <section className="bg-gray-100 p-4 rounded-md">
        <p>Not Immer</p>
        <NotImmer />
      </section>
    </div>
  )
}
