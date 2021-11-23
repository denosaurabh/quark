import create from 'zustand'

interface StoreI {
  router: unknown
  dom: HTMLDivElement
}

const useStore = create<StoreI>(() => {
  return {
    router: null,
    dom: null,
  }
})

export default useStore
