// Forzar nuevo build para deploy minimalista
import Button from '../components/Button';
import Card from '../components/Card';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            STEAM Venezuela
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Plataforma educativa minimalista para impulsar Ciencia, Tecnología,
            Ingeniería, Artes y Matemáticas en Venezuela.
          </p>
          <Link href="/proyectos">
            <Button className="mb-12">Explora Proyectos</Button>
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link href="/primaria" className="block">
            <Card>
              <h2 className="font-semibold text-xl mb-3">Primaria</h2>
              <p className="text-gray-600">
                Recursos y proyectos para los primeros años escolares.
              </p>
            </Card>
          </Link>
          
          <Link href="/secundaria" className="block">
            <Card>
              <h2 className="font-semibold text-xl mb-3">Secundaria</h2>
              <p className="text-gray-600">
                Material para estudiantes de secundaria y bachillerato.
              </p>
            </Card>
          </Link>
          
          <Link href="/universidad" className="block">
            <Card>
              <h2 className="font-semibold text-xl mb-3">Universidad</h2>
              <p className="text-gray-600">
                Contenidos avanzados y proyectos universitarios.
              </p>
            </Card>
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">
          Proyectos Destacados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link href="/proyectos/robot-seguidor">
            <Card>
              <h3 className="font-semibold text-xl mb-2">Robot Seguidor de Línea</h3>
              <p className="text-gray-600">
                Proyecto interdisciplinario de robótica para secundaria.
              </p>
            </Card>
          </Link>
          
          <Link href="/proyectos/simulacion-circuitos">
            <Card>
              <h3 className="font-semibold text-xl mb-2">Simulación de Circuitos</h3>
              <p className="text-gray-600">
                Explora electrónica básica con herramientas como Tinkercad.
              </p>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  );
}
