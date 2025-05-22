import Link from 'next/link';

import PageHeader from '../../../components/PageHeader';

export default function CircuitosPlastilina() {
  return (
    <div>
      <PageHeader
        title="Circuitos con Plastilina"
        description="Aprende sobre electricidad creando circuitos simples usando plastilina conductiva"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Información General */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Información General</h2>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Duración</h3>
                <p className="text-gray-600">45 minutos</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Nivel de Dificultad</h3>
                <p className="text-gray-600">Principiante</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Edad Recomendada</h3>
                <p className="text-gray-600">8-12 años</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Supervisión Adulta</h3>
                <p className="text-gray-600">Requerida</p>
              </div>
            </div>
          </div>
        </section>

        {/* Materiales */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Materiales Necesarios</h2>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Plastilina conductiva (ver receta más abajo)</li>
              <li>Plastilina normal (aislante)</li>
              <li>LED de colores</li>
              <li>Batería de 9V</li>
              <li>Cables con pinzas cocodrilo</li>
            </ul>
          </div>
        </section>

        {/* Instrucciones */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Instrucciones</h2>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Preparación de la Plastilina Conductiva</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-600">
                  <li>Mezcla 1 taza de harina con 1/2 taza de sal</li>
                  <li>Agrega 2 cucharadas de aceite vegetal</li>
                  <li>Añade colorante alimenticio (opcional)</li>
                  <li>Incorpora agua poco a poco hasta obtener la consistencia deseada</li>
                </ol>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Montaje del Circuito</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-600">
                  <li>Forma dos tiras con la plastilina conductiva</li>
                  <li>Coloca el LED entre las tiras (respetando la polaridad)</li>
                  <li>Conecta la batería usando los cables con pinzas</li>
                  <li>¡Observa cómo se ilumina el LED!</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Tips y Consejos */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Tips y Consejos</h2>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Asegúrate de que la plastilina conductiva esté bien mezclada</li>
              <li>Si el LED no enciende, verifica su polaridad</li>
              <li>Mantén las tiras de plastilina separadas para evitar cortocircuitos</li>
              <li>Experimenta con diferentes formas y diseños</li>
            </ul>
          </div>
        </section>

        {/* Recursos Adicionales */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Recursos Adicionales</h2>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Material Descargable</h3>
                <ul className="list-disc list-inside text-blue-600">
                  <li>
                    <Link href="/recursos/guia-circuitos-plastilina.pdf">
                      Guía completa en PDF
                    </Link>
                  </li>
                  <li>
                    <Link href="/recursos/plantilla-evaluacion.pdf">
                      Plantilla de evaluación
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Enlaces Útiles</h3>
                <ul className="list-disc list-inside text-blue-600">
                  <li>
                    <a href="https://www.youtube.com/watch?v=example" target="_blank" rel="noopener noreferrer">
                      Video tutorial
                    </a>
                  </li>
                  <li>
                    <a href="https://example.com/electricidad-ninos" target="_blank" rel="noopener noreferrer">
                      Más sobre electricidad para niños
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 