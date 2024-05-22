export default function AboutPage() {
  return (
    <div className="container mx-auto py-12">
      {/* Adicione margens e padding */}
      <h1 className="text-3xl font-bold mb-8">Sobre Mim</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Grid responsivo */}
        {/* Seção "Projetos" */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Projetos</h2>
          <p>Em breve...</p> {/* Placeholder para descrição */}
          {/* Lista de projetos (cards ou links) */}
        </section>
        {/* Seção "Formação" */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Formação</h2>
          <p>Em breve...</p> {/* Placeholder para descrição */}
          {/* Lista de formações (nome da instituição, curso, etc.) */}
        </section>
        {/* Seção "Stack" */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Stack Tecnológico</h2>
          <p>Em breve...</p> {/* Placeholder para descrição */}
          {/* Lista de tecnologias (ícones ou texto) */}
        </section>
        {/* Seção "Experiência" (opcional) */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Experiência Profissional
          </h2>
          <p>Em breve...</p> {/* Placeholder para descrição */}
          {/* Lista de experiências (empresa, cargo, período) */}
        </section>
      </div>
    </div>
  );
}
