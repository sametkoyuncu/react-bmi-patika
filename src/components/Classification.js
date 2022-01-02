function Classification() {
  return (
    <div>
      <p className="text-md">
        VKİ hesaplamasında Dünya Sağlık Örgütü’nün obezite sınıflandırması temel
        alınır.
      </p>
      <p className="text-md mt-3">
        Ağırlığınızı boyunuzun karesine böldüğünüzde (kg/m²) çıkan sonuç, fazla
        kilolu ya da obez olup olmadığınızı belirtir.
      </p>{' '}
      <ul className="list-disc pl-10 mt-3">
        <li>
          18, 5 kg/m.'nin altında olanlar:{' '}
          <span className="text-green-500 font-bold">Zayıf</span>
        </li>
        <li>
          18.5 ile 24, 9 kg/m. arasında olanlar:{' '}
          <span className="text-sky-500 font-bold">Normal kilolu</span>
        </li>
        <li>
          25 ile 29, 9 kg/m. arasında olanlar:{' '}
          <span className="text-yellow-400 font-bold">Fazla kilolu</span>
        </li>
        <li>
          30 ile 39, 9 kg/m. arasında olanlar:{' '}
          <span className="text-orange-500 font-bold">Obez</span>
        </li>
        <li>
          40 kg/m.'nin üzerinde olanlar:{' '}
          <span className="text-red-500 font-bold">
            İleri derecede obez (morbid obez)
          </span>
          , olarak görülür.
        </li>
      </ul>
    </div>
  )
}

export default Classification
