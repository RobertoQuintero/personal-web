import { motion } from "framer-motion";
import SeoComponent from "../../components/Atoms/SeoComponent";

const seo = {
  title: "Acerca de mi",
  description: "Bienvenidos a mi página web gracias por visitarme",
  url: "https://robertoquintero.vercel.app/about",
  imageUrl: "https://robertoquintero.vercel.app/escuela.jpg",
};

const About = () => {
  return (
    <>
      <main className="break-points">
        <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
          <SeoComponent seo={seo} />
          <div className="image__container">
            <img src="escuela.jpg" alt="img" />
          </div>
          <h2 className="title">Una pequeña descripción.</h2>
          <p className="paragraph">
            Hola! Mi nombre es Roberto Carlos Quintero Martinez, egresado de la
            carrera de Ing. en Sistemas Computacionales del Tec de Poza Rica.
          </p>
          <p className="paragraph">
            Desde principios del 2018 a la fecha, me he dedicado a aprender de
            manera autodidacta, todo sobre el maravilloso mundo de la web,
            enfocado principalmente en Frontend. Comencé estudiando con videos
            de Youtube y leyendo algunos libros que los instructores
            recomendaban. Poco a poco fui ganando habilidad descubriendo rutas
            de aprendizaje que proporcionan distintas plataformas de educación
            online.
          </p>
          <p className="paragraph">
            Estudiando cuando encontraba algo de tiempo libre, pues mi empleo no
            tenía nada que ver con la programación ni la informática, consegui
            desarrollar varios proyectos practicando con diferentes tecnologías
            web, investigando e invirtiendo muchas horas para resover problemas
            que normalmente se presentan.
          </p>
          <p className="paragraph">
            Pude concluir cursos de tecnologías como HTML5, CSS, Javascript,
            Node, Firebase, Git, React, React Native, entre otros, y
            continuamente intento agregar algun conocimiento extra a mi stack de
            herramientas.
          </p>
          <p className="paragraph">
            Uno puede lograr tanto como se empeñe en conseguirlo, es un trabajo
            diario en el que constantemente se debe buscar automotivación y ser
            muy perseverante.
          </p>
          <p className="paragraph">
            Hice esta página para mostrar algunos de los proyectos que he
            relizado y asi facilitar el contacto en diferentes medios sociales,
            para todo aquel que necesite apoyo, asesoria, quien quiera aprender
            sobre la elaboración de paginas web o necesite llevar a cabo algun
            proyecto, ofrezco mi servicio como desarrollador web.
          </p>
          <p className="paragraph">Gracias por llegar hasta aquí!</p>
          <p className="paragraph">Tu amigo Roberto.</p>
        </motion.div>
      </main>
      <style jsx>{`
        main {
          min-height: 100vh;
          padding: 100px 0 15px;
          color: #fff;
          font-family: "Poppins", sans-serif;
          font-size: 15px;
        }
        .paragraph {
          padding: 10px 15px;
        }
        .title {
          padding: 10px 15px;
        }
        .image__container {
          max-width: 500px;
          margin: 15px auto;
          padding: 0 15px;
        }
        img {
          border-radius: 6px;
          width: 100%;
        }

        @media (min-width: 990px) {
          main {
            font-size: 16px;
          }
        }
      `}</style>
    </>
  );
};

export default About;
