import Specifications from "./Specifications"
import Assessment from "./Assessment"

const Feature = () => {
  return (
    <section className="my-12 mx-auto max-w-screen-lg border grid grid-cols-2 gap-10">
        <Specifications />
        <Assessment />
    </section>
    )
}

export default Feature
