import Aos from "aos"
import JSConfetti from "js-confetti";
import "aos/dist/aos.css";
import { useState } from "react";
import { useEffect } from "react";

const Counter = () => {
  const jsConfetti = new JSConfetti()
  const [counter, setCounter] = useState(0)
  const [counter2, setCounter2] = useState(0)

  const handlerClick1 = () => {
    setCounter(counter + 1)
    
    jsConfetti.addConfetti({
      confettiRadius: 4,
      confettiNumber: 200,
    })
    
  }
  
  const handlerClick2 = () => {
    setCounter2(counter2 + 1)
    jsConfetti.addConfetti({
      confettiRadius: 4,
      confettiNumber: 200,
    })
  }

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <main className="bg-[#f9efe6] py-4 h-max md:p-[5rem] flex justify-center items-center">
      <article className="flex w-[300px] sm:w-[500px] md:w-[600px] lg:w-auto text-center lg:text-start flex-col-reverse m-auto lg:grid px-[2rem] lg:grid-cols-[auto_481px] border border-[#6a6057] rounded-md ">
        <section className="left-rigth md:px-[2rem] pb-[2rem] py-[1rem] grid gap-8 z-10">
          <div className="grid gap-4 ">
            <h1 data-aos="fade-right" data-aos-duration="500" className="font-['Roboto'] uppercase text-[1.5rem] sm:text-[1.8rem] md:text-[2.1rem] italic font-black text-[#4f355c]">Conversaciones Transformadoras</h1>
            <p data-aos="fade-right" data-aos-duration="800" className="leading-snug">En agradecimiento por su viaje a nuestro país, todas quisiéramos regalarle algo al Padre. Pensamos en algo que lo llene de alegría y que realmente pueda llevárselo, sin ocupar espacio en las maletas. Por eso, nos propusimos entregarle muchas conversaciones transformadoras durante este tiempo de preparación... Nuestra meta es alcanzar más de 6000 con amigas actuales y más de 3000 con nuevas personas. ¿Nos ayudas a sumar?</p>
            <p data-aos="fade-right" data-aos-duration="1100" className="leading-snug lg:pr-[4.024rem]">Pulsa el botón por cada <span className="font-bold">conversación transformadora</span> que hayas tenido con una amiga actual o con una persona nueva respectivamente.</p>
            <p data-aos="fade-right" data-aos-duration="1400" className="leading-snug lg:pr-[4.024rem]"><span className="font-bold">- Hazlo cuantas veces sea necesario</span> según sea el número de conversaciones que quieras registrar</p>
          </div>
          <div className="flex flex-col px-4 sm:px-0 sm:flex-row gap-4">
            <div data-aos="zoom-in-up" data-aos-duration="500" className="bg-[#ebe5e5] shadow-lg flex flex-col gap-4 rounded-3xl items-center px-[1rem] py-[2rem]">
              <h1 className="count1 text-[#3a3a3a] font-black text-5xl">{counter}</h1>
              <button onClick={handlerClick1} className="bg-[#d96d24] hover:bg-[#e0874b] active:scale-[.98] border-2 border-transparent hover:border-2 hover:border-[#d96d24] transition-colors underline text-sm text-white py-[.2rem] px-[2rem] rounded-full">Con amigo actual</button>
            </div>
            <div data-aos="zoom-in-up" data-aos-duration="900" className="bg-[#ebe5e5] shadow-lg flex flex-col gap-4 rounded-3xl items-center px-[1rem] py-[2rem]">
              <h1 className=" text-[#3a3a3a] font-black text-5xl">{counter2}</h1>
              <button onClick={handlerClick2} className="bg-[#6869c5] hover:bg-[#8182c0] active:scale-[.98] border-2 border-transparent hover:border-2 hover:border-[#6869c5] transition-colors underline text-sm text-white py-[.2rem] px-[2rem] rounded-full">Con nueva persona</button>
            </div>
          </div>
        </section>
        <div></div>
        <section data-aos="fade-left" className="rigth-left lg:absolute lg:right-0 lg:bottom-[1rem] xl:right-[6rem] sm:flex sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[650px] lg:h-[650px] sm:w-[300px] sm:m-auto xl:bottom-[1.75rem]">
          <img className="lg:w-[650px] md:w-[400px]" src="./imagen.png" alt="" />
        </section>
      </article>
    </main>
  )
}

export default Counter