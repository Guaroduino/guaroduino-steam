import { useState } from 'react';
import Link from 'next/link';

import Card from '../../../components/Card';
import PageHeader from '../../../components/PageHeader';

export default function CoheteAgua() {
  const [activeTab, setActiveTab] = useState('descripcion');

  const tabs = [
    { id: 'descripcion', label: 'Descripción' },
    { id: 'materiales', label: 'Materiales' },
    { id: 'instrucciones', label: 'Instrucciones' },
    { id: 'seguridad', label: 'Seguridad' }
  ];

  return (
    <div>
      <PageHeader
        title="Cohete de Agua"
        description="Construye y lanza un cohete propulsado por agua y aire a presión. Este proyecto combina conceptos de física, ingeniería y método científico de una manera divertida y práctica."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Info Básica */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Duración</h3>
              <p className="mt-1 text-lg font-semibold text-gray-900">90 minutos</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Nivel</h3>
              <p className="mt-1 text-lg font-semibold text-gray-900">Principiante</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Edad Recomendada</h3>
              <p className="mt-1 text-lg font-semibold text-gray-900">10-12 años</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Supervisión Adulta</h3>
              <p className="mt-1 text-lg font-semibold text-gray-900">Sí</p>
            </div>
          </div>
        </div>

        {/* Tabs de navegación */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
                  ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }
                `}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Contenido de las tabs */}
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
                <li>Comprender los principios básicos de acción y reacción (Tercera Ley de Newton)</li>
                <li>Explorar conceptos de presión del aire y aerodinámica</li>
                <li>Desarrollar habilidades de diseño y construcción</li>
                <li>Practicar la recolección y análisis de datos científicos</li>
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
                <li>
                  <strong>Base de lanzamiento</strong>
                  <ul>
                    <li>Cantidad: 1 set</li>
                    <li>Incluida en la guía de construcción</li>
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
                <li>Dibujar y recortar las aletas en la cartulina (usar plantilla adjunta)</li>
                <li>Crear el cono aerodinámico siguiendo el patrón proporcionado</li>
                <li>Preparar el área de lanzamiento (espacio abierto de al menos 20x20 metros)</li>
              </ol>

              <h3>Construcción del Cohete</h3>
              <ol>
                <li>
                  Fijar las aletas a la botella con cinta adhesiva
                  <ul>
                    <li>Distribuir 3-4 aletas equidistantes alrededor de la base</li>
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
                <li>Presurizar hasta 40-50 PSI (o según las pruebas realizadas)</li>
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
                    <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-yellow-800">
                      Importante
                    </h3>
                    <div className="mt-2 text-sm text-yellow-700">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Este proyecto debe realizarse SIEMPRE bajo supervisión adulta</li>
                        <li>Usar SIEMPRE gafas de seguridad durante el lanzamiento</li>
                        <li>NO exceder la presión máxima recomendada (50 PSI)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <h3>Precauciones Generales</h3>
              <ul>
                <li>Mantener un perímetro de seguridad de al menos 10 metros</li>
                <li>Realizar lanzamientos solo en espacios abiertos</li>
                <li>Cancelar la actividad en condiciones de viento fuerte</li>
                <li>Verificar que el área de lanzamiento esté despejada</li>
                <li>Comprobar que las aletas estén bien fijadas antes de cada lanzamiento</li>
                <li>Confirmar que el tapón esté bien ajustado</li>
              </ul>

              <h3>Equipo de Seguridad</h3>
              <ul>
                <li>Gafas de seguridad para todos los participantes</li>
                <li>Guantes de protección para el manipulador</li>
                <li>Calzado cerrado</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 