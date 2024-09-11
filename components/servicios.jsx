import Image from "next/image";

export default function Servicios() {
    return (
        <div className="p-3 text-center flex flex-col gap-3 ">
            <div className="relative w-full h-72 mb-5 shadow-xl shadow-gray-900">
                <Image
                    src="/img/imagenes/img01.png"
                    alt="Logo principal" layout="fill" objectFit="cover"
                    className="rounded"
                />
            </div>
            <p className="text-base mb-5 mt-3">RESIDENCIAL</p>
            <button className="p-2 bg-secondary rounded text-lg text-gray-600 font-semibold hover:scale-105 transition-all">Ver más</button>
        </div>
    );
}
