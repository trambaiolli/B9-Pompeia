import React, { useState } from 'react';
import { DEFAULT_HTML_IMAGES, ImageAssetConfig } from '../data/images';

interface ImageLinksModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: Record<string, ImageAssetConfig>;
  onUpdateImage: (id: string, newUrl: string) => void;
  onResetImages: () => void;
  focusedImageId?: string | null;
  editModeOnPage: boolean;
  onToggleEditModeOnPage: (val: boolean) => void;
}

export const ImageLinksModal: React.FC<ImageLinksModalProps> = ({
  isOpen,
  onClose,
  images,
  onUpdateImage,
  onResetImages,
  focusedImageId,
  editModeOnPage,
  onToggleEditModeOnPage,
}) => {
  const [selectedScreen, setSelectedScreen] = useState<string>('Todas');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  if (!isOpen) return null;

  const screens = ['Todas', 'Geral', 'Início', 'Técnicas e Posições', 'Videoaulas', 'Planos e Matrícula'];

  const imageList = Object.values(images).filter((img) => {
    if (focusedImageId) return img.id === focusedImageId;
    if (selectedScreen === 'Todas') return true;
    return img.screen === selectedScreen;
  });

  const handleCopy = (id: string, url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/85 backdrop-blur-md p-4 overflow-y-auto">
      <div className="bg-surface-container max-w-4xl w-full rounded-xl shadow-2xl border border-primary/30 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-6 border-b border-outline-variant/30 flex items-center justify-between gap-4">
          <div>
            <span className="text-label-md text-primary uppercase tracking-widest block">
              Gerenciador de Mídia HTML
            </span>
            <h3 className="text-headline-md text-on-surface mt-0.5">
              Links Diretos das Imagens ({Object.keys(images).length} ativos)
            </h3>
            <p className="text-body-sm text-on-surface-variant mt-1">
              Todas as imagens usam os links diretos originais do HTML (`lh3.googleusercontent.com/aida-public/...`). Você pode copiar ou colar novas URLs diretas abaixo.
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-on-surface-variant hover:text-on-surface p-2 rounded-lg hover:bg-surface-container-high transition-colors cursor-pointer"
            aria-label="Fechar modal"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Toolbar */}
        <div className="px-6 py-3 bg-surface-container-low border-b border-outline-variant/20 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            {screens.map((scr) => (
              <button
                key={scr}
                onClick={() => setSelectedScreen(scr)}
                className={`px-3 py-1.5 rounded text-body-sm font-medium transition-colors cursor-pointer ${
                  selectedScreen === scr && !focusedImageId
                    ? 'bg-primary text-on-primary font-bold'
                    : 'bg-surface-container-high text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {scr}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <label className="flex items-center gap-2 text-body-sm text-on-surface cursor-pointer select-none">
              <input
                type="checkbox"
                checked={editModeOnPage}
                onChange={(e) => onToggleEditModeOnPage(e.target.checked)}
                className="accent-primary w-4 h-4"
              />
              <span>Mostrar botão "Editar Link" sobre as fotos</span>
            </label>
            <button
              onClick={onResetImages}
              className="text-body-sm text-outline hover:text-primary underline cursor-pointer"
            >
              Restaurar originais do HTML
            </button>
          </div>
        </div>

        {/* Image List */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          {imageList.map((img) => {
            const defaultUrl = DEFAULT_HTML_IMAGES[img.id]?.url || '';
            const isModified = img.url !== defaultUrl;

            return (
              <div
                key={img.id}
                className="bg-surface p-4 rounded-xl border border-outline-variant/30 flex flex-col md:flex-row gap-4 items-start md:items-center"
              >
                <div className="w-28 h-20 rounded-lg overflow-hidden bg-surface-container-high shrink-0 border border-outline-variant/30 flex items-center justify-center">
                  <img
                    src={img.url}
                    alt={img.alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>

                <div className="flex-1 w-full space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-body-sm font-mono uppercase px-2 py-0.5 rounded bg-surface-container-highest text-primary">
                        {img.screen}
                      </span>
                      <span className="font-headline-sm text-on-surface text-base">
                        {img.label}
                      </span>
                      {isModified && (
                        <span className="text-body-sm text-primary font-mono">
                          • Personalizado
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleCopy(img.id, img.url)}
                        className="text-body-sm bg-surface-container-high hover:bg-surface-container-highest text-on-surface px-2.5 py-1 rounded flex items-center gap-1 transition-colors cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-[14px]">
                          {copiedId === img.id ? 'check' : 'content_copy'}
                        </span>
                        <span>{copiedId === img.id ? 'Copiado!' : 'Copiar URL'}</span>
                      </button>
                      <a
                        href={img.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-body-sm bg-surface-container-high hover:bg-primary hover:text-on-primary text-on-surface px-2.5 py-1 rounded flex items-center gap-1 transition-colors"
                      >
                        <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                        <span>Abrir Link Direto</span>
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <input
                      type="url"
                      value={img.url}
                      onChange={(e) => onUpdateImage(img.id, e.target.value)}
                      placeholder="Cole aqui o link direto da imagem (https://...)"
                      className="w-full bg-surface-container-low text-on-surface px-3 py-2 rounded border border-outline-variant/40 focus:border-primary focus:outline-none text-body-sm font-mono"
                    />
                    {isModified && (
                      <button
                        type="button"
                        onClick={() => onUpdateImage(img.id, defaultUrl)}
                        className="px-3 py-2 bg-surface-container-high hover:bg-surface-bright text-on-surface-variant text-body-sm rounded shrink-0 cursor-pointer"
                      >
                         Padrão
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-outline-variant/30 bg-surface-container-low flex justify-end">
          <button
            onClick={onClose}
            className="bg-primary text-on-primary font-label-lg px-6 py-2.5 uppercase rounded hover:bg-primary-container transition-colors font-bold cursor-pointer"
          >
            Concluir e Voltar
          </button>
        </div>
      </div>
    </div>
  );
};
