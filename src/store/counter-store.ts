import { create } from 'zustand'

export type ICounterState = {
  count: number
}

export type ICounterAction = {
  increment: (count: ICounterState['count']) => void
  decrement: (count: ICounterState['count']) => void
  reset: () => void
}

export const useCounterStore = create<ICounterState & ICounterAction>(
  (set) => ({
    count: 0,
    increment: (count) => {
      console.log(useCounterStore.getState())
      if (count === 10) {
        return set({ count: 0 })
      }

      return set((state) => ({ count: state.count + 1 }))
    },
    decrement: (count) => {
      if (count === 0) {
        return
      }

      return set((state) => ({ count: state.count - 1 }))
    },
    reset: () => set({ count: 0 }),
  })
)
