import { useState } from 'react';
import PageHeader from '../../../components/PageHeader';

export default function CoheteAgua() {
  const [activeTab, setActiveTab] = useState('descripcion');

  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="Cohete de Agua"
        description="Construye y lanza un cohete propulsado por agua y aire a presión. Un proyecto divertido que combina física, ingeniería y método científico."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Info Bar */}
        <div className="bg-blue-50 p-4 rounded-lg mb-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <span className="block text-sm text-gray-500">Duración</span>
            <span className="font-medium">90 minutos</span>
          </div>
          <div>
            <span className="block text-sm text-gray-500">Nivel</span>
            <span className="font-medium">Principiante</span>
          </div>
          <div>
            <span className="block text-sm text-gray-500">Edad</span>
            <span className="font-medium">10-12 años</span>
          </div>
          <div>
            <span className="block text-sm text-gray-500">Supervisión</span>
            <span className="font-medium text-red-600">Requerida</span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            {['descripcion', 'materiales', 'instrucciones', 'seguridad'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                  py-4 px-1 border-b-2 font-medium text-sm
                  ${
                    activeTab === tab
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }
                `}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>

        {/* Content Sections */}
        <div className="prose max-w-none">
          {activeTab === 'descripcion' && (
            <div>
              <h2>Descripción</h2>
              <p>
                Este proyecto combina conceptos de física, ingeniería y método científico de una manera
                divertida y práctica. Los estudiantes aprenderán sobre presión, aerodinámica y la
                tercera ley de Newton mientras construyen y optimizan sus cohetes.
              </p>

              <h3>Objetivos de Aprendizaje</h3>
              <ul>
                <li>
                  Comprender los principios básicos de acción y reacción
                  (Tercera Ley de Newton)
                </li>
                <li>Explorar conceptos de presión del aire y aerodinámica</li>
                <li>Desarrollar habilidades de diseño y construcción</li>
                <li>
                  Practicar la recolección y análisis de datos científicos
                </li>
              </ul>
            </div>
          )}

          {activeTab === 'materiales' && (
            <div>
              <h2>Materiales Necesarios</h2>
              <ul>
                <li>
                  <strong>Botella de plástico de 2 litros</strong>
                  <ul>
                    <li>Cantidad: 1</li>
                    <li>Alternativas: Botella de 1.5 litros</li>
                  </ul>
                </li>
                <li>
                  <strong>Cartulina o goma EVA</strong>
                  <ul>
                    <li>Cantidad: 2 hojas</li>
                    <li>Para las aletas y el cono</li>
                  </ul>
                </li>
                <li>
                  <strong>Cinta adhesiva resistente al agua</strong>
                  <ul>
                    <li>Cantidad: 1 rollo</li>
                  </ul>
                </li>
                <li>
                  <strong>Tapón de corcho o goma</strong>
                  <ul>
                    <li>Cantidad: 1</li>
                    <li>Debe ajustar perfectamente en la botella</li>
                  </ul>
                </li>
                <li>
                  <strong>Bomba de aire manual con manómetro</strong>
                  <ul>
                    <li>Cantidad: 1</li>
                  </ul>
                </li>
              </ul>
            </div>
          )}

          {activeTab === 'instrucciones' && (
            <div>
              <h2>Instrucciones</h2>
              
              <h3>Preparación</h3>
              <ol>
                <li>Limpiar la botella y retirar todas las etiquetas</li>
                <li>Dibujar y recortar las aletas en la cartulina</li>
                <li>Crear el cono aerodinámico</li>
                <li>
                  Preparar el área de lanzamiento (espacio abierto de al menos
                  20x20 metros)
                </li>
              </ol>

              <h3>Construcción del Cohete</h3>
              <ol>
                <li>
                  Fijar las aletas a la botella con cinta adhesiva
                  <ul>
                    <li>
                      Distribuir 3-4 aletas equidistantes alrededor de la base
                    </li>
                    <li>Asegurar que estén bien alineadas y firmes</li>
                  </ul>
                </li>
                <li>
                  Instalar el cono en la parte superior
                  <ul>
                    <li>Usar cinta adhesiva para fijarlo</li>
                    <li>Asegurar que quede centrado</li>
                  </ul>
                </li>
                <li>
                  Realizar prueba de estabilidad
                  <ul>
                    <li>Balancear el cohete horizontalmente</li>
                    <li>Marcar el centro de gravedad</li>
                  </ul>
                </li>
              </ol>

              <h3>Lanzamiento</h3>
              <ol>
                <li>Llenar la botella con agua (1/3 de su capacidad)</li>
                <li>Insertar el tapón firmemente</li>
                <li>Conectar la bomba de aire</li>
                <li>
                  Presurizar hasta 40-50 PSI (o según las pruebas realizadas)
                </li>
                <li>Realizar cuenta regresiva y lanzar</li>
              </ol>
            </div>
          )}

          {activeTab === 'seguridad' && (
            <div>
              <h2>Medidas de Seguridad</h2>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-5 w-5 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-yellow-800">
                      Advertencias Importantes
                    </h3>
                    <div className="mt-2 text-sm text-yellow-700">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Este proyecto debe realizarse SIEMPRE bajo supervisión adulta</li>
                        <li>Usar SIEMPRE gafas de seguridad durante el lanzamiento</li>
                        <li>NO exceder la presión máxima recomendada (50 PSI)</li>
                        <li>Realizar lanzamientos SOLO en espacios abiertos</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <h3>Equipo de Seguridad Requerido</h3>
              <ul>
                <li>Gafas de seguridad para todos los participantes</li>
                <li>Guantes de trabajo (para el operador)</li>
                <li>Silbato o sistema de alerta</li>
                <li>Botiquín de primeros auxilios</li>
              </ul>

              <h3>Área de Lanzamiento</h3>
              <ul>
                <li>Espacio abierto mínimo: 20x20 metros</li>
                <li>Sin obstáculos aéreos (cables, árboles)</li>
                <li>Superficie plana y estable</li>
                <li>Perímetro de seguridad marcado</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 