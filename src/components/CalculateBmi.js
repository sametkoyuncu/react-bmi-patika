import { useState } from 'react'
import { useBmi } from '../context/BmiContext'
function CalculateBmi() {
  const [height, setHeight] = useState(null)
  const [weight, setWeight] = useState(null)
  const { username, setUsername, bmi, setBmi } = useBmi()

  const handleSubmit = (e) => {
    e.preventDefault()

    let _bmi = weight / (height * height)
    _bmi = _bmi.toFixed(2)
    setBmi(_bmi)
    setUsername(username)
  }

  return (
    <div class="w-full max-w-xs">
      <form
        class="bg-sky-100 shadow-lg shadow-sky-400/50 rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Adınız
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Samet"
            required
          />
        </div>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="height"
          >
            Boyunuz
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="height"
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="1.70"
            required
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="weight"
          >
            Kilonuz
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="weight"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="75"
            required
          />
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 w-full rounded-full hover:shadow-lg focus:outline-none focus:shadow-outline transition-all"
            type="submit"
          >
            Hesapla
          </button>
        </div>
      </form>
    </div>
  )
}

export default CalculateBmi
