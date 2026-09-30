import React, { useState } from 'react';
import { ImageAssetConfig } from '../data/images';
import { SmartImage } from '../components/SmartImage';

interface PlansScreenProps {
  images: Record<string, ImageAssetConfig>;
  onEditImage: (id: string) => void;
  editModeOnPage: boolean;
  onNotify: (msg: string) => void;
}

export const PlansScreen: React.FC<PlansScreenProps> = ({
  images,
  onEditImage,
  editModeOnPage,
  onNotify,
}) => {
  const [calcDuration, setCalcDuration] = useState<'monthly' | 'semiannual' | 'annual'>('annual');
  const [selectedPlan, setSelectedPlan] = useState<string>('Anual Elite');
  const [enrolledSuccess, setEnrolledSuccess] = useState(false);

  const calcConfig = {
    monthly: {
      name: 'Plano Mensal B9',
      price: 'R$ 349',
      subtitle: 'Cobrado mensalmente, sem fidelidade',
      savings: 'R$ 0 / ano',
      planOption: 'Mensal',
    },
    semiannual: {
      name: 'Plano Semestral B9',
      price: 'R$ 319',
      subtitle: 'Cobrado semestralmente',
      savings: 'R$ 360 / ano',
      planOption: 'Semestral',
    },
    annual: {
      name: 'Plano Anual Elite',
      price: 'R$ 289',
      subtitle: 'Cobrado anualmente em 12x de R$ 289',
      savings: 'R$ 720 / ano',
      planOption: 'Anual Elite',
    },
  }[calcDuration];

  const scrollToEnroll = (planValue?: string) => {
    if (planValue) {
      setSelectedPlan(planValue);
    } else {
      setSelectedPlan(calcConfig.planOption);
    }
    const section = document.getElementById('enroll-section');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  const handleEnrollment = (e: React.FormEvent) => {
    e.preventDefault();
    setEnrolledSuccess(true);
    onNotify('Matrícula pré-registrada com sucesso! Entraremos em contato via WhatsApp.');
  };

  return (
    <div className="flex flex-col w-full text-on-surface">
      {/* Hero Section */}
      <section className="relative w-full py-20 overflow-hidden bg-surface-container-lowest">
        <div className="absolute inset-0 opacity-15">
          <SmartImage
            imageId="plans_hero"
            src={images.plans_hero.url}
            alt={images.plans_hero.alt}
            className="w-full h-full"
            imgClassName="w-full h-full object-cover object-center"
            onEditClick={onEditImage}
            showEditButton={editModeOnPage}
          />
        </div>
        <div className="max-w-7xl mx-auto px-gutter relative z-10 flex flex-col items-center text-center">
          <span className="text-label-lg text-primary uppercase tracking-widest mb-space-sm">
            B9 Jiu Jitsu Pompeia • Matrícula Online
          </span>
          <h1 className="text-headline-xl text-on-surface mb-space-md max-w-3xl">
            Domine a Arte Suave com Estrutura de Elite
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mb-space-xl">
            Escolha o plano ideal para a sua jornada no B9 Jiu Jitsu Pompeia. Treinamento de alto
            rendimento, professores campeões mundiais e uma comunidade focada na excelência.
          </p>

          {/* Quick Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md w-full max-w-4xl">
            <div className="bg-surface-container p-space-md rounded-lg flex items-center gap-space-sm text-left border border-outline-variant/15">
              <span className="material-symbols-outlined material-fill text-primary text-[28px]">
                verified
              </span>
              <div>
                <div className="text-body-sm font-bold text-on-surface">Metodologia Oficial</div>
                <div className="text-body-sm text-on-surface-variant">B9 System</div>
              </div>
            </div>

            <div className="bg-surface-container p-space-md rounded-lg flex items-center gap-space-sm text-left border border-outline-variant/15">
              <span className="material-symbols-outlined material-fill text-primary text-[28px]">
                schedule
              </span>
              <div>
                <div className="text-body-sm font-bold text-on-surface">Horários Flexíveis</div>
                <div className="text-body-sm text-on-surface-variant">Manhã, Tarde e Noite</div>
              </div>
            </div>

            <div className="bg-surface-container p-space-md rounded-lg flex items-center gap-space-sm text-left border border-outline-variant/15">
              <span className="material-symbols-outlined material-fill text-primary text-[28px]">
                workspace_premium
              </span>
              <div>
                <div className="text-body-sm font-bold text-on-surface">Faixa Preta Expert</div>
                <div className="text-body-sm text-on-surface-variant">Professores Renomados</div>
              </div>
            </div>

            <div className="bg-surface-container p-space-md rounded-lg flex items-center gap-space-sm text-left border border-outline-variant/15">
              <span className="material-symbols-outlined material-fill text-primary text-[28px]">
                fitness_center
              </span>
              <div>
                <div className="text-body-sm font-bold text-on-surface">Estrutura Completa</div>
                <div className="text-body-sm text-on-surface-variant">Tatame Olímpico</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Savings Calculator */}
      <section className="py-space-xl bg-surface-container-low">
        <div className="max-w-5xl mx-auto px-gutter">
          <div className="bg-surface-container p-space-lg md:p-space-xl rounded-xl shadow-xl relative overflow-hidden border border-outline-variant/15">
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-space-lg mb-space-xl">
              <div>
                <span className="text-label-md text-primary uppercase tracking-wider">
                  Simulador de Economia
                </span>
                <h2 className="text-headline-lg text-on-surface mt-1">
                  Quanto você quer investir no seu Jiu Jitsu?
                </h2>
              </div>

              <div className="flex bg-surface p-1 rounded-lg border border-outline-variant/20">
                <button
                  type="button"
                  onClick={() => {
                    setCalcDuration('monthly');
                    setSelectedPlan('Mensal');
                  }}
                  className={`px-space-md py-space-sm text-label-md uppercase rounded transition-all cursor-pointer ${
                    calcDuration === 'monthly'
                      ? 'bg-primary text-on-primary font-bold'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  Mensal
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setCalcDuration('semiannual');
                    setSelectedPlan('Semestral');
                  }}
                  className={`px-space-md py-space-sm text-label-md uppercase rounded transition-all cursor-pointer ${
                    calcDuration === 'semiannual'
                      ? 'bg-primary text-on-primary font-bold'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  Semestral
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setCalcDuration('annual');
                    setSelectedPlan('Anual Elite');
                  }}
                  className={`px-space-md py-space-sm text-label-md uppercase rounded transition-all cursor-pointer ${
                    calcDuration === 'annual'
                      ? 'bg-primary text-on-primary font-bold'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  Anual (Melhor Valor)
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg items-stretch">
              <div className="bg-surface p-space-lg rounded-xl flex flex-col justify-between border border-outline-variant/15">
                <div>
                  <span className="text-label-md text-on-surface-variant uppercase">
                    Plano Selecionado
                  </span>
                  <div className="text-headline-md text-on-surface mt-1">{calcConfig.name}</div>
                  <p className="text-body-md text-on-surface-variant mt-2">
                    Acesso ilimitado a todas as aulas de kimono, nogi e musculação funcional no B9
                    Pompeia.
                  </p>
                </div>
                <div className="mt-space-lg pt-space-md border-t border-surface-container-highest">
                  <span className="text-body-sm text-on-surface-variant">
                    Frequência recomendada:
                  </span>
                  <div className="text-body-lg font-bold text-primary">
                    Ilimitado (Segunda a Sábado)
                  </div>
                </div>
              </div>

              <div className="bg-surface p-space-lg rounded-xl text-center flex flex-col justify-center border border-primary/20">
                <span className="text-label-md text-primary uppercase tracking-wide">
                  Investimento Mensal
                </span>
                <div className="my-space-md">
                  <span className="text-headline-xl text-on-surface">{calcConfig.price}</span>
                  <span className="text-body-sm text-on-surface-variant">/mês</span>
                </div>
                <div className="text-body-sm text-on-surface-variant">{calcConfig.subtitle}</div>
              </div>

              <div className="bg-surface p-space-lg rounded-xl flex flex-col justify-between border border-outline-variant/15">
                <div>
                  <span className="text-label-md text-secondary uppercase">Sua Economia</span>
                  <div className="text-headline-md text-primary mt-1">{calcConfig.savings}</div>
                  <p className="text-body-sm text-on-surface-variant mt-2">
                    Comparado ao plano mensal avulso, você garante kimono oficial B9 grátis e
                    seminários exclusivos.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => scrollToEnroll()}
                  className="mt-space-lg w-full bg-primary text-on-primary font-label-lg py-space-md uppercase rounded hover:bg-primary-container hover:text-on-primary-container transition-colors text-center font-bold cursor-pointer"
                >
                  Garantir Este Plano
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="py-space-xl bg-surface">
        <div className="max-w-7xl mx-auto px-gutter">
          <div className="text-center max-w-2xl mx-auto mb-space-xl">
            <span className="text-label-md text-primary uppercase tracking-widest">
              Planos e Valores
            </span>
            <h2 className="text-headline-lg text-on-surface mt-2">
              Escolha Seu Nível de Comprometimento
            </h2>
            <p className="text-body-md text-on-surface-variant mt-2">
              Transparência total. Sem taxas escondidas de matrícula nos planos semestral e anual.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg items-stretch">
            {/* Monthly Card */}
            <div className="bg-surface-container rounded-xl p-space-lg flex flex-col justify-between transition-transform hover:-translate-y-1 border border-outline-variant/15">
              <div>
                <div className="flex justify-between items-center mb-space-md">
                  <span className="text-label-md uppercase text-on-surface-variant bg-surface-container-highest px-3 py-1 rounded">
                    Mensal
                  </span>
                  <span className="material-symbols-outlined text-outline">fitness_center</span>
                </div>
                <h3 className="text-headline-md text-on-surface">Plano Mensal</h3>
                <p className="text-body-sm text-on-surface-variant mt-1">
                  Para quem busca flexibilidade máxima de horários.
                </p>
                <div className="my-space-lg">
                  <span className="text-headline-xl text-on-surface">R$ 349</span>
                  <span className="text-body-sm text-on-surface-variant">/mês</span>
                </div>
                <ul className="space-y-3 mb-space-xl text-body-md text-on-surface">
                  <li className="flex items-center gap-space-sm">
                    <span className="material-symbols-outlined text-primary text-[18px]">
                      check
                    </span>
                    Acesso total às aulas de Jiu Jitsu
                  </li>
                  <li className="flex items-center gap-space-sm">
                    <span className="material-symbols-outlined text-primary text-[18px]">
                      check
                    </span>
                    Até 4 treinos por semana
                  </li>
                  <li className="flex items-center gap-space-sm">
                    <span className="material-symbols-outlined text-primary text-[18px]">
                      check
                    </span>
                    Uso da estrutura do B9 Pompeia
                  </li>
                  <li className="flex items-center gap-space-sm text-outline">
                    <span className="material-symbols-outlined text-[18px]">close</span>
                    Seminários inclusos
                  </li>
                </ul>
              </div>
              <button
                type="button"
                onClick={() => scrollToEnroll('Mensal')}
                className="w-full border border-outline text-on-surface font-label-lg py-space-sm uppercase rounded hover:border-primary hover:text-primary transition-colors text-center cursor-pointer"
              >
                Selecionar Mensal
              </button>
            </div>

            {/* Semiannual Card */}
            <div className="bg-surface-container rounded-xl p-space-lg flex flex-col justify-between transition-transform hover:-translate-y-1 relative border border-primary/30">
              <div className="absolute -top-3 right-6 bg-primary text-on-primary text-label-sm px-3 py-0.5 rounded font-bold uppercase tracking-wider">
                Mais Popular
              </div>
              <div>
                <div className="flex justify-between items-center mb-space-md">
                  <span className="text-label-md uppercase text-primary bg-primary/10 px-3 py-1 rounded">
                    Semestral
                  </span>
                  <span className="material-symbols-outlined text-primary">
                    local_fire_department
                  </span>
                </div>
                <h3 className="text-headline-md text-on-surface">Plano Semestral</h3>
                <p className="text-body-sm text-on-surface-variant mt-1">
                  Consistência e evolução garantida na faixa.
                </p>
                <div className="my-space-lg">
                  <span className="text-headline-xl text-on-surface">R$ 319</span>
                  <span className="text-body-sm text-on-surface-variant">/mês</span>
                </div>
                <ul className="space-y-3 mb-space-xl text-body-md text-on-surface">
                  <li className="flex items-center gap-space-sm">
                    <span className="material-symbols-outlined text-primary text-[18px]">
                      check
                    </span>
                    Acesso ilimitado (Seg a Sáb)
                  </li>
                  <li className="flex items-center gap-space-sm">
                    <span className="material-symbols-outlined text-primary text-[18px]">
                      check
                    </span>
                    Aulas de Kimono e No-Gi
                  </li>
                  <li className="flex items-center gap-space-sm">
                    <span className="material-symbols-outlined text-primary text-[18px]">
                      check
                    </span>
                    Avaliação de graduação trimestral
                  </li>
                  <li className="flex items-center gap-space-sm">
                    <span className="material-symbols-outlined text-primary text-[18px]">
                      check
                    </span>
                    Desconto em seminários B9
                  </li>
                </ul>
              </div>
              <button
                type="button"
                onClick={() => scrollToEnroll('Semestral')}
                className="w-full bg-primary text-on-primary font-label-lg py-space-sm uppercase rounded hover:bg-primary-container hover:text-on-primary-container transition-colors text-center font-bold cursor-pointer"
              >
                Selecionar Semestral
              </button>
            </div>

            {/* Annual Elite Card */}
            <div className="bg-surface-container rounded-xl p-space-lg flex flex-col justify-between transition-transform hover:-translate-y-1 bg-gradient-to-b from-surface-container to-surface-container-high border border-outline-variant/20">
              <div>
                <div className="flex justify-between items-center mb-space-md">
                  <span className="text-label-md uppercase text-surface bg-primary px-3 py-1 rounded font-bold">
                    Elite
                  </span>
                  <span className="material-symbols-outlined material-fill text-primary">
                    military_tech
                  </span>
                </div>
                <h3 className="text-headline-md text-on-surface">Plano Anual Elite</h3>
                <p className="text-body-sm text-on-surface-variant mt-1">
                  Para atletas dedicados à alta performance.
                </p>
                <div className="my-space-lg">
                  <span className="text-headline-xl text-on-surface">R$ 289</span>
                  <span className="text-body-sm text-on-surface-variant">/mês</span>
                </div>
                <ul className="space-y-3 mb-space-xl text-body-md text-on-surface">
                  <li className="flex items-center gap-space-sm">
                    <span className="material-symbols-outlined text-primary text-[18px]">
                      check
                    </span>
                    Acesso VIP Ilimitado a todas turmas
                  </li>
                  <li className="flex items-center gap-space-sm">
                    <span className="material-symbols-outlined text-primary text-[18px]">
                      check
                    </span>
                    Kimono Oficial B9 de Brinde
                  </li>
                  <li className="flex items-center gap-space-sm">
                    <span className="material-symbols-outlined text-[18px] text-primary">
                      check
                    </span>
                    Seminários internos gratuitos
                  </li>
                  <li className="flex items-center gap-space-sm">
                    <span className="material-symbols-outlined text-[18px] text-primary">
                      check
                    </span>
                    Locker privativo cortesia
                  </li>
                </ul>
              </div>
              <button
                type="button"
                onClick={() => scrollToEnroll('Anual Elite')}
                className="w-full bg-primary text-on-primary font-label-lg py-space-sm uppercase rounded hover:bg-primary-container hover:text-on-primary-container transition-colors text-center font-bold cursor-pointer"
              >
                Selecionar Anual Elite
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Academy Benefits Highlight */}
      <section className="py-space-xl bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-gutter">
          <div className="flex flex-col lg:flex-row gap-space-xl items-center">
            <div className="w-full lg:w-1/2">
              <span className="text-label-md text-primary uppercase tracking-widest">
                Infraestrutura B9 Pompeia
              </span>
              <h2 className="text-headline-lg text-on-surface mt-2 mb-space-md">
                Um Ambiente Projetado Para a Sua Evolução
              </h2>
              <p className="text-body-lg text-on-surface-variant mb-space-lg">
                Nossa sede na Pompeia conta com tatames de alta absorção de impacto, vestiários
                completos com chuveiros, área de convivência e suporte técnico personalizado para
                iniciantes e competidores.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                <div className="bg-surface p-space-md rounded-lg border border-outline-variant/15">
                  <span className="material-symbols-outlined material-fill text-primary text-[28px] mb-2 block">
                    security
                  </span>
                  <h4 className="text-headline-sm text-on-surface">Higiene Rigorosa</h4>
                  <p className="text-body-sm text-on-surface-variant mt-1">
                    Limpeza e esterilização diária dos tatames.
                  </p>
                </div>

                <div className="bg-surface p-space-md rounded-lg border border-outline-variant/15">
                  <span className="material-symbols-outlined material-fill text-primary text-[28px] mb-2 block">
                    group
                  </span>
                  <h4 className="text-headline-sm text-on-surface">Comunidade Unida</h4>
                  <p className="text-body-sm text-on-surface-variant mt-1">
                    Ambiente familiar, seguro e sem ego.
                  </p>
                </div>

                <div className="bg-surface p-space-md rounded-lg border border-outline-variant/15">
                  <span className="material-symbols-outlined material-fill text-primary text-[28px] mb-2 block">
                    trophy
                  </span>
                  <h4 className="text-headline-sm text-on-surface">Foco em Competição</h4>
                  <p className="text-body-sm text-on-surface-variant mt-1">
                    Equipe de competição ativa nos principais campeonatos.
                  </p>
                </div>

                <div className="bg-surface p-space-md rounded-lg border border-outline-variant/15">
                  <span className="material-symbols-outlined material-fill text-primary text-[28px] mb-2 block">
                    bolt
                  </span>
                  <h4 className="text-headline-sm text-on-surface">Treino Funcional</h4>
                  <p className="text-body-sm text-on-surface-variant mt-1">
                    Condicionamento físico voltado para o grappling.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <SmartImage
                imageId="plans_facility"
                src={images.plans_facility.url}
                alt={images.plans_facility.alt}
                className="relative rounded-xl overflow-hidden shadow-2xl h-[450px] w-full"
                imgClassName="w-full h-full object-cover object-center"
                onEditClick={onEditImage}
                showEditButton={editModeOnPage}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-label-md text-primary bg-surface/90 px-3 py-1 rounded uppercase">
                    B9 Pompeia
                  </span>
                  <div className="text-headline-md text-on-surface mt-2">
                    Venha conhecer a nossa casa na Zona Oeste
                  </div>
                </div>
              </SmartImage>
            </div>
          </div>
        </div>
      </section>

      {/* Secure Enrollment Form Section */}
      <section className="py-space-xl bg-surface" id="enroll-section">
        <div className="max-w-4xl mx-auto px-gutter">
          <div className="bg-surface-container p-space-lg md:p-space-xl rounded-xl shadow-2xl relative border border-outline-variant/20">
            <div className="text-center max-w-xl mx-auto mb-space-lg">
              <span className="text-label-md text-primary uppercase tracking-widest">
                Matrícula Segura
              </span>
              <h2 className="text-headline-lg text-on-surface mt-2">
                Garanta Sua Vaga no B9 Pompeia
              </h2>
              <p className="text-body-md text-on-surface-variant mt-1">
                Preencha seus dados para iniciar sua matrícula ou agendar sua aula experimental
                gratuita.
              </p>
            </div>

            {!enrolledSuccess ? (
              <form className="space-y-space-md" onSubmit={handleEnrollment}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                  <div>
                    <label className="block text-label-md text-on-surface-variant uppercase mb-1">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Carlos Silva"
                      className="w-full bg-surface text-on-surface px-space-md py-3 rounded border border-outline-variant focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-label-md text-on-surface-variant uppercase mb-1">
                      E-mail
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="carlos@exemplo.com"
                      className="w-full bg-surface text-on-surface px-space-md py-3 rounded border border-outline-variant focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                  <div>
                    <label className="block text-label-md text-on-surface-variant uppercase mb-1">
                      WhatsApp / Telefone
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(11) 99999-9999"
                      className="w-full bg-surface text-on-surface px-space-md py-3 rounded border border-outline-variant focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-label-md text-on-surface-variant uppercase mb-1">
                      Plano Escolhido
                    </label>
                    <select
                      value={selectedPlan}
                      onChange={(e) => setSelectedPlan(e.target.value)}
                      className="w-full bg-surface text-on-surface px-space-md py-3 rounded border border-outline-variant focus:border-primary focus:outline-none transition-colors"
                    >
                      <option value="Anual Elite">Plano Anual Elite - R$ 289/mês</option>
                      <option value="Semestral">Plano Semestral - R$ 319/mês</option>
                      <option value="Mensal">Plano Mensal - R$ 349/mês</option>
                      <option value="Aula Experimental">Aula Experimental Grátis</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                  <div>
                    <label className="block text-label-md text-on-surface-variant uppercase mb-1">
                      Faixa Atual
                    </label>
                    <select className="w-full bg-surface text-on-surface px-space-md py-3 rounded border border-outline-variant focus:border-primary focus:outline-none transition-colors">
                      <option>Branca (Iniciante)</option>
                      <option>Azul</option>
                      <option>Roxa</option>
                      <option>Marrom</option>
                      <option>Preta</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-label-md text-on-surface-variant uppercase mb-1">
                      Horário de Preferência
                    </label>
                    <select className="w-full bg-surface text-on-surface px-space-md py-3 rounded border border-outline-variant focus:border-primary focus:outline-none transition-colors">
                      <option>Manhã (07:00 / 08:30)</option>
                      <option>Almoço (12:00)</option>
                      <option>Noite (18:00 / 19:30 / 21:00)</option>
                      <option>Sábado (Treino Aberto)</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-start gap-space-sm pt-space-sm">
                  <input
                    id="terms-plans"
                    type="checkbox"
                    required
                    className="mt-1 accent-primary w-4 h-4"
                  />
                  <label htmlFor="terms-plans" className="text-body-sm text-on-surface-variant">
                    Concordo com os termos do regulamento interno do{' '}
                    <span className="text-on-surface font-bold">B9 Jiu Jitsu Pompeia</span> e
                    autorizo o contato via WhatsApp para confirmação da matrícula.
                  </label>
                </div>

                <div className="pt-space-md">
                  <button
                    type="submit"
                    className="w-full bg-primary text-on-primary font-label-lg py-4 uppercase rounded hover:bg-primary-container hover:text-on-primary-container transition-colors text-center font-bold shadow-lg cursor-pointer"
                  >
                    Concluir Matrícula com Segurança
                  </button>
                </div>
              </form>
            ) : (
              <div className="mt-space-lg p-space-md bg-primary/10 border border-primary text-center rounded text-on-surface">
                <span className="material-symbols-outlined material-fill text-primary text-[32px] block mb-2">
                  check_circle
                </span>
                <h3 className="text-headline-sm text-primary">
                  Matrícula Pré-registrada com Sucesso!
                </h3>
                <p className="text-body-md text-on-surface-variant mt-1">
                  Nossa equipe entrará em contato via WhatsApp em até 2 horas para finalizar seu
                  cadastro no plano <strong>{selectedPlan}</strong> e liberar seu acesso ao B9
                  Pompeia.
                </p>
                <button
                  type="button"
                  onClick={() => setEnrolledSuccess(false)}
                  className="mt-4 bg-surface-container-high hover:bg-surface-bright text-on-surface px-4 py-2 rounded font-label-md uppercase cursor-pointer"
                >
                  Fazer Nova Simulação
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-space-xl bg-surface-container-low">
        <div className="max-w-4xl mx-auto px-gutter">
          <div className="text-center mb-space-xl">
            <span className="text-label-md text-primary uppercase tracking-widest">
              Dúvidas Frequentes
            </span>
            <h2 className="text-headline-lg text-on-surface mt-2">Tudo o que Você Precisa Saber</h2>
          </div>

          <div className="space-y-space-md">
            <div className="bg-surface p-space-lg rounded-xl border border-outline-variant/15">
              <h3 className="text-headline-sm text-on-surface mb-2">
                Preciso ter experiência prévia para começar no B9 Pompeia?
              </h3>
              <p className="text-body-md text-on-surface-variant">
                Não. Temos turmas específicas para iniciantes (Fundamentos) onde você aprende desde
                a base, quedas e defesas pessoais com total segurança.
              </p>
            </div>

            <div className="bg-surface p-space-lg rounded-xl border border-outline-variant/15">
              <h3 className="text-headline-sm text-on-surface mb-2">
                O que está incluso no Plano Anual Elite?
              </h3>
              <p className="text-body-md text-on-surface-variant">
                O Plano Anual Elite inclui acesso ilimitado a todos os horários (Kimono e No-Gi), 1
                Kimono Oficial B9 de brinde, isenção de taxa de matrícula e acesso gratuito a
                seminários técnicos internos.
              </p>
            </div>

            <div className="bg-surface p-space-lg rounded-xl border border-outline-variant/15">
              <h3 className="text-headline-sm text-on-surface mb-2">
                Posso trancar o plano caso viaje ou me machuque?
              </h3>
              <p className="text-body-md text-on-surface-variant">
                Sim. Planos semestrais e anuais possuem direito a trancamento por motivos de viagem
                ou saúde conforme regulamento da academia.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
