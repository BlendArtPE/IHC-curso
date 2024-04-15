import Specifications from "./Specifications"
import Assessment from "./Assessment"

const Feature = () => {
  return (
    <section className="my-12 mx-auto xl:max-w-screen-lg lg:max-w-screen-md md:max-w-screen-sm max-w-sm grid lg:grid-cols-2 grid-cols-1 gap-10 sm:px-0 px-4">
        <Specifications />
        <Assessment />
    </section>
    )
}

export default Feature
