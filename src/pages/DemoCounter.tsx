import { Button } from '@/components/ui/button'
import { useCounterStore } from '@/store/counter-store'

const DemoCounter = () => {
  const [count, increment, reset, decrement] = useCounterStore((state) => [
    state.count,
    state.increment,
    state.reset,
    state.decrement,
  ])

  return (
    <section className='container mx-auto min-h-screen grid place-content-center'>
      <section>
        <h1 className='text-3xl mb-10'>React App {count}</h1>

        <div className='flex gap-4'>
          <Button variant={'ghost'} onClick={() => decrement(count)}>
            -
          </Button>
          <Button variant={'ghost'} onClick={reset}>
            Reset
          </Button>
          <Button variant={'ghost'} onClick={() => increment(count)}>
            +
          </Button>
        </div>
      </section>
    </section>
  )
}

export default DemoCounter
