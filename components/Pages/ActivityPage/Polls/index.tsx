import Poll from './Poll'

const Polls = () => {
  return (
    <div className="flex flex-col gap-3 overflow-auto">
      <Poll />
      <Poll />
    </div>
  )
}

export default Polls
