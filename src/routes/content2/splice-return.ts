export const spliceReturn = <T>(array: T[], index: number, deleteCount: number, newItem?: T) => {
  const newItems = [...array]
  if (newItem) {
    newItems.splice(index, deleteCount, newItem)
  } else {
    newItems.splice(index, deleteCount)
  }
  return newItems
}
