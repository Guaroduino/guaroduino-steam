import Link from 'next/link';

import Card from '../components/Card';
import PageHeader from '../components/PageHeader';

export default function Secundaria() {
  return (
    <div>
      <PageHeader
        title="Secundaria"
        description="Proyectos y recursos educativos para estudiantes de secundaria, diseñados para profundizar en conceptos STEAM y desarrollar habilidades prácticas."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Proyectos de Robótica
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <h3 className="font-semibold text-lg mb-2">
                Robot Seguidor de Línea
              </h3>
              <p className="text-gray-600 mb-4">
                Construye un robot que sigue líneas usando sensores y
                programación básica.
              </p>
              <Link
                href="/proyectos/robot-seguidor"
                className="text-blue-600 hover:text-blue-800"
              >
                Ver proyecto →
              </Link>
            </Card>

            <Card>
              <h3 className="font-semibold text-lg mb-2">Brazo Robótico</h3>
              <p className="text-gray-600 mb-4">
                Diseña y construye un brazo robótico controlado por
                servomotores.
              </p>
              <Link
                href="/proyectos/brazo-robotico"
                className="text-blue-600 hover:text-blue-800"
              >
                Ver proyecto →
              </Link>
            </Card>

            <Card>
              <h3 className="font-semibold text-lg mb-2">
                Robot Evita Obstáculos
              </h3>
              <p className="text-gray-600 mb-4">
                Crea un robot autónomo que detecta y evita obstáculos en su
                camino.
              </p>
              <Link
                href="/proyectos/robot-obstaculos"
                className="text-blue-600 hover:text-blue-800"
              >
                Ver proyecto →
              </Link>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Electrónica y Programación
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <h3 className="font-semibold text-lg mb-2">
                Simulación de Circuitos
              </h3>
              <p className="text-gray-600 mb-4">
                Aprende a diseñar y simular circuitos electrónicos usando
                Tinkercad.
              </p>
              <Link
                href="/proyectos/simulacion-circuitos"
                className="text-blue-600 hover:text-blue-800"
              >
                Ver proyecto →
              </Link>
            </Card>

            <Card>
              <h3 className="font-semibold text-lg mb-2">
                Programación con Arduino
              </h3>
              <p className="text-gray-600 mb-4">
                Introducción a la programación de microcontroladores con
                Arduino.
              </p>
              <Link
                href="/proyectos/intro-arduino"
                className="text-blue-600 hover:text-blue-800"
              >
                Ver proyecto →
              </Link>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Recursos Adicionales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <h3 className="font-semibold text-lg mb-2">
                Guía de Componentes
              </h3>
              <p className="text-gray-600 mb-4">
                Catálogo detallado de componentes electrónicos comunes y su uso.
              </p>
              <Link
                href="/recursos/guia-componentes"
                className="text-blue-600 hover:text-blue-800"
              >
                Ver guía →
              </Link>
            </Card>

            <Card>
              <h3 className="font-semibold text-lg mb-2">
                Ejercicios de Programación
              </h3>
              <p className="text-gray-600 mb-4">
                Colección de ejercicios prácticos para mejorar tus habilidades.
              </p>
              <Link
                href="/recursos/ejercicios-programacion"
                className="text-blue-600 hover:text-blue-800"
              >
                Ver ejercicios →
              </Link>
            </Card>

            <Card>
              <h3 className="font-semibold text-lg mb-2">
                Proyectos Sugeridos
              </h3>
              <p className="text-gray-600 mb-4">
                Ideas adicionales para proyectos y experimentos.
              </p>
              <Link
                href="/recursos/proyectos-sugeridos"
                className="text-blue-600 hover:text-blue-800"
              >
                Ver más →
              </Link>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
