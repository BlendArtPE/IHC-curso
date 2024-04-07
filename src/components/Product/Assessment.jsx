const Assessment = () => {
  return (
    <section className="flex-1">
        <h3 className="mb-4">Valoración</h3>
      <ul className="flex flex-col gap-4">
        <li className="flex gap-4">
            <div className="">
                <img src="./fotoperfil3.jpg" className="w-40 rounded-full" alt="" />
            </div>
            <div className="w-auto grid grid-cols-5">
                <div className="col-span-3 flex flex-col gap-2">
                    <h4>Carlos Fenrnadez</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium officia pariatur architecto rem tenetur labore?</p>
                </div>
                <div className="col-span-2 flex flex-col gap-2 items-end">
                <p>15/07/2020</p>
                <div className="flex">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                </div>
            </div>
        </li>
        <li className="flex gap-4">
            <div className="">
                <img src="./fotoperfil3.jpg" className="w-40 rounded-full" alt="" />
            </div>
            <div className="w-auto grid grid-cols-5">
                <div className="col-span-3 flex flex-col gap-2">
                    <h4>Carlos Fenrnadez</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium officia pariatur architecto rem tenetur labore?</p>
                </div>
                <div className="col-span-2 flex flex-col gap-2 items-end">
                <p>15/07/2020</p>
                <div className="flex">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                </div>
            </div>
        </li>
        <li className="flex gap-4">
            <div className="">
                <img src="./fotoperfil3.jpg" className="w-40 rounded-full" alt="" />
            </div>
            <div className="w-auto grid grid-cols-5">
                <div className="col-span-4 flex flex-col gap-2">
                    <h4>Carlos Fenrnadez</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium officia pariatur architecto rem tenetur labore?</p>
                </div>
                <div className="col-span-1 flex flex-col gap-2 items-end">
                <p>15/07/2020</p>
                <div className="flex">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                </div>
            </div>
        </li>
      </ul>
    </section>
  )
}

export default Assessment
