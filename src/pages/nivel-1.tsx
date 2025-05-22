import Link from 'next/link';

import Card from '../components/Card';
import PageHeader from '../components/PageHeader';

export default function Primaria() {
  return (
    <div>
      <PageHeader
        title="Nivel I"
        description="Recursos y proyectos educativos diseñados específicamente para principiantes, enfocados en despertar la curiosidad y el interés por STEAM desde el inicio."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Experimentos Básicos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <h3 className="font-semibold text-lg mb-2">
                Circuitos con Plastilina
              </h3>
              <p className="text-gray-600 mb-4">
                Aprende sobre electricidad creando circuitos simples usando
                plastilina conductiva.
              </p>
              <Link
                href="/proyectos/primaria/circuitos-plastilina"
                className="text-blue-600 hover:text-blue-800"
              >
                Ver proyecto →
              </Link>
            </Card>

            <Card>
              <h3 className="font-semibold text-lg mb-2">Cohete de Agua</h3>
              <p className="text-gray-600 mb-4">
                Descubre principios básicos de física y presión del aire con un
                cohete impulsado por agua.
              </p>
              <Link
                href="/proyectos/primaria/cohete-agua"
                className="text-blue-600 hover:text-blue-800"
              >
                Ver proyecto →
              </Link>
            </Card>

            <Card>
              <h3 className="font-semibold text-lg mb-2">
                Jardín de Cristales
              </h3>
              <p className="text-gray-600 mb-4">
                Explora la química creando hermosos cristales con materiales
                seguros y comunes.
              </p>
              <Link
                href="/proyectos/primaria/jardin-cristales"
                className="text-blue-600 hover:text-blue-800"
              >
                Ver proyecto →
              </Link>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Recursos para Docentes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <h3 className="font-semibold text-lg mb-2">
                Guías de Actividades
              </h3>
              <p className="text-gray-600 mb-4">
                Colección de guías paso a paso para implementar proyectos STEAM
                en el aula.
              </p>
              <Link
                href="/recursos/primaria/guias-actividades"
                className="text-blue-600 hover:text-blue-800"
              >
                Ver recursos →
              </Link>
            </Card>

            <Card>
              <h3 className="font-semibold text-lg mb-2">
                Material Descargable
              </h3>
              <p className="text-gray-600 mb-4">
                Hojas de trabajo, plantillas y material visual para apoyar el
                aprendizaje STEAM.
              </p>
              <Link
                href="/recursos/primaria/material-descargable"
                className="text-blue-600 hover:text-blue-800"
              >
                Ver recursos →
              </Link>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
