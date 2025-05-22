import Card from '../components/Card';
import PageHeader from '../components/PageHeader';
import Link from 'next/link';

export default function Universidad() {
  return (
    <div>
      <PageHeader
        title="Universidad"
        description="Recursos avanzados y proyectos para estudiantes universitarios, enfocados en el desarrollo de habilidades profesionales en áreas STEAM."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Proyectos Avanzados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <h3 className="font-semibold text-lg mb-2">IoT con ESP32</h3>
              <p className="text-gray-600 mb-4">
                Desarrollo de aplicaciones IoT usando ESP32 y plataformas en la nube.
              </p>
              <Link href="/proyectos/iot-esp32" className="text-blue-600 hover:text-blue-800">
                Ver proyecto →
              </Link>
            </Card>

            <Card>
              <h3 className="font-semibold text-lg mb-2">Visión por Computadora</h3>
              <p className="text-gray-600 mb-4">
                Implementación de algoritmos de visión usando OpenCV y Python.
              </p>
              <Link href="/proyectos/vision-computadora" className="text-blue-600 hover:text-blue-800">
                Ver proyecto →
              </Link>
            </Card>

            <Card>
              <h3 className="font-semibold text-lg mb-2">Machine Learning</h3>
              <p className="text-gray-600 mb-4">
                Introducción práctica al aprendizaje automático con TensorFlow.
              </p>
              <Link href="/proyectos/machine-learning" className="text-blue-600 hover:text-blue-800">
                Ver proyecto →
              </Link>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Desarrollo de Software</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <h3 className="font-semibold text-lg mb-2">Desarrollo Web Full Stack</h3>
              <p className="text-gray-600 mb-4">
                Aprende a construir aplicaciones web modernas con Next.js y APIs.
              </p>
              <Link href="/proyectos/desarrollo-web" className="text-blue-600 hover:text-blue-800">
                Ver proyecto →
              </Link>
            </Card>

            <Card>
              <h3 className="font-semibold text-lg mb-2">Aplicaciones Móviles</h3>
              <p className="text-gray-600 mb-4">
                Desarrollo de apps multiplataforma con React Native.
              </p>
              <Link href="/proyectos/apps-moviles" className="text-blue-600 hover:text-blue-800">
                Ver proyecto →
              </Link>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recursos Profesionales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <h3 className="font-semibold text-lg mb-2">Control de Versiones</h3>
              <p className="text-gray-600 mb-4">
                Guía completa de Git y metodologías de trabajo colaborativo.
              </p>
              <Link href="/recursos/git-workflow" className="text-blue-600 hover:text-blue-800">
                Ver guía →
              </Link>
            </Card>

            <Card>
              <h3 className="font-semibold text-lg mb-2">DevOps Básico</h3>
              <p className="text-gray-600 mb-4">
                Introducción a herramientas y prácticas de DevOps moderno.
              </p>
              <Link href="/recursos/intro-devops" className="text-blue-600 hover:text-blue-800">
                Ver guía →
              </Link>
            </Card>

            <Card>
              <h3 className="font-semibold text-lg mb-2">Portafolio Profesional</h3>
              <p className="text-gray-600 mb-4">
                Tips y recursos para crear un portafolio técnico destacado.
              </p>
              <Link href="/recursos/portafolio" className="text-blue-600 hover:text-blue-800">
                Ver guía →
              </Link>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
} 