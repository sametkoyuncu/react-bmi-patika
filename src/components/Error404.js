function Error404() {
  return (
    <div className="text-center">
      <p className="text-3xl font-extrabold text-red-500">Error 404</p>
      <p className="text-xl font-semibold text-zinc-800 mt-2">
        Ulaşmaya çalıştığınız sayfa bulunamadı.
      </p>
      <p className="text-xl font-semibold text-zinc-800 mt-2">
        Lütfen konrol edip tekrar deneyiniz.
      </p>
    </div>
  )
}

export default Error404
