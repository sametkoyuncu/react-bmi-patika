import CalculateBmi from './CalculateBmi'
import Welcome from './Welcome'

function home() {
  return (
    <div className="flex justify-between">
      <Welcome />
      <CalculateBmi />
    </div>
  )
}

export default home
