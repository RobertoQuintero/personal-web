import { motion } from "framer-motion";
import SeoComponent from "../components/Atoms/SeoComponent";
import { ImageItem, imagesTop } from "../images";

const seo = {
  title:'Bienvenidos',
  description:'Hola yo soy Roberto Carlos Quintero, ésta es mi página web, gracias por visitarme.',
  url: 'https://robertoquintero.vercel.app',
  imageUrl:'https://robertoquintero.vercel.app/roberto.jpg'
}

 function Home() {
  return (
    
    <main className="home">
      <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate" >
      <SeoComponent seo={seo}/>
        <div className="home__card">
          <div className="home__cardImage">
            <img src="roberto.jpg" alt="roberto" />
          </div>
          <div className="home__cardText">
            <h2>Programador Javascript Jr.</h2>
            <div className="home__cardIcons">
              {imagesTop.map((image) => (
                <ImageItem key={image.name} name={image.name} />
              ))}
            </div>
            
          </div>
        </div>
      </motion.div>
      </main>
    
  );
}

export default Home