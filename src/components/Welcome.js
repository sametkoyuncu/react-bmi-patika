import { useBmi } from '../context/BmiContext'
function Welcome() {
  const { username, bmi } = useBmi()
  return (
    <div>
      <h1 className="text-3xl font-bold">
        Hoşgeldin, {username.length > 0 ? username : 'Ziyaretçi'}.
      </h1>
      {bmi !== 0 ? (
        <p className="text-md mt-3">Vücüt Kitle İndeksin: {bmi}</p>
      ) : (
        <p className="text-md mt-3">
          Kayıtlı veri bulunamadı. Lütfen hesaplama yapmabilmemiz için yandaki
          alanı doldurunuz. 👉
        </p>
      )}
    </div>
  )
}

export default Welcome
