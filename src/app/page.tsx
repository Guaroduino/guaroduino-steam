import Button from "../components/Button";
import Card from "../components/Card";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 bg-white">
      <section className="w-full max-w-xl text-center py-20">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">STEAM Venezuela</h1>
        <p className="text-gray-600 mb-8 text-lg">Plataforma educativa minimalista para impulsar Ciencia, Tecnología, Ingeniería, Artes y Matemáticas en Venezuela.</p>
        <Button className="mb-12">Explora Recursos</Button>
      </section>
      <section className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <Card>
          <h2 className="font-semibold text-lg mb-2">Primaria</h2>
          <p className="text-gray-500 text-sm">Recursos y proyectos para los primeros años escolares.</p>
        </Card>
        <Card>
          <h2 className="font-semibold text-lg mb-2">Secundaria</h2>
          <p className="text-gray-500 text-sm">Material para estudiantes de secundaria y bachillerato.</p>
        </Card>
        <Card>
          <h2 className="font-semibold text-lg mb-2">Universidad</h2>
          <p className="text-gray-500 text-sm">Contenidos avanzados y proyectos universitarios.</p>
        </Card>
      </section>
      <section className="w-full max-w-3xl">
        <h3 className="text-xl font-semibold mb-4 text-gray-900">Proyectos Destacados</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <h4 className="font-medium mb-1">Robot Seguidor de Línea</h4>
            <p className="text-gray-500 text-sm">Proyecto interdisciplinario de robótica para secundaria.</p>
          </Card>
          <Card>
            <h4 className="font-medium mb-1">Simulación de Circuitos</h4>
            <p className="text-gray-500 text-sm">Explora electrónica básica con herramientas como Tinkercad.</p>
          </Card>
        </div>
      </section>
    </main>
  );
}
