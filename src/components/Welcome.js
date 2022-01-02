import { useState } from 'react'
function Welcome() {
  const [user, setUser] = useState('Ziyaretçi')
  return (
    <div>
      <h1 className="text-3xl font-bold">Hoşgeldin, {user}.</h1>
      <p className="text-md mt-3">
        Kayıtlı veri bulunamadı. Lütfen hesaplama yapmabilmemiz için yandaki
        alanı doldurunuz. 👉
      </p>
    </div>
  )
}

export default Welcome
