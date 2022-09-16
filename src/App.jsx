import { Carousel } from "./components/Carousel"
import { Catalog } from "./components/Catalog"
import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import { Products } from "./components/Products"

export const App = () => {
  return (
    <main>
      <Hero/>
      <Carousel/>
      <Catalog/>
      <Products/>
      <Footer/>
    </main>
  )
}
