const Assessment = () => {
  return (
    <section className="flex-1 ">
        <h3 className="mb-4 text-lg font-semibold">Valoración</h3>
      <ul className="flex flex-col gap-4 bg-color-3 border-x border rounded-md border-color-9 px-4 py-2">
        <li className="flex gap-4">
            <div className="w-10 flex flex-col items-center">
                <img src="./fotoperfil3.jpg" className="rounded-full" alt="" />
            </div>
            <div className="w-11/12 flex flex-col">
                <div className="flex flex-row justify-between">
                    <h4 className="font-medium text-base">Carlos Fenrnadez</h4>
                    <p className="font-medium text-sm">15/07/2020</p>
                </div>
                    <div className="text-xs text-yellow-400 space-x-1">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    </div>
                    <p className="text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium officia pariatur architecto rem tenetur labore?</p>
            </div>
        </li>

        <li className="flex gap-4">
            <div className="w-10 flex flex-col items-center">
                <img src="./fotoperfil3.jpg" className="rounded-full" alt="" />
            </div>
            <div className="w-11/12 flex flex-col">
                <div className="flex flex-row justify-between">
                    <h4 className="font-medium text-base">Carlos Fenrnadez</h4>
                    <p className="font-medium text-sm">15/07/2020</p>
                </div>
                    <div className="text-xs text-yellow-400 space-x-1">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    </div>
                    <p className="text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium officia pariatur architecto rem tenetur labore?</p>
            </div>
        </li>

        <li className="flex gap-4">
            <div className="w-10 flex flex-col items-center">
                <img src="./fotoperfil3.jpg" className="rounded-full" alt="" />
            </div>
            <div className="w-11/12 flex flex-col">
                <div className="flex flex-row justify-between">
                    <h4 className="font-medium text-base">Carlos Fenrnadez</h4>
                    <p className="font-medium text-sm">15/07/2020</p>
                </div>
                    <div className="text-xs text-yellow-400 space-x-1">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    </div>
                    <p className="text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium officia pariatur architecto rem tenetur labore?</p>
            </div>
        </li>
      </ul>
    </section>
  )
}

export default Assessment
