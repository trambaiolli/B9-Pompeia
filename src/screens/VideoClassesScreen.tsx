import React, { useState, useEffect } from 'react';
import { ImageAssetConfig } from '../data/images';
import { SmartImage } from '../components/SmartImage';

interface VideoClassesScreenProps {
  images: Record<string, ImageAssetConfig>;
  onEditImage: (id: string) => void;
  editModeOnPage: boolean;
  onBookClick: () => void;
  onNotify: (msg: string) => void;
}

interface VideoLesson {
  id: string;
  imageId: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  code: string;
  title: string;
  description: string;
  duration: string;
  status: 'completed' | 'in-progress' | 'not-started';
  progressText?: string;
}

const INITIAL_LESSONS: VideoLesson[] = [
  // Beginner
  {
    id: 'beg-1',
    imageId: 'video_beg_1',
    level: 'beginner',
    code: 'FUNDAMENTOS 01',
    title: 'Fundamentos da Guarda Fechada',
    description:
      'Postura correta, quebra de base do adversário e controle de braço para evitar passagens.',
    duration: '15 MIN',
    status: 'completed',
  },
  {
    id: 'beg-2',
    imageId: 'video_beg_2',
    level: 'beginner',
    code: 'FUNDAMENTOS 02',
    title: 'Fuga de Quadril e Reposição',
    description:
      'Movimentação essencial de solo para criar espaço sob pressão e retornar à guarda.',
    duration: '18 MIN',
    status: 'completed',
  },
  {
    id: 'beg-3',
    imageId: 'video_beg_3',
    level: 'beginner',
    code: 'FUNDAMENTOS 03',
    title: 'Estrangulamento Cruzado da Montada',
    description: 'Aprenda a finalizar com precisão a partir do domínio máximo da montada.',
    duration: 'EM ANDAMENTO',
    status: 'in-progress',
    progressText: '45% Assistido',
  },
  // Intermediate
  {
    id: 'int-1',
    imageId: 'video_int_1',
    level: 'intermediate',
    code: 'INTERMEDIÁRIO 01',
    title: 'Varreduras da Guarda Aranha',
    description: 'Desequilíbrio e transições dinâmicas usando o controle de mangas e bíceps.',
    duration: '22 MIN',
    status: 'completed',
  },
  {
    id: 'int-2',
    imageId: 'video_int_2',
    level: 'intermediate',
    code: 'INTERMEDIÁRIO 02',
    title: 'Entradas de De La Riva',
    description: 'Como controlar o oponente em pé e iniciar ataques de costas e perna.',
    duration: '25 MIN',
    status: 'not-started',
  },
  {
    id: 'int-3',
    imageId: 'video_int_3',
    level: 'intermediate',
    code: 'INTERMEDIÁRIO 03',
    title: 'Sequência de Omoplata e Raspagens',
    description:
      'Ataque versátil que força a defesa do adversário e gera oportunidades de transição.',
    duration: '20 MIN',
    status: 'not-started',
  },
  // Advanced
  {
    id: 'adv-1',
    imageId: 'video_adv_1',
    level: 'advanced',
    code: 'AVANÇADO 01',
    title: 'Fundamentos do Berimbolo',
    description: 'Giro completo e pegada de costas moderna a partir da guarda controlada.',
    duration: '30 MIN',
    status: 'not-started',
  },
  {
    id: 'adv-2',
    imageId: 'video_adv_2',
    level: 'advanced',
    code: 'AVANÇADO 02',
    title: 'Defesas e Saídas de Chave de Pé',
    description:
      'Proteção de joelho, alinhamento de quadril e contra-ataques seguros no jogo moderno.',
    duration: '28 MIN',
    status: 'not-started',
  },
  {
    id: 'adv-3',
    imageId: 'video_adv_3',
    level: 'advanced',
    code: 'AVANÇADO 03',
    title: 'Estratégias de Competição B9',
    description: 'Gestão de tempo, pontuação e mentalidade campeã para campeonatos oficiais.',
    duration: '35 MIN',
    status: 'not-started',
  },
];

export const VideoClassesScreen: React.FC<VideoClassesScreenProps> = ({
  images,
  onEditImage,
  editModeOnPage,
  onBookClick,
  onNotify,
}) => {
  const [activeTab, setActiveTab] = useState<'beginner' | 'intermediate' | 'advanced'>('beginner');
  const [lessons, setLessons] = useState<VideoLesson[]>(INITIAL_LESSONS);
  const [savedFeatured, setSavedFeatured] = useState(false);
  const [activeVideoModal, setActiveVideoModal] = useState<{
    title: string;
    code: string;
    description: string;
    imageId: string;
    duration: string;
    lessonId?: string;
  } | null>(null);

  // Sparring Timer State
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
  const [isRunning, setIsRunning] = useState(false);
  const [timerMode, setTimerMode] = useState<'round' | 'rest'>('round');

  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev > 1) return prev - 1;
        setIsRunning(false);
        if (timerMode === 'round') {
          onNotify('Fim do Round! Iniciando 01:00 de descanso.');
          setTimerMode('rest');
          return 60;
        } else {
          onNotify('Descanso finalizado! Pronto para o próximo round.');
          setTimerMode('round');
          return 300;
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isRunning, timerMode, onNotify]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const handleResetTimer = () => {
    setIsRunning(false);
    setTimerMode('round');
    setTimeLeft(300);
  };

  const handleMarkCompleted = (lessonId?: string) => {
    if (!lessonId) {
      onNotify('Aula Masterclass concluída com sucesso!');
      setActiveVideoModal(null);
      return;
    }
    setLessons((prev) =>
      prev.map((l) => (l.id === lessonId ? { ...l, status: 'completed', duration: '18 MIN' } : l))
    );
    onNotify('Módulo marcado como concluído!');
    setActiveVideoModal(null);
  };

  const currentLessons = lessons.filter((l) => l.level === activeTab);
  const completedCount =
    42 +
    lessons.filter((l) => l.status === 'completed').length -
    INITIAL_LESSONS.filter((l) => l.status === 'completed').length;

  return (
    <div className="flex flex-col w-full text-on-surface">
      {/* Hero / Featured Class Section */}
      <section className="relative w-full overflow-hidden bg-surface-container-lowest py-space-xl">
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-gradient-to-tr from-primary/10 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-gutter grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center relative z-10">
          <div className="lg:col-span-7 flex flex-col gap-space-md">
            <div className="flex items-center gap-space-sm">
              <span className="bg-primary text-on-primary font-label-md px-space-sm py-1 uppercase tracking-widest rounded font-bold">
                Destaque da Semana
              </span>
              <span className="text-outline text-body-sm font-mono">MÓDULO 04 • CLASSE MASTER</span>
            </div>
            <h1 className="font-headline-xl text-headline-xl text-on-surface">
              Defesa de Guarda Aranha e Transição para Chave de Braço
            </h1>
            <p className="text-body-lg text-on-surface-variant max-w-2xl">
              Dominada pelo Professor Chefe na B9 Jiu Jitsu Pompeia. Aprenda os detalhes
              fundamentais de pegada, quebra de postura e o tempo exato para o bote na transição
              rápida.
            </p>
            <div className="flex flex-wrap items-center gap-space-md pt-space-sm">
              <button
                type="button"
                onClick={() =>
                  setActiveVideoModal({
                    title: 'Defesa de Guarda Aranha e Transição para Chave de Braço',
                    code: 'MÓDULO 04 • CLASSE MASTER',
                    description:
                      'Dominada pelo Professor Chefe na B9 Jiu Jitsu Pompeia. Aprenda os detalhes fundamentais de pegada, quebra de postura e o tempo exato para o bote na transição rápida.',
                    imageId: 'video_featured',
                    duration: '24 MIN',
                  })
                }
                className="bg-primary text-on-primary font-label-lg px-space-lg py-space-md uppercase rounded flex items-center gap-space-sm hover:bg-primary-container transition-colors shadow-lg font-bold cursor-pointer"
              >
                <span className="material-symbols-outlined material-fill">play_arrow</span>
                <span>Assistir Aula Completa</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setSavedFeatured(!savedFeatured);
                  onNotify(
                    !savedFeatured
                      ? 'Aula adicionada à sua lista de favoritos!'
                      : 'Aula removida da sua lista.'
                  );
                }}
                className="bg-surface-container-high text-on-surface font-label-lg px-space-lg py-space-md uppercase rounded flex items-center gap-space-sm hover:bg-surface-container-highest transition-colors cursor-pointer"
              >
                <span
                  className={`material-symbols-outlined ${
                    savedFeatured ? 'material-fill text-primary' : ''
                  }`}
                >
                  bookmark
                </span>
                <span>{savedFeatured ? 'Salvo na Lista' : 'Salvar na Lista'}</span>
              </button>
            </div>
            <div className="flex flex-wrap items-center gap-space-lg pt-space-md text-body-sm text-outline">
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">schedule</span> Duração: 24
                min
              </div>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">signal_cellular_alt</span>{' '}
                Nível: Intermediário / Avançado
              </div>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">verified</span> B9 Pompeia
                Certified
              </div>
            </div>
          </div>

          <div
            className="lg:col-span-5 relative group cursor-pointer"
            onClick={() =>
              setActiveVideoModal({
                title: 'Defesa de Guarda Aranha e Transição para Chave de Braço',
                code: 'MÓDULO 04 • CLASSE MASTER',
                description:
                  'Dominada pelo Professor Chefe na B9 Jiu Jitsu Pompeia. Aprenda os detalhes fundamentais de pegada, quebra de postura e o tempo exato para o bote na transição rápida.',
                imageId: 'video_featured',
                duration: '24 MIN',
              })
            }
          >
            <SmartImage
              imageId="video_featured"
              src={images.video_featured.url}
              alt={images.video_featured.alt}
              className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl bg-surface-container-high"
              imgClassName="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              onEditClick={onEditImage}
              showEditButton={editModeOnPage}
            >
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                <div className="w-16 h-16 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined material-fill text-[32px]">
                    play_arrow
                  </span>
                </div>
              </div>
              <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center bg-surface/80 backdrop-blur-md px-3 py-2 rounded">
                <span className="text-body-sm font-medium text-on-surface">Prof. B9 Pompeia</span>
                <span className="text-body-sm font-mono text-primary">HD 1080p</span>
              </div>
            </SmartImage>
          </div>
        </div>
      </section>

      {/* Student Progress Bar & Quick Stats */}
      <section className="w-full bg-surface-container-low py-space-lg">
        <div className="max-w-7xl mx-auto px-gutter grid grid-cols-1 md:grid-cols-4 gap-space-md items-center">
          <div className="bg-surface-container p-space-md rounded-xl flex items-center gap-space-md border border-outline-variant/15">
            <div className="w-12 h-12 rounded bg-primary/20 text-primary flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined">school</span>
            </div>
            <div>
              <span className="text-body-sm text-outline uppercase font-label-md">
                Seu Progresso
              </span>
              <p className="text-headline-sm text-on-surface">Faixa Azul (3 Graus)</p>
            </div>
          </div>

          <div className="bg-surface-container p-space-md rounded-xl flex items-center gap-space-md border border-outline-variant/15">
            <div className="w-12 h-12 rounded bg-primary/20 text-primary flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined">movie</span>
            </div>
            <div>
              <span className="text-body-sm text-outline uppercase font-label-md">
                Aulas Assistidas
              </span>
              <p className="text-headline-sm text-on-surface">{completedCount} / 120 Módulos</p>
            </div>
          </div>

          <div className="bg-surface-container p-space-md rounded-xl flex items-center gap-space-md border border-outline-variant/15">
            <div className="w-12 h-12 rounded bg-primary/20 text-primary flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined">local_fire_department</span>
            </div>
            <div>
              <span className="text-body-sm text-outline uppercase font-label-md">
                Sequência de Treino
              </span>
              <p className="text-headline-sm text-on-surface">5 Dias Consecutivos</p>
            </div>
          </div>

          <div className="flex flex-col gap-2 bg-surface-container p-space-md rounded-xl border border-outline-variant/15">
            <div className="flex justify-between text-body-sm">
              <span className="text-outline uppercase font-label-md">Meta da Faixa</span>
              <span className="text-primary font-bold">65%</span>
            </div>
            <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
              <div className="bg-primary h-full w-[65%] rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Paths by Belt Level */}
      <section className="max-w-7xl mx-auto px-gutter py-space-xl w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg gap-space-md">
          <div>
            <span className="text-primary uppercase font-label-md tracking-wider">
              Curriculum B9 Pompeia
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mt-1">
              Trilhas de Aprendizagem por Faixa
            </h2>
          </div>

          <div className="flex gap-space-xs bg-surface-container p-1 rounded-lg border border-outline-variant/20">
            {[
              { id: 'beginner', label: 'Iniciante' },
              { id: 'intermediate', label: 'Intermediário' },
              { id: 'advanced', label: 'Avançado' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as 'beginner' | 'intermediate' | 'advanced')}
                className={`px-space-md py-space-xs rounded font-label-sm transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'text-on-primary bg-primary font-bold'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {currentLessons.map((lesson) => {
            const imgAsset = images[lesson.imageId];
            const isInProgress = lesson.status === 'in-progress';
            const isCompleted = lesson.status === 'completed';

            return (
              <div
                key={lesson.id}
                className={`bg-surface-container rounded-xl overflow-hidden flex flex-col group hover:shadow-xl transition-all ${
                  isInProgress ? 'border border-primary/40' : 'border border-outline-variant/15'
                }`}
              >
                <SmartImage
                  imageId={lesson.imageId}
                  src={imgAsset.url}
                  alt={imgAsset.alt}
                  className="relative aspect-video w-full"
                  imgClassName="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  onEditClick={onEditImage}
                  showEditButton={editModeOnPage}
                >
                  <div
                    className={`absolute top-2 right-2 px-2 py-1 rounded text-body-sm font-mono ${
                      isInProgress
                        ? 'bg-primary text-on-primary font-bold'
                        : 'bg-surface/90 text-primary'
                    }`}
                  >
                    {lesson.duration}
                  </div>
                </SmartImage>

                <div className="p-space-lg flex flex-col flex-grow justify-between">
                  <div>
                    <span className="text-outline text-body-sm font-mono">{lesson.code}</span>
                    <h3 className="font-headline-sm text-on-surface mt-1 mb-2">{lesson.title}</h3>
                    <p className="text-body-sm text-on-surface-variant line-clamp-2">
                      {lesson.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-space-md mt-4 border-t border-outline-variant/20">
                    {isCompleted && (
                      <>
                        <span className="flex items-center gap-1 text-primary text-body-sm">
                          <span className="material-symbols-outlined material-fill text-[16px]">
                            check_circle
                          </span>{' '}
                          Concluído
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            setActiveVideoModal({
                              title: lesson.title,
                              code: lesson.code,
                              description: lesson.description,
                              imageId: lesson.imageId,
                              duration: lesson.duration,
                              lessonId: lesson.id,
                            })
                          }
                          className="text-body-sm font-bold text-on-surface hover:text-primary transition-colors flex items-center gap-1 cursor-pointer"
                        >
                          Assistir Novamente{' '}
                          <span className="material-symbols-outlined text-[16px]">
                            arrow_forward
                          </span>
                        </button>
                      </>
                    )}

                    {isInProgress && (
                      <>
                        <span className="flex items-center gap-1 text-outline text-body-sm">
                          {lesson.progressText || '45% Assistido'}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            setActiveVideoModal({
                              title: lesson.title,
                              code: lesson.code,
                              description: lesson.description,
                              imageId: lesson.imageId,
                              duration: '20 MIN',
                              lessonId: lesson.id,
                            })
                          }
                          className="bg-primary text-on-primary font-label-md px-3 py-1.5 rounded uppercase hover:bg-primary-container transition-colors font-bold cursor-pointer"
                        >
                          Continuar
                        </button>
                      </>
                    )}

                    {lesson.status === 'not-started' && (
                      <>
                        <span className="flex items-center gap-1 text-outline text-body-sm">
                          Não Iniciado
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            setActiveVideoModal({
                              title: lesson.title,
                              code: lesson.code,
                              description: lesson.description,
                              imageId: lesson.imageId,
                              duration: lesson.duration,
                              lessonId: lesson.id,
                            })
                          }
                          className="bg-surface-container-high text-on-surface font-label-md px-3 py-1.5 rounded uppercase hover:bg-primary hover:text-on-primary transition-colors cursor-pointer"
                        >
                          Iniciar
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Sparring Timer & Quick Mat Tools */}
      <section className="bg-surface-container-low py-space-xl my-space-xl">
        <div className="max-w-7xl mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-space-xl items-center">
          <div className="flex flex-col gap-space-md">
            <span className="text-primary uppercase font-label-md tracking-wider">
              Ferramenta Exclusiva
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Cronômetro de Sparring B9 Pompeia
            </h2>
            <p className="text-body-lg text-on-surface-variant">
              Treine em casa com o ritmo oficial dos campeonatos. Configure rounds de 5 minutos com
              avisos sonoros de 30 segundos para otimizar seu gás e simular a intensidade do tatame.
            </p>
            <div className="flex gap-space-md pt-space-sm">
              <button
                type="button"
                onClick={() => {
                  setIsRunning(false);
                  setTimerMode('round');
                  setTimeLeft(300);
                }}
                className={`bg-surface-container p-4 rounded-xl flex-1 text-center border transition-colors cursor-pointer ${
                  timerMode === 'round' ? 'border-primary/50' : 'border-outline-variant/15'
                }`}
              >
                <span className="text-outline text-body-sm uppercase font-label-md block">
                  Duração do Round
                </span>
                <p className="text-headline-md text-on-surface mt-1">05:00 min</p>
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsRunning(false);
                  setTimerMode('rest');
                  setTimeLeft(60);
                }}
                className={`bg-surface-container p-4 rounded-xl flex-1 text-center border transition-colors cursor-pointer ${
                  timerMode === 'rest' ? 'border-primary/50' : 'border-outline-variant/15'
                }`}
              >
                <span className="text-outline text-body-sm uppercase font-label-md block">
                  Tempo de Descanso
                </span>
                <p className="text-headline-md text-on-surface mt-1">01:00 min</p>
              </button>
            </div>
          </div>

          <div className="bg-surface-container p-space-xl rounded-xl flex flex-col items-center justify-center text-center shadow-xl border border-primary/20">
            <div className="font-headline-xl text-6xl text-primary mb-space-md font-mono tabular-nums">
              {formatTime(timeLeft)}
            </div>
            <div className="flex items-center gap-space-md">
              <button
                type="button"
                onClick={() => setIsRunning(!isRunning)}
                className="bg-primary text-on-primary font-label-lg px-space-xl py-space-md uppercase rounded hover:bg-primary-container transition-colors shadow font-bold cursor-pointer"
              >
                {isRunning ? 'Pausar' : timeLeft < 300 && timeLeft > 0 ? 'Continuar' : 'Iniciar Round'}
              </button>
              <button
                type="button"
                onClick={handleResetTimer}
                className="bg-surface-container-high text-on-surface font-label-lg px-space-lg py-space-md uppercase rounded hover:bg-surface-container-highest transition-colors cursor-pointer"
              >
                Resetar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-7xl mx-auto px-gutter py-space-xl w-full">
        <div className="bg-gradient-to-r from-surface-container-high to-surface-container p-space-xl rounded-xl flex flex-col md:flex-row items-center justify-between gap-space-lg shadow-2xl relative overflow-hidden border border-outline-variant/20">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="flex flex-col gap-space-sm relative z-10">
            <span className="text-primary uppercase font-label-md tracking-wider">
              Evolua seu Jiu Jitsu
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Pronto para treinar na B9 Jiu Jitsu Pompeia?
            </h2>
            <p className="text-body-md text-on-surface-variant max-w-xl">
              Agende sua aula experimental gratuita e venha conhecer nossa estrutura completa com
              professores altamente qualificados.
            </p>
          </div>
          <button
            type="button"
            onClick={onBookClick}
            className="bg-primary text-on-primary font-label-lg px-space-xl py-space-md uppercase rounded hover:bg-primary-container transition-colors shadow-lg relative z-10 whitespace-nowrap font-bold cursor-pointer"
          >
            Agendar Aula Grátis
          </button>
        </div>
      </section>

      {/* Interactive Video Lesson Modal */}
      {activeVideoModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/85 backdrop-blur-md p-gutter"
          onClick={() => setActiveVideoModal(null)}
        >
          <div
            className="bg-surface-container max-w-3xl w-full rounded-xl overflow-hidden shadow-2xl border border-primary/30"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video bg-black">
              <SmartImage
                imageId={activeVideoModal.imageId}
                src={images[activeVideoModal.imageId].url}
                alt={images[activeVideoModal.imageId].alt}
                className="w-full h-full"
                imgClassName="w-full h-full object-cover opacity-75"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30">
                <div className="w-20 h-20 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-2xl mb-3">
                  <span className="material-symbols-outlined material-fill text-[40px]">
                    play_arrow
                  </span>
                </div>
                <span className="bg-surface/90 text-on-surface px-3 py-1 rounded text-body-sm font-mono">
                  Reproduzindo em HD 1080p • {activeVideoModal.duration}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setActiveVideoModal(null)}
                className="absolute top-4 right-4 bg-surface/80 hover:bg-surface text-on-surface p-2 rounded-full cursor-pointer"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="p-space-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <span className="text-label-md text-primary uppercase font-mono">
                  {activeVideoModal.code}
                </span>
                <h3 className="text-headline-md text-on-surface mt-1">{activeVideoModal.title}</h3>
                <p className="text-body-md text-on-surface-variant mt-1">
                  {activeVideoModal.description}
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <button
                  type="button"
                  onClick={() => handleMarkCompleted(activeVideoModal.lessonId)}
                  className="bg-primary text-on-primary font-label-md px-4 py-2.5 rounded uppercase font-bold hover:bg-primary-container transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span className="material-symbols-outlined material-fill text-[18px]">
                    check_circle
                  </span>
                  <span>Concluir Aula</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
