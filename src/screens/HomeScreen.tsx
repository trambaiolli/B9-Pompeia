import React, { useState } from 'react';
import { ImageAssetConfig } from '../data/images';
import { SmartImage } from '../components/SmartImage';

interface HomeScreenProps {
  images: Record<string, ImageAssetConfig>;
  onEditImage: (id: string) => void;
  editModeOnPage: boolean;
  onNavigate: (tab: 'inicio' | 'tecnicas-e-posicoes' | 'videoaulas' | 'planos-e-matricula') => void;
  onNotify: (msg: string) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  images,
  onEditImage,
  editModeOnPage,
  onNavigate,
  onNotify,
}) => {
  const [preferredTime, setPreferredTime] = useState('Manhã (07:00 - 11:30)');
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [studentName, setStudentName] = useState('');

  const handleReserveSlot = (slotLabel: string) => {
    setPreferredTime(slotLabel);
    const el = document.getElementById('agendar');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
    onNotify('Aula experimental agendada com sucesso! Entraremos em contato via WhatsApp.');
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full min-h-[840px] flex items-center justify-center overflow-hidden -mt-20 pt-20">
        <div className="absolute inset-0 z-0">
          <SmartImage
            imageId="home_hero"
            src={images.home_hero.url}
            alt={images.home_hero.alt}
            className="w-full h-full"
            imgClassName="w-full h-full object-cover object-center"
            onEditClick={onEditImage}
            showEditButton={editModeOnPage}
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-surface via-surface/80 to-surface/30 pointer-events-none"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-gutter w-full py-20 flex flex-col items-start justify-center">
          <div className="flex items-center gap-space-sm bg-surface-container-highest px-3 py-1 rounded mb-space-md border border-outline-variant/20">
            <span className="material-symbols-outlined material-fill text-primary text-[16px]">
              workspace_premium
            </span>
            <span className="font-label-md text-on-surface uppercase tracking-wider">
              Academia Oficial B9 Jiu Jitsu Pompeia
            </span>
          </div>

          <h1 className="font-headline-xl text-headline-xl text-on-surface max-w-3xl mb-space-md uppercase">
            DISCIPLINA, TÉCNICA E <span className="text-primary">EXCELÊNCIA</span> NO CORAÇÃO DA POMPEIA
          </h1>

          <p className="font-body-lg text-on-surface-variant max-w-xl mb-space-xl">
            Transforme seu corpo e sua mente com a metodologia de elite da B9 Jiu Jitsu Pompeia.
            Treinamento de alto nível para iniciantes e atletas avançados em um ambiente estruturado
            para o seu máximo desenvolvimento.
          </p>

          <div className="flex flex-wrap gap-space-md">
            <a
              href="#agendar"
              className="bg-primary text-on-primary font-label-lg px-space-xl py-space-md uppercase rounded hover:bg-primary-container hover:text-on-primary-container transition-colors shadow-lg flex items-center gap-space-sm font-bold"
            >
              <span>Agendar Aula Experimental</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
            <a
              href="#horarios"
              className="bg-surface-container-high text-on-surface font-label-lg px-space-xl py-space-md uppercase rounded hover:bg-surface-bright transition-colors border border-outline-variant/30"
            >
              Ver Grade de Horários
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-space-lg mt-16 w-full pt-8 border-t border-outline-variant/20">
            <div>
              <p className="font-headline-lg text-primary">100%</p>
              <p className="font-body-sm text-on-surface-variant uppercase tracking-wider mt-1">
                Foco em Evolução
              </p>
            </div>
            <div>
              <p className="font-headline-lg text-primary">+500m²</p>
              <p className="font-body-sm text-on-surface-variant uppercase tracking-wider mt-1">
                Estrutura de Elite
              </p>
            </div>
            <div>
              <p className="font-headline-lg text-primary">Faixa Preta</p>
              <p className="font-body-sm text-on-surface-variant uppercase tracking-wider mt-1">
                Professores Certificados
              </p>
            </div>
            <div>
              <p className="font-headline-lg text-primary">Pompeia</p>
              <p className="font-body-sm text-on-surface-variant uppercase tracking-wider mt-1">
                Localização Privilegiada
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-space-xl bg-surface-container-lowest relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-gutter">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl">
            <div>
              <span className="font-label-md text-primary uppercase tracking-widest block mb-space-xs">
                Nossos Valores
              </span>
              <h2 className="font-headline-lg text-on-surface">PILARES DA B9 JIU JITSU POMPEIA</h2>
            </div>
            <p className="font-body-md text-on-surface-variant max-w-md mt-space-sm md:mt-0">
              Nossa filosofia combina a tradição marcial com inovação técnica, preparando cada aluno
              para vencer dentro e fora dos tatames.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
            <div
              onClick={() => onNavigate('tecnicas-e-posicoes')}
              className="bg-surface-container p-space-lg rounded-xl flex flex-col justify-between hover:bg-surface-container-high transition-colors group cursor-pointer border border-outline-variant/15"
            >
              <div>
                <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center mb-space-lg text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined material-fill text-[24px]">
                    psychology
                  </span>
                </div>
                <h3 className="font-headline-sm text-on-surface mb-space-sm">Técnica Superior</h3>
                <p className="font-body-md text-on-surface-variant">
                  Curriculum refinado com posições atualizadas para o cenário competitivo moderno e
                  defesa pessoal altamente eficiente na B9 Jiu Jitsu Pompeia.
                </p>
              </div>
              <div className="mt-space-xl pt-space-md border-t border-outline-variant/10 flex items-center justify-between text-primary font-label-md uppercase">
                <span>Metodologia B9</span>
                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              </div>
            </div>

            <div
              onClick={() => onNavigate('videoaulas')}
              className="bg-surface-container p-space-lg rounded-xl flex flex-col justify-between hover:bg-surface-container-high transition-colors group cursor-pointer border border-outline-variant/15"
            >
              <div>
                <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center mb-space-lg text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined material-fill text-[24px]">groups</span>
                </div>
                <h3 className="font-headline-sm text-on-surface mb-space-sm">
                  Comunidade e Respeito
                </h3>
                <p className="font-body-md text-on-surface-variant">
                  Um ambiente familiar e rigoroso ao mesmo tempo. Aqui na B9 Jiu Jitsu Pompeia, o
                  progresso de um é a vitória de todos os parceiros de treino.
                </p>
              </div>
              <div className="mt-space-xl pt-space-md border-t border-outline-variant/10 flex items-center justify-between text-primary font-label-md uppercase">
                <span>União na Mat</span>
                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              </div>
            </div>

            <div
              onClick={() => onNavigate('planos-e-matricula')}
              className="bg-surface-container p-space-lg rounded-xl flex flex-col justify-between hover:bg-surface-container-high transition-colors group cursor-pointer border border-outline-variant/15"
            >
              <div>
                <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center mb-space-lg text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined material-fill text-[24px]">
                    fitness_center
                  </span>
                </div>
                <h3 className="font-headline-sm text-on-surface mb-space-sm">
                  Condicionamento Físico
                </h3>
                <p className="font-body-md text-on-surface-variant">
                  Desenvolva força explosiva, resistência cardiovascular e mobilidade articular
                  focada especificamente nas demandas do jiu-jitsu contemporâneo.
                </p>
              </div>
              <div className="mt-space-xl pt-space-md border-t border-outline-variant/10 flex items-center justify-between text-primary font-label-md uppercase">
                <span>Performance Ativa</span>
                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Schedule Section */}
      <section className="py-space-xl bg-surface relative" id="horarios">
        <div className="max-w-7xl mx-auto px-gutter">
          <div className="text-center max-w-2xl mx-auto mb-space-xl">
            <span className="font-label-md text-primary uppercase tracking-widest block mb-space-xs">
              Grade de Aulas
            </span>
            <h2 className="font-headline-lg text-on-surface mb-space-sm">
              HORÁRIOS DA B9 JIU JITSU POMPEIA
            </h2>
            <p className="font-body-md text-on-surface-variant">
              Escolha o horário ideal para a sua rotina. Turmas divididas por nível técnico e
              objetivos específicos.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg">
            {/* Morning */}
            <div className="bg-surface-container-low p-space-lg rounded-xl flex flex-col justify-between border border-outline-variant/15">
              <div>
                <div className="flex items-center justify-between mb-space-md">
                  <span className="font-label-md bg-primary-container text-on-primary-container px-3 py-1 rounded uppercase font-bold">
                    Manhã
                  </span>
                  <span className="font-body-sm text-outline font-mono">07:00 - 11:30</span>
                </div>
                <h3 className="font-headline-sm text-on-surface mb-space-md">Treinos Matinais</h3>
                <ul className="space-y-space-md">
                  <li className="flex items-center justify-between pb-space-sm border-b border-outline-variant/10">
                    <span className="font-body-md text-on-surface">Fundamentos (Seg/Qua/Sex)</span>
                    <span className="font-body-sm text-primary font-mono font-bold">07:00</span>
                  </li>
                  <li className="flex items-center justify-between pb-space-sm border-b border-outline-variant/10">
                    <span className="font-body-md text-on-surface">Competição (Ter/Qui)</span>
                    <span className="font-body-sm text-primary font-mono font-bold">08:00</span>
                  </li>
                  <li className="flex items-center justify-between pb-space-sm border-b border-outline-variant/10">
                    <span className="font-body-md text-on-surface">Avançado (Seg a Sex)</span>
                    <span className="font-body-sm text-primary font-mono font-bold">10:00</span>
                  </li>
                </ul>
              </div>
              <div className="mt-space-xl">
                <button
                  type="button"
                  onClick={() => handleReserveSlot('Manhã (07:00 - 11:30)')}
                  className="w-full block text-center bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-md py-space-sm rounded uppercase transition-colors cursor-pointer"
                >
                  Reservar Turma
                </button>
              </div>
            </div>

            {/* Evening */}
            <div className="bg-surface-container-low p-space-lg rounded-xl flex flex-col justify-between relative shadow-xl border border-primary/30">
              <div className="absolute -top-3 right-space-lg bg-primary text-on-primary text-[10px] font-label-md px-2.5 py-0.5 rounded uppercase tracking-wider font-bold">
                Mais Procurado
              </div>
              <div>
                <div className="flex items-center justify-between mb-space-md">
                  <span className="font-label-md bg-primary text-on-primary px-3 py-1 rounded uppercase font-bold">
                    Noite
                  </span>
                  <span className="font-body-sm text-outline font-mono">18:00 - 21:30</span>
                </div>
                <h3 className="font-headline-sm text-on-surface mb-space-md">Turmas Noturnas</h3>
                <ul className="space-y-space-md">
                  <li className="flex items-center justify-between pb-space-sm border-b border-outline-variant/10">
                    <span className="font-body-md text-on-surface">
                      Iniciantes / Branco (Seg/Qua/Sex)
                    </span>
                    <span className="font-body-sm text-primary font-mono font-bold">18:30</span>
                  </li>
                  <li className="flex items-center justify-between pb-space-sm border-b border-outline-variant/10">
                    <span className="font-body-md text-on-surface">Geral / Avançado (Seg a Sex)</span>
                    <span className="font-body-sm text-primary font-mono font-bold">19:30</span>
                  </li>
                  <li className="flex items-center justify-between pb-space-sm border-b border-outline-variant/10">
                    <span className="font-body-md text-on-surface">No Gi / Sem Kimono (Ter/Qui)</span>
                    <span className="font-body-sm text-primary font-mono font-bold">20:30</span>
                  </li>
                </ul>
              </div>
              <div className="mt-space-xl">
                <button
                  type="button"
                  onClick={() => handleReserveSlot('Noite - Iniciantes (18:30)')}
                  className="w-full block text-center bg-primary hover:bg-primary-container text-on-primary font-label-md py-space-sm rounded uppercase transition-colors font-bold cursor-pointer"
                >
                  Reservar Turma
                </button>
              </div>
            </div>

            {/* Saturday */}
            <div className="bg-surface-container-low p-space-lg rounded-xl flex flex-col justify-between border border-outline-variant/15">
              <div>
                <div className="flex items-center justify-between mb-space-md">
                  <span className="font-label-md bg-primary-container text-on-primary-container px-3 py-1 rounded uppercase font-bold">
                    Sábados
                  </span>
                  <span className="font-body-sm text-outline font-mono">09:00 - 12:00</span>
                </div>
                <h3 className="font-headline-sm text-on-surface mb-space-md">Finais de Semana</h3>
                <ul className="space-y-space-md">
                  <li className="flex items-center justify-between pb-space-sm border-b border-outline-variant/10">
                    <span className="font-body-md text-on-surface">Treino Aberto / Sparring</span>
                    <span className="font-body-sm text-primary font-mono font-bold">09:00</span>
                  </li>
                  <li className="flex items-center justify-between pb-space-sm border-b border-outline-variant/10">
                    <span className="font-body-md text-on-surface">Kids B9 (Infantil)</span>
                    <span className="font-body-sm text-primary font-mono font-bold">10:30</span>
                  </li>
                </ul>
              </div>
              <div className="mt-space-xl">
                <button
                  type="button"
                  onClick={() => handleReserveSlot('Sábado - Manhã')}
                  className="w-full block text-center bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-md py-space-sm rounded uppercase transition-colors cursor-pointer"
                >
                  Reservar Turma
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-space-xl bg-surface-container-lowest relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-gutter">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl">
            <div>
              <span className="font-label-md text-primary uppercase tracking-widest block mb-space-xs">
                Depoimentos
              </span>
              <h2 className="font-headline-lg text-on-surface">O QUE DIZEM NOSSOS ALUNOS</h2>
            </div>
            <p className="font-body-md text-on-surface-variant max-w-md mt-space-sm md:mt-0">
              Histórias reais de superação, disciplina e conquista dentro da B9 Jiu Jitsu Pompeia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
            {/* Carlos */}
            <div className="bg-surface-container p-space-lg rounded-xl flex flex-col justify-between border border-outline-variant/15">
              <div>
                <div className="flex items-center gap-1 text-primary mb-space-md">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined material-fill text-[18px]">
                      star
                    </span>
                  ))}
                </div>
                <p className="font-body-lg text-on-surface mb-space-lg italic">
                  "Treinar na B9 Jiu Jitsu Pompeia mudou completamente minha rotina e foco mental. A
                  atenção dos professores aos detalhes técnicos faz toda a diferença para quem quer
                  evoluir de verdade."
                </p>
              </div>
              <div className="flex items-center gap-space-md pt-space-md border-t border-outline-variant/10">
                <SmartImage
                  imageId="avatar_carlos"
                  src={images.avatar_carlos.url}
                  alt={images.avatar_carlos.alt}
                  className="w-10 h-10 rounded-full shrink-0"
                  onEditClick={onEditImage}
                  showEditButton={editModeOnPage}
                />
                <div>
                  <p className="font-label-lg text-on-surface">Carlos Eduardo</p>
                  <p className="font-body-sm text-on-surface-variant">
                    Faixa Azul • Aluno há 2 anos
                  </p>
                </div>
              </div>
            </div>

            {/* Mariana */}
            <div className="bg-surface-container p-space-lg rounded-xl flex flex-col justify-between border border-outline-variant/15">
              <div>
                <div className="flex items-center gap-1 text-primary mb-space-md">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined material-fill text-[18px]">
                      star
                    </span>
                  ))}
                </div>
                <p className="font-body-lg text-on-surface mb-space-lg italic">
                  "Ambiente extremamente acolhedor, limpo e profissional. A B9 Jiu Jitsu Pompeia me
                  deu a confiança que eu precisava para começar do zero, sem julgamentos."
                </p>
              </div>
              <div className="flex items-center gap-space-md pt-space-md border-t border-outline-variant/10">
                <SmartImage
                  imageId="avatar_mariana"
                  src={images.avatar_mariana.url}
                  alt={images.avatar_mariana.alt}
                  className="w-10 h-10 rounded-full shrink-0"
                  onEditClick={onEditImage}
                  showEditButton={editModeOnPage}
                />
                <div>
                  <p className="font-label-lg text-on-surface">Mariana Souza</p>
                  <p className="font-body-sm text-on-surface-variant">
                    Faixa Branca • Aluna há 8 meses
                  </p>
                </div>
              </div>
            </div>

            {/* Felipe */}
            <div className="bg-surface-container p-space-lg rounded-xl flex flex-col justify-between border border-outline-variant/15">
              <div>
                <div className="flex items-center gap-1 text-primary mb-space-md">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined material-fill text-[18px]">
                      star
                    </span>
                  ))}
                </div>
                <p className="font-body-lg text-on-surface mb-space-lg italic">
                  "Para quem busca nível competitivo ou apenas manter a forma com qualidade, a B9
                  Jiu Jitsu Pompeia é sem dúvida a melhor escolha da zona oeste."
                </p>
              </div>
              <div className="flex items-center gap-space-md pt-space-md border-t border-outline-variant/10">
                <SmartImage
                  imageId="avatar_felipe"
                  src={images.avatar_felipe.url}
                  alt={images.avatar_felipe.alt}
                  className="w-10 h-10 rounded-full shrink-0"
                  onEditClick={onEditImage}
                  showEditButton={editModeOnPage}
                />
                <div>
                  <p className="font-label-lg text-on-surface">Felipe Rabelo</p>
                  <p className="font-body-sm text-on-surface-variant">
                    Faixa Marrom • Competidor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-space-xl bg-surface relative" id="agendar">
        <div className="max-w-4xl mx-auto px-gutter">
          <div className="bg-surface-container p-space-xl rounded-xl shadow-2xl relative overflow-hidden border border-outline-variant/20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="text-center max-w-xl mx-auto mb-space-xl">
              <span className="font-label-md text-primary uppercase tracking-widest block mb-space-xs">
                Experimente Grátis
              </span>
              <h2 className="font-headline-lg text-on-surface mb-space-sm">
                AGENDE SUA AULA NA B9 JIU JITSU POMPEIA
              </h2>
              <p className="font-body-md text-on-surface-variant">
                Preencha o formulário abaixo para garantir sua vaga em uma aula experimental
                gratuita com nossos instrutores.
              </p>
            </div>

            {!bookingSuccess ? (
              <form className="space-y-space-lg" onSubmit={handleBookingSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
                  <div>
                    <label className="block font-label-md text-on-surface uppercase mb-space-xs">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      required
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      placeholder="Seu nome completo"
                      className="w-full bg-surface-container-low text-on-surface px-space-md py-3 rounded focus:outline-none focus:ring-2 focus:ring-primary border border-outline-variant/30 placeholder-outline"
                    />
                  </div>
                  <div>
                    <label className="block font-label-md text-on-surface uppercase mb-space-xs">
                      WhatsApp / Telefone
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(11) 99999-9999"
                      className="w-full bg-surface-container-low text-on-surface px-space-md py-3 rounded focus:outline-none focus:ring-2 focus:ring-primary border border-outline-variant/30 placeholder-outline"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
                  <div>
                    <label className="block font-label-md text-on-surface uppercase mb-space-xs">
                      E-mail
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="seu.email@exemplo.com"
                      className="w-full bg-surface-container-low text-on-surface px-space-md py-3 rounded focus:outline-none focus:ring-2 focus:ring-primary border border-outline-variant/30 placeholder-outline"
                    />
                  </div>
                  <div>
                    <label className="block font-label-md text-on-surface uppercase mb-space-xs">
                      Nível de Experiência
                    </label>
                    <select className="w-full bg-surface-container-low text-on-surface px-space-md py-3 rounded focus:outline-none focus:ring-2 focus:ring-primary border border-outline-variant/30">
                      <option>Nunca pratiquei (Iniciante)</option>
                      <option>Já pratiquei outras artes marciais</option>
                      <option>Faixa Branca (Jiu-Jitsu)</option>
                      <option>Faixa Azul ou superior</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-label-md text-on-surface uppercase mb-space-xs">
                    Horário de Preferência
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full bg-surface-container-low text-on-surface px-space-md py-3 rounded focus:outline-none focus:ring-2 focus:ring-primary border border-outline-variant/30"
                  >
                    <option value="Manhã (07:00 - 11:30)">Manhã (07:00 - 11:30)</option>
                    <option value="Noite - Iniciantes (18:30)">Noite - Iniciantes (18:30)</option>
                    <option value="Noite - Geral (19:30)">Noite - Geral (19:30)</option>
                    <option value="Sábado - Manhã">Sábado - Manhã</option>
                  </select>
                </div>

                <div className="pt-space-sm flex items-start gap-space-sm">
                  <input
                    id="terms-home"
                    type="checkbox"
                    required
                    className="mt-1 accent-primary w-4 h-4"
                  />
                  <label htmlFor="terms-home" className="font-body-sm text-on-surface-variant">
                    Concordo em receber contato da B9 Jiu Jitsu Pompeia via WhatsApp e e-mail para
                    confirmação do agendamento da aula experimental.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-on-primary font-label-lg py-4 uppercase rounded hover:bg-primary-container hover:text-on-primary-container transition-colors shadow-lg font-bold cursor-pointer"
                >
                  Confirmar Agendamento Grátis
                </button>
              </form>
            ) : (
              <div className="p-space-xl bg-primary/10 border border-primary rounded-xl text-center space-y-3">
                <span className="material-symbols-outlined material-fill text-primary text-[40px]">
                  check_circle
                </span>
                <h3 className="text-headline-md text-primary">
                  Aula Experimental Agendada{studentName ? `, ${studentName}` : ''}!
                </h3>
                <p className="text-body-md text-on-surface-variant max-w-lg mx-auto">
                  Recebemos sua solicitação para o horário{' '}
                  <strong className="text-on-surface">{preferredTime}</strong>. Nossa recepção da B9
                  Pompeia enviará a confirmação via WhatsApp em instantes.
                </p>
                <button
                  type="button"
                  onClick={() => setBookingSuccess(false)}
                  className="mt-2 bg-surface-container-high hover:bg-surface-bright text-on-surface px-4 py-2 rounded font-label-md uppercase cursor-pointer"
                >
                  Agendar Outro Horário
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
