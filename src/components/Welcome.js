import { useBmi } from '../context/BmiContext'
function Welcome() {
  const { username, bmi } = useBmi()
  return (
    <div>
      <h1 className="text-3xl font-bold">
        Hoşgeldin, {username.length > 0 ? username : 'Ziyaretçi'}.
      </h1>
      {bmi !== 0 ? (
        <>
          <p className="text-md mt-3">Vücüt Kitle İndeksin: {bmi}</p>
          <p className="text-lg mt-3 font-bold text-zinc-800">
            Dünya Sağlık Örgütü Sınıflandırmasına Göre Durumunuz:
          </p>
        </>
      ) : (
        <p className="text-md mt-3">
          Kayıtlı veri bulunamadı. Lütfen hesaplama yapmabilmemiz için yandaki
          alanı doldurunuz. 👉
        </p>
      )}

      {bmi > 0 && bmi < 18.5 && (
        <p className="text-xl font-bold text-green-500">Zayıf</p>
      )}
      {bmi >= 18.5 && bmi < 25 && (
        <p className="text-xl font-bold text-sky-500">Normal</p>
      )}
      {bmi >= 25 && bmi < 30 && (
        <p className="text-xl font-bold text-yellow-400">Fazla Kilolu</p>
      )}
      {bmi >= 30 && bmi < 40 && (
        <p className="text-xl font-bold text-orange-500">Obez</p>
      )}
      {bmi > 40 && (
        <p className="text-xl font-bold text-red-500">
          {' '}
          İleri derecede obez (morbid obez)
        </p>
      )}
    </div>
  )
}

export default Welcome
