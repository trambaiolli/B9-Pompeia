import React, { useState } from 'react';
import { ImageAssetConfig } from '../data/images';
import { SmartImage } from '../components/SmartImage';

interface TechniquesScreenProps {
  images: Record<string, ImageAssetConfig>;
  onEditImage: (id: string) => void;
  editModeOnPage: boolean;
  onBookClick: () => void;
}

interface TechniqueItem {
  id: string;
  imageId: string;
  categoryKey: 'guardas' | 'passagens' | 'finalizacoes' | 'defesas';
  categoryBadge: string;
  level: string;
  series: string;
  modality: string;
  title: string;
  description: string;
  steps: string[];
  tip: string;
}

const TECHNIQUES_DATA: TechniqueItem[] = [
  {
    id: 'tech-1',
    imageId: 'tech_card_1',
    categoryKey: 'guardas',
    categoryBadge: 'Guarda',
    level: 'Intermediário',
    series: 'B9 Pompeia Masterclass',
    modality: 'Gi / No-Gi',
    title: 'Guarda Aranha com Gancho Único',
    description:
      'Controle dinâmico de distância desestabilizando a base do oponente através de tração de manga e pressão no bíceps.',
    steps: [
      '1. Segure a manga direita com pegada pistol grip e coloque o pé esquerdo no bíceps direito do oponente.',
      '2. Mantenha o joelho direito flexionando para fora, controlando o quadril.',
      '3. Puxe o oponente quebrando sua postura enquanto estica a perna do bíceps.',
      '4. Prossiga para a transição de raspagem ou transição para Omoplata.',
    ],
    tip: 'No B9 Jiu Jitsu Pompeia, enfatizamos manter o cotovelo colado às costelas para evitar que o adversário passe o antebraço sobre sua perna.',
  },
  {
    id: 'tech-2',
    imageId: 'tech_card_2',
    categoryKey: 'passagens',
    categoryBadge: 'Passagem',
    level: 'Iniciante',
    series: 'Fundamentos B9',
    modality: 'Apenas Gi',
    title: 'Passagem Toreando Clássica',
    description:
      'Técnica de velocidade para contornar a guarda aberta controlando as calças e redirecionando as pernas do oponente.',
    steps: [
      '1. Pegue firmemente nas barras das calças na altura dos joelhos.',
      '2. Mantenha a postura ereta com os braços estendidos e cotovelos fechados.',
      '3. Dê um passo lateral explosivo empurrando as pernas do oponente para o lado oposto.',
      '4. Feche o espaço estabilizando nos 100 quilos (Side Control).',
    ],
    tip: 'Evite inclinar o tronco para frente. Sua força vem das pernas e da gravidade, mantendo os braços firmes como cabos de aço.',
  },
  {
    id: 'tech-3',
    imageId: 'tech_card_3',
    categoryKey: 'finalizacoes',
    categoryBadge: 'Finalização',
    level: 'Todos os Níveis',
    series: 'B9 Pompeia Core',
    modality: 'Gi / No-Gi',
    title: 'Armlock Justo da Guarda Fechada',
    description:
      'A chave de braço fundamental que testa o controle de postura, isolamento de membro e elevação de quadril.',
    steps: [
      '1. Controle a gola e o pulso do mesmo lado, abrindo a guarda fechada e colocando o pé no quadril.',
      '2. Gire o quadril transversalmente cruzando a perna sobre a cabeça do oponente.',
      '3. Aperte os joelhos juntos para isolar o braço e controle o polegar para cima.',
      '4. Eleve o quadril suavemente aplicando pressão no cotovelo.',
    ],
    tip: 'No B9 Jiu Jitsu Pompeia ensinamos que o segredo não é puxar o braço para baixo, mas sim empurrar o quadril para cima com os joelhos bem unidos.',
  },
  {
    id: 'tech-4',
    imageId: 'tech_card_4',
    categoryKey: 'defesas',
    categoryBadge: 'Defesa',
    level: 'Iniciante',
    series: 'Sobrevivência B9',
    modality: 'Gi / No-Gi',
    title: 'Saída da Montada (Upa / Ponte)',
    description:
      'A principal manobra de escape defensivo quando o oponente atinge a posição de montada alta ou baixa.',
    steps: [
      '1. Trave o braço do oponente na altura do tríceps e prenda o pé do mesmo lado por fora.',
      '2. Faça uma ponte explosiva direcionando o peso do quadril diagonalmente para o lado travado.',
      '3. Vire o corpo por cima do ombro correspondente para inverter a posição.',
      '4. Conquiste a guarda fechada ou controle lateral.',
    ],
    tip: 'Nunca empurre o peito do oponente com as mãos estendidas. Cole os braços no seu próprio tronco e use a força do quadril.',
  },
  {
    id: 'tech-5',
    imageId: 'tech_card_5',
    categoryKey: 'guardas',
    categoryBadge: 'Guarda',
    level: 'Avançado',
    series: 'B9 Pompeia Masterclass',
    modality: 'Gi / No-Gi',
    title: 'Meia Guarda com Escudo de Joelho',
    description:
      'Bloqueio sólido de tronco usando o joelho superior para prevenir o amassar e criar espaço para reposição.',
    steps: [
      '1. Mantenha o joelho superior apontando para o peito do oponente como um escudo rígido.',
      '2. Posicione o antebraço inferior cruzado no pescoço ou ombro para controlar a distância.',
      '3. Segure a manga ou lapela oposta para desequilibrar.',
      '4. Transite para a meia guarda profunda ou raspagem de fundo.',
    ],
    tip: 'O escudo de joelho falha se o calcanhar encostar na sua própria bunda. Mantenha a canela ativa e o pé engatilhado.',
  },
  {
    id: 'tech-6',
    imageId: 'tech_card_6',
    categoryKey: 'finalizacoes',
    categoryBadge: 'Finalização',
    level: 'Intermediário',
    series: 'B9 Pompeia Core',
    modality: 'Gi / No-Gi',
    title: 'Mata-Leão (Rear Naked Choke)',
    description:
      'O golpe mais eficiente do jiu-jitsu aplicado a partir do controle das costas com ganchos firmes.',
    steps: [
      '1. Garanta o controle de costas com ambos os ganchos internos e pegada de cinto de segurança.',
      '2. Passe o braço estrangulador sob o queixo do oponente com o cotovelo centralizado.',
      '3. Posicione o bíceps na carótida e apoie a mão oposta na parte de trás da cabeça.',
      '4. Expanda o peito para frente enquanto fecha os cotovelos.',
    ],
    tip: 'No B9 Jiu Jitsu Pompeia, lembramos: não aperte com a força dos braços isolados. Use a expansão torácica combinada com a compressão.',
  },
];

export const TechniquesScreen: React.FC<TechniquesScreenProps> = ({
  images,
  onEditImage,
  editModeOnPage,
  onBookClick,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'catalogo' | 'cronograma'>('catalogo');
  const [activeTech, setActiveTech] = useState<TechniqueItem | null>(null);

  const filteredTechniques = TECHNIQUES_DATA.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.categoryKey === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      item.title.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.categoryBadge.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section for Techniques & Catalog */}
      <section className="relative w-full py-space-xl bg-gradient-to-br from-surface via-surface-container to-surface-container-highest overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f2ca50_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-gutter relative z-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-space-lg">
          <div className="max-w-2xl">
            <span className="text-label-lg text-primary uppercase tracking-widest block mb-space-xs font-label-lg">
              Curatela Técnica B9 Jiu Jitsu Pompeia
            </span>
            <h1 className="text-headline-xl text-on-surface font-headline-xl mb-space-md">
              Matriz de Posições &amp; Técnicas
            </h1>
            <p className="text-body-lg text-on-surface-variant">
              Explore nosso catálogo completo de jiu-jitsu com instruções passo a passo detalhadas
              por mestres, dicas de ajustes finos e progressão para todas as graduações.
            </p>
          </div>

          <div className="flex gap-space-sm items-center bg-surface-container-high p-space-sm rounded-xl shadow-lg">
            <button
              type="button"
              onClick={() => setViewMode('catalogo')}
              className={`flex items-center gap-space-xs px-space-md py-space-sm font-label-lg rounded cursor-pointer transition-colors ${
                viewMode === 'catalogo'
                  ? 'bg-primary text-on-primary font-bold'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <span className="material-symbols-outlined material-fill text-[18px]">grid_view</span>
              <span>Catálogo</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('cronograma')}
              className={`flex items-center gap-space-xs px-space-md py-space-sm font-label-lg rounded cursor-pointer transition-colors ${
                viewMode === 'cronograma'
                  ? 'bg-primary text-on-primary font-bold'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">schedule</span>
              <span>Cronograma</span>
            </button>
          </div>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="max-w-7xl mx-auto px-gutter w-full py-space-lg">
        <div className="flex flex-col md:flex-row gap-space-md items-center justify-between bg-surface-container p-space-md rounded-xl shadow-md border border-outline-variant/15">
          <div className="flex flex-wrap gap-space-xs w-full md:w-auto">
            {[
              { id: 'all', label: 'Todas' },
              { id: 'guardas', label: 'Guardas' },
              { id: 'passagens', label: 'Passagens' },
              { id: 'finalizacoes', label: 'Finalizações' },
              { id: 'defesas', label: 'Defesas' },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-space-md py-space-sm rounded font-label-lg uppercase transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-primary text-on-primary font-bold'
                    : 'bg-surface-container-high text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <span className="material-symbols-outlined absolute left-3 top-2.5 text-outline text-[20px]">
              search
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar posição, golpe ou ajuste..."
              className="w-full bg-surface-container-highest text-on-surface pl-10 pr-space-md py-2 rounded focus:outline-none focus:ring-1 focus:ring-primary text-body-md placeholder-outline"
            />
          </div>
        </div>
      </section>

      {/* Cronograma Banner when toggled */}
      {viewMode === 'cronograma' && (
        <section className="max-w-7xl mx-auto px-gutter w-full pb-space-lg">
          <div className="bg-surface-container-high p-space-lg rounded-xl border border-primary/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <span className="text-label-md text-primary uppercase">Ciclo Semanal B9 System</span>
              <h3 className="text-headline-sm text-on-surface mt-1">
                Semana 04: Controle de Guarda Aberta &amp; Transições para Finalização
              </h3>
              <p className="text-body-sm text-on-surface-variant mt-1">
                Seg/Qua: Guarda Aranha &amp; Escudo de Joelho • Ter/Qui: Passagem Toreando &amp;
                Defesas • Sex/Sáb: Finalizações &amp; Sparring Específico
              </p>
            </div>
            <button
              type="button"
              onClick={() => setViewMode('catalogo')}
              className="bg-primary text-on-primary font-label-md px-4 py-2 rounded uppercase font-bold shrink-0 cursor-pointer"
            >
              Ver Grade Completa
            </button>
          </div>
        </section>
      )}

      {/* Technique Grid Section */}
      <section className="max-w-7xl mx-auto px-gutter w-full pb-space-xl">
        {filteredTechniques.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
            {filteredTechniques.map((tech) => {
              const imgAsset = images[tech.imageId];
              return (
                <div
                  key={tech.id}
                  className="bg-surface-container rounded-xl overflow-hidden shadow-lg flex flex-col justify-between group transition-all duration-300 hover:-translate-y-0.5 border border-outline-variant/15"
                >
                  <SmartImage
                    imageId={tech.imageId}
                    src={imgAsset.url}
                    alt={imgAsset.alt}
                    className="h-56 w-full"
                    imgClassName="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    onEditClick={onEditImage}
                    showEditButton={editModeOnPage}
                  >
                    <div className="absolute top-space-sm left-space-sm bg-surface/85 backdrop-blur-md px-2.5 py-1 rounded text-label-md text-primary uppercase">
                      {tech.categoryBadge}
                    </div>
                    <div className="absolute bottom-space-sm right-space-sm bg-surface-container-high/90 px-2 py-0.5 rounded text-body-sm text-on-surface flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px] text-primary">
                        signal_cellular_alt
                      </span>
                      <span>{tech.level}</span>
                    </div>
                  </SmartImage>

                  <div className="p-space-lg flex flex-col flex-grow justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-space-xs">
                        <span className="text-body-sm text-outline uppercase tracking-wider">
                          {tech.series}
                        </span>
                        <span className="text-body-sm text-primary font-medium">
                          {tech.modality}
                        </span>
                      </div>
                      <h3 className="text-headline-md text-on-surface font-headline-md mb-space-sm">
                        {tech.title}
                      </h3>
                      <p className="text-body-md text-on-surface-variant mb-space-md">
                        {tech.description}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveTech(tech)}
                      className="w-full bg-surface-container-high text-on-surface hover:bg-primary hover:text-on-primary py-space-sm rounded font-label-lg uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Ver Passo a Passo</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-surface-container p-space-xl rounded-xl text-center">
            <p className="text-headline-sm text-on-surface">Nenhuma técnica encontrada</p>
            <p className="text-body-md text-on-surface-variant mt-1">
              Tente limpar o filtro ou buscar por outro termo.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 bg-primary text-on-primary font-label-md px-4 py-2 rounded uppercase font-bold cursor-pointer"
            >
              Mostrar Todas as Posições
            </button>
          </div>
        )}
      </section>

      {/* Professor Tips & Belt Progression Banner */}
      <section className="w-full bg-surface-container-low py-space-xl">
        <div className="max-w-7xl mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-space-xl items-center">
          <div>
            <span className="text-label-lg text-primary uppercase tracking-widest block mb-space-xs font-label-lg">
              Metodologia Exclusiva
            </span>
            <h2 className="text-headline-lg text-on-surface font-headline-lg mb-space-md">
              A Filosofia Técnica B9 Jiu Jitsu Pompeia
            </h2>
            <p className="text-body-lg text-on-surface-variant mb-space-md">
              Nossos treinos combinam a pureza do jiu-jitsu tradicional com a eficiência moderna de
              competição. Cada posição catalogada é testada exaustivamente nas principais
              competições internacionais pelos nossos atletas e professores.
            </p>
            <ul className="space-y-space-sm mb-space-lg">
              <li className="flex items-center gap-space-sm text-on-surface">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span>Ajustes finos focados em alavancas e menor gasto de energia</span>
              </li>
              <li className="flex items-center gap-space-sm text-on-surface">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span>Curriculum adaptado para iniciantes, intermediários e competidores</span>
              </li>
              <li className="flex items-center gap-space-sm text-on-surface">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span>Acompanhamento personalizado de graduação por faixa</span>
              </li>
            </ul>
            <button
              type="button"
              onClick={onBookClick}
              className="inline-block bg-primary text-on-primary font-label-lg px-space-lg py-space-md uppercase rounded hover:bg-primary-container transition-colors font-bold cursor-pointer"
            >
              Agendar Aula Experimental Grátis
            </button>
          </div>

          <div className="bg-surface-container p-space-xl rounded-xl shadow-xl border border-outline-variant/15">
            <h3 className="text-headline-md text-on-surface font-headline-md mb-space-md flex items-center gap-space-sm">
              <span className="material-symbols-outlined text-primary">military_tech</span>
              <span>Dica do Mestre da Semana</span>
            </h3>
            <blockquote className="text-body-lg text-on-surface-variant italic mb-space-md border-l-2 border-primary pl-space-md">
              "A técnica vence a força, mas o timing vence a técnica. No B9 Pompeia, ensinamos você
              a sentir o momento exato de transição antes mesmo que seu oponente perceba o
              desequilíbrio."
            </blockquote>
            <div className="flex items-center gap-space-md">
              <SmartImage
                imageId="avatar_mestre"
                src={images.avatar_mestre.url}
                alt={images.avatar_mestre.alt}
                className="w-12 h-12 rounded-full shrink-0"
                onEditClick={onEditImage}
                showEditButton={editModeOnPage}
              />
              <div>
                <h4 className="text-headline-sm text-on-surface font-headline-sm">
                  Prof. Mestre B9
                </h4>
                <p className="text-body-sm text-outline">
                  Faixa Preta 4º Grau — Head Coach B9 Pompeia
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Detail Modal */}
      {activeTech && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-md p-gutter"
          onClick={() => setActiveTech(null)}
        >
          <div
            className="bg-surface-container max-w-xl w-full p-space-xl rounded-xl shadow-2xl relative border-t-2 border-primary"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveTech(null)}
              className="absolute top-space-md right-space-md text-on-surface-variant hover:text-on-surface cursor-pointer"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <span className="text-label-md text-primary uppercase tracking-wider block mb-space-xs font-label-md">
              {activeTech.categoryBadge} • B9 Jiu Jitsu Pompeia
            </span>
            <h3 className="text-headline-lg text-on-surface font-headline-lg mb-space-md">
              {activeTech.title}
            </h3>

            <div className="mb-space-lg">
              <h4 className="text-headline-sm text-on-surface font-headline-sm mb-space-xs flex items-center gap-1">
                <span className="material-symbols-outlined text-primary text-[18px]">
                  format_list_numbered
                </span>
                <span>Passo a Passo</span>
              </h4>
              <div className="text-body-md text-on-surface-variant bg-surface-container-high p-space-md rounded space-y-2">
                {activeTech.steps.map((step, idx) => (
                  <p key={idx}>{step}</p>
                ))}
              </div>
            </div>

            <div className="mb-space-lg">
              <h4 className="text-headline-sm text-on-surface font-headline-sm mb-space-xs flex items-center gap-1">
                <span className="material-symbols-outlined text-primary text-[18px]">
                  lightbulb
                </span>
                <span>Dica do Professor (B9 Pompeia)</span>
              </h4>
              <p className="text-body-md text-on-surface-variant bg-surface-container-highest p-space-md rounded italic">
                "{activeTech.tip}"
              </p>
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setActiveTech(null)}
                className="bg-primary text-on-primary font-label-lg px-space-lg py-space-sm uppercase rounded hover:bg-primary-container transition-colors font-bold cursor-pointer"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
