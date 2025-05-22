import Link from 'next/link';

import Card from '../components/Card';
import PageHeader from '../components/PageHeader';

export default function Proyectos() {
  return (
    <div>
      <PageHeader
        title="Proyectos STEAM"
        description="Explora nuestra colección de proyectos prácticos organizados por nivel y área de conocimiento."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Proyectos Nivel I
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

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Proyectos Nivel II
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
                href="/proyectos/secundaria/robot-seguidor"
                className="text-blue-600 hover:text-blue-800"
              >
                Ver proyecto →
              </Link>
            </Card>

            <Card>
              <h3 className="font-semibold text-lg mb-2">
                Simulación de Circuitos
              </h3>
              <p className="text-gray-600 mb-4">
                Aprende a diseñar y simular circuitos electrónicos usando
                Tinkercad.
              </p>
              <Link
                href="/proyectos/secundaria/simulacion-circuitos"
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
                href="/proyectos/secundaria/intro-arduino"
                className="text-blue-600 hover:text-blue-800"
              >
                Ver proyecto →
              </Link>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Proyectos Nivel III
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <h3 className="font-semibold text-lg mb-2">IoT con ESP32</h3>
              <p className="text-gray-600 mb-4">
                Desarrollo de aplicaciones IoT usando ESP32 y plataformas en la
                nube.
              </p>
              <Link
                href="/proyectos/universidad/iot-esp32"
                className="text-blue-600 hover:text-blue-800"
              >
                Ver proyecto →
              </Link>
            </Card>

            <Card>
              <h3 className="font-semibold text-lg mb-2">
                Visión por Computadora
              </h3>
              <p className="text-gray-600 mb-4">
                Implementación de algoritmos de visión usando OpenCV y Python.
              </p>
              <Link
                href="/proyectos/universidad/vision-computadora"
                className="text-blue-600 hover:text-blue-800"
              >
                Ver proyecto →
              </Link>
            </Card>

            <Card>
              <h3 className="font-semibold text-lg mb-2">Machine Learning</h3>
              <p className="text-gray-600 mb-4">
                Introducción práctica al aprendizaje automático con TensorFlow.
              </p>
              <Link
                href="/proyectos/universidad/machine-learning"
                className="text-blue-600 hover:text-blue-800"
              >
                Ver proyecto →
              </Link>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
