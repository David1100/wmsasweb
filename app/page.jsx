"use client"
import Servicios from "@/components/servicios";
import Image from "next/image";
import servicios_data from "../public/datos/servicios.json";
import Clientes from "@/components/clientes";
import Link from "next/link";

export default function Home() {

  return (
    <>
      <section className="h-screen relative bg-primary" id="s_1">
        <div className="lg:ml-72 h-screen relative">
          <Image src={'/img/imagenes/img01.png'} layout="fill"
            objectFit="cover"
            alt="Logo"
            className="filter" />
          <div className="absolute inset-0 bg-[#222269a1] mix-blend-multiply"></div>
        </div>
        <div className="lg:top-16 lg:px-8 top-6 absolute z-10 w-full">
          <div className="lg:flex hidden justify-between items-center ">
          <Link href="/#s_1"><Image src={'/img/logos/wm-white.svg'} width={220} height={50} alt="Img" className="hover:scale-105 transition-all"></Image></Link>
          </div>
          <div className="flex flex-col gap-16 lg:w-[680px] absolute lg:ml-20 lg:mt-28 mt-60 ml-5">
            <div className="flex flex-col gap-5">
              <h1 className="lg:text-5xl text-3xl">
                Ingenieria responsable con la sociedad y el medio ambiente
              </h1>
              <p className="text-lg">
                Permitimos ayudarte a que esto suceda.
              </p>
            </div>
            <button className="lg:px-3 lg:py-4 px-2 py-3 bg-secondary w-60 rounded text-gray-600 font-semibold hover:scale-105 transition-all">COMUNICATE AHORA</button>
          </div>
        </div>
      </section>
      <section className="relative bg-primary lg:p-20 px-4 lg:pt-16 pt-12 lg:text-start text-center" id="s_2">
        <h1 className="lg:text-3xl text-2xl lg:mb-16 mb-10">Servicios</h1>
        <div className="gap-3 mt-8 grid lg:grid-cols-4 grid-cols-1">
          {
            servicios_data.map((items, index) => (
              <Servicios key={`${items.titulo}-${index}`}/>
            ))
          }
        </div>
      </section>
      <section className="relative bg-primary lg:p-20 px-4 py-8" id="s_3">
        <h1 className="lg:text-3xl text-2xl text-center mb-20">Nuestros Clientes</h1>
        <div className="flex gap-2 my-8">
          <Clientes />
        </div>
      </section>
      <section className="h-screen lg:pt-32 py-28 px-3 lg:px-32 text-center" id="s_4">
        <h1 className="lg:text-3xl text-2xl mb-16">Contacto</h1>
        <div className="grid gap-2 lg:grid-cols-2 grid-cols-1 items-center">
          <div className="flex flex-col gap-5">
            <div className="relative">
              <input type="text" className="outline-none bg-transparent border-b-[1px] border-white w-full py-2" placeholder="E-mail" />
            </div>
            <textarea className="outline-none bg-transparent border-b-[1px] border-white w-full py-2" placeholder="Mensaje"></textarea>
            <button className="p-2 bg-primary rounded-md">Contactar</button>

          </div>
          <div className="lg:flex lg:justify-center hidden">
            <Image className="cursor-pointer rounded-lg" src={'/img/imagenes/contact.svg'} alt="Icon contact" width={300} height={20} />
          </div>
        </div>
      </section>
      {/* <footer className="bg-slate-950 p-5 text-center">
        <h1>Create by <a href="https://wmsas.co/site/" target="_blank" className="font-bold">WMSAS</a></h1>
      </footer>       */}
    </>
  );
}
