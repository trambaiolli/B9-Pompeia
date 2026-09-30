import React, { useState, useEffect } from 'react';
import { DEFAULT_HTML_IMAGES, ImageAssetConfig } from './data/images';
import { SmartImage } from './components/SmartImage';
import { ImageLinksModal } from './components/ImageLinksModal';
import { HomeScreen } from './screens/HomeScreen';
import { TechniquesScreen } from './screens/TechniquesScreen';
import { VideoClassesScreen } from './screens/VideoClassesScreen';
import { PlansScreen } from './screens/PlansScreen';

type ScreenTab = 'inicio' | 'tecnicas-e-posicoes' | 'videoaulas' | 'planos-e-matricula';

const STORAGE_KEY = 'b9_pompeia_html_images_v1';

export default function App() {
  const [activeScreen, setActiveScreen] = useState<ScreenTab>('inicio');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Direct HTML image links state (persisted in localStorage so user can customize any link)
  const [images, setImages] = useState<Record<string, ImageAssetConfig>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return { ...DEFAULT_HTML_IMAGES, ...parsed };
      }
    } catch {
      // ignore storage errors
    }
    return DEFAULT_HTML_IMAGES;
  });

  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [focusedImageId, setFocusedImageId] = useState<string | null>(null);
  const [editModeOnPage, setEditModeOnPage] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(images));
    } catch {
      // ignore storage errors
    }
  }, [images]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 4000);
  };

  const handleNavigate = (tab: ScreenTab, scrollToId?: string) => {
    setActiveScreen(tab);
    setMobileMenuOpen(false);
    if (scrollToId) {
      setTimeout(() => {
        const el = document.getElementById(scrollToId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 80);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleUpdateImage = (id: string, newUrl: string) => {
    setImages((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        url: newUrl,
      },
    }));
  };

  const handleResetImages = () => {
    setImages(DEFAULT_HTML_IMAGES);
    showToast('Todos os links de imagem foram restaurados para o padrão do HTML.');
  };

  const handleEditSingleImage = (imageId: string) => {
    setFocusedImageId(imageId);
    setImageModalOpen(true);
  };

  const navItems: { id: ScreenTab; label: string }[] = [
    { id: 'inicio', label: 'Início' },
    { id: 'tecnicas-e-posicoes', label: 'Técnicas e Posições' },
    { id: 'videoaulas', label: 'Videoaulas' },
    { id: 'planos-e-matricula', label: 'Planos e Matrícula' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-surface font-body-md text-on-surface">
      {/* Header matching the exact HTML screens */}
      <header className="fixed top-0 w-full z-40 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.25)] border-b border-outline-variant/15">
        <div className="h-20 max-w-7xl mx-auto px-gutter flex items-center justify-between gap-4">
          {/* Brand Zone */}
          <div
            onClick={() => handleNavigate('inicio')}
            className="flex items-center gap-space-md cursor-pointer shrink-0"
          >
            <SmartImage
              imageId="logo_b9"
              src={images.logo_b9.url}
              alt={images.logo_b9.alt}
              className="h-10 w-10 flex items-center justify-center"
              imgClassName="h-10 w-auto object-contain"
              onEditClick={handleEditSingleImage}
              showEditButton={editModeOnPage}
            />
            <span className="font-headline-md text-on-surface tracking-tight uppercase whitespace-nowrap">
              B9 Jiu Jitsu Pompeia
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-space-lg">
            {navItems.map((item) => {
              const isActive = activeScreen === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavigate(item.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`transition-colors cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-primary-container text-on-primary-container font-bold rounded-lg px-3 py-1.5 text-body-md'
                      : 'text-body-md text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Actions Zone */}
          <div className="flex items-center gap-space-sm sm:gap-space-md">
            <button
              type="button"
              onClick={() => {
                if (activeScreen === 'inicio') {
                  handleNavigate('inicio', 'agendar');
                } else {
                  handleNavigate('planos-e-matricula', 'enroll-section');
                }
              }}
              className="hidden sm:inline-block bg-primary text-on-primary font-label-lg px-space-lg py-space-sm uppercase rounded hover:bg-primary-container hover:text-on-primary-container transition-colors font-bold whitespace-nowrap cursor-pointer"
            >
              Agendar Aula Grátis
            </button>

            <button
              type="button"
              onClick={() => {
                setFocusedImageId(null);
                setImageModalOpen(true);
              }}
              title="Gerenciar links diretos das imagens do HTML"
              className="w-9 h-9 rounded-full bg-surface-container-high hover:bg-primary text-on-surface hover:text-on-primary flex items-center justify-center transition-colors border border-outline-variant/30 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">imagesmode</span>
            </button>

            <button
              type="button"
              onClick={() => handleNavigate('videoaulas')}
              title="Área do Aluno"
              className="w-8 h-8 rounded-full bg-primary flex items-center justify-center cursor-pointer"
            >
              <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
            </button>

            {/* Mobile Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-on-surface hover:text-primary cursor-pointer"
              aria-label="Abrir menu"
            >
              <span className="material-symbols-outlined">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-surface-container border-b border-outline-variant/30 px-gutter py-space-md flex flex-col gap-space-sm">
            {navItems.map((item) => {
              const isActive = activeScreen === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavigate(item.id)}
                  className={`text-left py-2.5 px-3 rounded-lg font-label-lg uppercase transition-colors ${
                    isActive
                      ? 'bg-primary text-on-primary font-bold'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <button
              type="button"
              onClick={() => handleNavigate('inicio', 'agendar')}
              className="mt-2 bg-primary text-on-primary font-label-lg py-3 rounded uppercase font-bold text-center"
            >
              Agendar Aula Grátis
            </button>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="w-full pt-20 bg-surface flex-grow">
        {activeScreen === 'inicio' && (
          <HomeScreen
            images={images}
            onEditImage={handleEditSingleImage}
            editModeOnPage={editModeOnPage}
            onNavigate={(tab) => handleNavigate(tab)}
            onNotify={showToast}
          />
        )}

        {activeScreen === 'tecnicas-e-posicoes' && (
          <TechniquesScreen
            images={images}
            onEditImage={handleEditSingleImage}
            editModeOnPage={editModeOnPage}
            onBookClick={() => handleNavigate('inicio', 'agendar')}
          />
        )}

        {activeScreen === 'videoaulas' && (
          <VideoClassesScreen
            images={images}
            onEditImage={handleEditSingleImage}
            editModeOnPage={editModeOnPage}
            onBookClick={() => handleNavigate('inicio', 'agendar')}
            onNotify={showToast}
          />
        )}

        {activeScreen === 'planos-e-matricula' && (
          <PlansScreen
            images={images}
            onEditImage={handleEditSingleImage}
            editModeOnPage={editModeOnPage}
            onNotify={showToast}
          />
        )}
      </main>

      {/* Footer matching the exact HTML screens + Direct Image Links trigger */}
      <footer className="w-full bg-surface-container-low py-space-xl border-t border-outline-variant/15">
        <div className="max-w-7xl mx-auto px-gutter flex flex-col md:flex-row items-center justify-between gap-space-md text-on-surface-variant text-body-sm">
          <p>© 2024 B9 Jiu Jitsu Pompeia. Todos os direitos reservados.</p>
          <div className="flex flex-wrap items-center gap-space-lg">
            <button
              type="button"
              onClick={() => {
                setFocusedImageId(null);
                setImageModalOpen(true);
              }}
              className="hover:text-primary transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[15px]">link</span>
              <span>Links Diretos das Imagens HTML</span>
            </button>
            <button
              type="button"
              onClick={() =>
                showToast('Termos de Uso da Academia B9 Jiu Jitsu Pompeia atualizados.')
              }
              className="hover:text-on-surface transition-colors cursor-pointer"
            >
              Termos de Uso
            </button>
            <button
              type="button"
              onClick={() =>
                showToast('Política de Privacidade em conformidade com a LGPD.')
              }
              className="hover:text-on-surface transition-colors cursor-pointer"
            >
              Política de Privacidade
            </button>
          </div>
        </div>
      </footer>

      {/* Image Links Manager Modal */}
      <ImageLinksModal
        isOpen={imageModalOpen}
        onClose={() => {
          setImageModalOpen(false);
          setFocusedImageId(null);
        }}
        images={images}
        onUpdateImage={handleUpdateImage}
        onResetImages={handleResetImages}
        focusedImageId={focusedImageId}
        editModeOnPage={editModeOnPage}
        onToggleEditModeOnPage={setEditModeOnPage}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 bg-surface-container-highest border border-primary text-on-surface px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 max-w-md">
          <span className="material-symbols-outlined material-fill text-primary">check_circle</span>
          <span className="text-body-md">{toastMessage}</span>
          <button
            type="button"
            onClick={() => setToastMessage(null)}
            className="text-outline hover:text-on-surface ml-2 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">close</span>
          </button>
        </div>
      )}
    </div>
  );
}
