export const ElementEvent = () => {
  const handleClick = () => {
    console.log('clicked')
  }

  return <div onClick={handleClick}>ElementEvent</div>
}

export default function ElementEventPage() {
  return <ElementEvent />
}
