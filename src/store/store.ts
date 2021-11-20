import create from 'zustand'

interface StoreI {
  router: unknown
  dom: unknown
}

const useStore = create<StoreI>(() => {
  return {
    router: null,
    dom: null,
  }
})

export default useStore
