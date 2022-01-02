import { useState, useEffect } from 'react'
function CalculateBmi() {
  const [height, setHeight] = useState(null)
  const [weight, setWeight] = useState(null)
  const [bmi, setBmi] = useState(0) // vücut kitle endeksi

  const handleSubmit = (e) => {
    e.preventDefault()

    const _bmi = weight / (height * height)
    setBmi(_bmi)
  }

  return (
    <div class="w-full max-w-xs">
      <form
        class="bg-sky-100 shadow-lg shadow-sky-400/50 rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={(e) => handleSubmit(e)}
      >
        {bmi > 0 && (
          <p className="text-md text-center">
            <strong>VKE:</strong> {bmi.toFixed(2)}
          </p>
        )}
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Boyunuz
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="1.70"
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Kilonuz
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="75"
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
