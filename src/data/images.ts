export interface ImageAssetConfig {
  id: string;
  label: string;
  screen: 'Geral' | 'Início' | 'Técnicas e Posições' | 'Videoaulas' | 'Planos e Matrícula';
  url: string;
  alt: string;
}

export const DEFAULT_HTML_IMAGES: Record<string, ImageAssetConfig> = {
  logo_b9: {
    id: 'logo_b9',
    label: 'Logo B9 Jiu Jitsu Pompeia (Cabeçalho)',
    screen: 'Geral',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCuP1mG9895Kz3hG5r9zTq9z8p6r9zTq9z8p6r9zTq9z8p6r9zTq9z8p6r9zTq9z8p6r9zTq9z8p6r9z',
    alt: 'B9 Jiu Jitsu Pompeia Logo',
  },
  // TELA 1: INÍCIO
  home_hero: {
    id: 'home_hero',
    label: 'Banner Principal (Hero Início)',
    screen: 'Início',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDl1tJT1G4LmFlj_XPxXOLCS3IYrwVrKznAkA0UVC1a5PheyHI3sTRYI0AK0Sj4Chu1xFCsctGE5jLZgRPGSeN-oJoeOsyqRct9Y-9OvAiZbx9ArgwxFq3Rijs46lxKvU1xHpld1mhXUTexdVhqCw5CIUFbfn6AdjKt6QRJX7qYXLbcNPCXj1bzDbXf5ID4WLkaYWDxGWg8Y4hgxm9dvpeDPU4ELd_EqifvUg1KMo9LnWlxuM2PXFKe',
    alt: 'Cinematic high contrast action shot of martial artists training jiu jitsu on dark mats at B9 Jiu Jitsu Pompeia academy',
  },
  avatar_carlos: {
    id: 'avatar_carlos',
    label: 'Depoimento: Carlos Eduardo',
    screen: 'Início',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDg5wFQxAiF1zttQYAEiflEVuyuHxQ69JGL03e1atsgDvWdLhORsqzKHRI2Z01nRPR7wq1A8P-dUvoz4g03LawrVZrxzJdhu7FbTXsEjKFhCooygCBxD7EQkWx1pIzzLBlPvQlWgbpMrAALbCKcuqBdPgP2GYqsn7CeteFAQSTCdUic1xF8Bi7ilU4Ll3ouM9y6KOF3bTH3UCREpWosHfoPHnOxU8PcNPqaPVSg4ZARlek4yOHnm10Y',
    alt: 'Portrait of a smiling male jiu jitsu practitioner in dark sports attire inside B9 Jiu Jitsu Pompeia',
  },
  avatar_mariana: {
    id: 'avatar_mariana',
    label: 'Depoimento: Mariana Souza',
    screen: 'Início',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC65M7VzRam5jqd3XMohT2WgTPXJaPQXI_oF69_Op10OSUZg54oaBvSrlL2UccSAmBuHWi3SuhAIjkCEl8Fc555SWP-Zj4P9L-KMAzYVJroMGf_XInn8N0mKNxxoGZy66E5-zRLv9XCgZdScgrDARho9_9MOH0BeL6_9L5Y7wTRaBYegrSfpkQodtG-jNGg8CJWXYsNleOn4SNxw1nR7bHrl1Mpx9bOY7Vu-qdnOLxfuOvfJRL85Zuk',
    alt: 'Portrait of a focused female martial artist in jiu jitsu gear at B9 Jiu Jitsu Pompeia academy',
  },
  avatar_felipe: {
    id: 'avatar_felipe',
    label: 'Depoimento: Felipe Rabelo',
    screen: 'Início',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCr2QaBayVmOGjhCqH4qjSrUuHswOXr3ZpKsXirDQeOUdSbRVPp6kD09qOzxa0XDjSeSS7JHLLI4obY3YJCuND_GoXNrNm_vtF7UVCdj_dpfCUGldMygv_MkvL6J0qeX3zv7QUnN61zrONR__BJJpJzzcg5Ot8lBuan5QwgMGPxRgdr0kpE9CCbjJq3EN8X0rGeH7cmKQ4l8O3LQ_SVUqgn0MhswAv1-_0efbGjzhuHpVkInZ115qhG',
    alt: 'Portrait of an athletic male competitor in jiu jitsu uniform at B9 Jiu Jitsu Pompeia',
  },

  // TELA 2: TÉCNICAS E POSIÇÕES
  tech_card_1: {
    id: 'tech_card_1',
    label: 'Técnica 1: Guarda Aranha com Gancho Único',
    screen: 'Técnicas e Posições',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNMQzVWCkJO3VAwVMXEw3N421b7iviQM6657BwhWrvEdiImooaH_46B6zlP3Vz9JhcPvD3EoeXYjwbGk87YE6XmZ5tSSRh0iT4d327jglh5a8mQilrZRNtO0AwEFIaNsZ9TCcPMh9yMbQzOPQ2s8HtYES0I_SBHRvJqorrfM_4Vdt6UZq_DNiJBT2Zg8KkS_ErBakj5eI2NSSrRZ57rlfciHOhREzNAXoN9gydoOmU6AJIphpsqz8l',
    alt: 'Close-up shot of two grapplers demonstrating an open guard sweep technique at B9 Jiu Jitsu Pompeia',
  },
  tech_card_2: {
    id: 'tech_card_2',
    label: 'Técnica 2: Passagem Toreando Clássica',
    screen: 'Técnicas e Posições',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrcuP1ejQP0hf6rchFtMP4TR0TSFxNXaPQApMb2mSp9DC5QWy77NYSm09ewDqPRxX5YC6HOU7m5TCEiKnspvC2ng7R9AC2lVDjfLGNwDDZI8O2G0e9QoJ3zVXbclidFIDSVj15iixFh3FQQvVKLE0j-vZYZ5Op_5g3b_09j-wygLsIDwsGOx7QUKfKOFZHcBKIN7KlzKAMpOGRZq8uFT-O6l4QcFthPj0JbUA86wLsYPJ0qUsDAv5A',
    alt: 'Grappling instructor at B9 Jiu Jitsu Pompeia demonstrating a Toreando guard pass',
  },
  tech_card_3: {
    id: 'tech_card_3',
    label: 'Técnica 3: Armlock Justo da Guarda Fechada',
    screen: 'Técnicas e Posições',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5VPZbef3Y-zZinCrkeAkA-l3odB-eIw2LJUiBdZWcM7dFbaLeC7FU3gInzyqRjIpgEtQ5olA-CIT76TYYImj5POYRksqB9T3Z2wVVxwfdp1g1XTXQi3KPFkbD-qS5laPIaDL5Q5d6khVL5BgfLxzSbACNJH69uDh8ADLtIzGTjnOXMFfR6_TyU3AtKyB6a3dLHY6hc_DetSZC9tJQxZWHi8KmzSTWUSYWesgF9I79G7ysnyofEuwa',
    alt: 'Athlete executing a precise armbar from closed guard inside B9 Jiu Jitsu Pompeia facility',
  },
  tech_card_4: {
    id: 'tech_card_4',
    label: 'Técnica 4: Saída da Montada (Upa / Ponte)',
    screen: 'Técnicas e Posições',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtoy5PuTxaiUweS0C7AKHmNB90Xq_F464qovmWg1irnfWhSXDeHPFBL3Zf_OVP7EdGyBAnA-3LMNfHH3zwbxKJu8xwmCPbIbxdfTd5_7V45Ge-dahgHeQbwH-XrCj1EW5nXXQDqB2QZ3mngc8V2auO7Tv4Vt7kJ-s3HidFlscrtIoxH1tbIdWMB7xOH10ka9TPuU1QrJq9Ci7RgTW9x81MG99-05xtIx09GUoksIPMGTlzzo01pwWB',
    alt: 'Grappler performing an effective bridge and roll escape (Upa) from mount position in B9 Jiu Jitsu Pompeia',
  },
  tech_card_5: {
    id: 'tech_card_5',
    label: 'Técnica 5: Meia Guarda com Escudo de Joelho',
    screen: 'Técnicas e Posições',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAas1RIxUb7to1S3Ttf5OgTfyt7FYDzUud5NE7wsD1GzgX1gcqTkYFhX9eqBbA4ZHsCYFZvzs5clFEu1vLEvg9p1cZ_VoGqdoI6R7hlrjdGg2QV_pPBBjA_jQlPQhx-r8eoP8IOL_V5iN8YrhDMAi8rKnx-Cg2d5AOJDAi0iw4tVpk3d56WrTeWlCV_rPtFDjcupstq4AX8ngJDuKaqcLH6hvVYYqM04PCrsdgrQveoHSnNruFb5Ad',
    alt: 'Advanced half guard knee shield technique demonstrated at B9 Jiu Jitsu Pompeia academy',
  },
  tech_card_6: {
    id: 'tech_card_6',
    label: 'Técnica 6: Mata-Leão (Rear Naked Choke)',
    screen: 'Técnicas e Posições',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfnbGssK7dnkTB15C_Cb72oQaLQgCfkyazIK-XwyFbqRnITLsKAq6spe29iO8AkGlA9xLa_wa8LTXu4KGmEwugkpN9JCDrBburw0y10hgfVKvQ4AWIQ2SEmRk3_XUAl-n-LLB-wh9DaM37-iuRC7JuhD7JIcbgF4j26EEYAy4EjUQ46Q5ve4ni2xOGdLj2UgPLu4fqNjgqEoa1EjRQYDfrK-2WiFuD_m3m9Hq9fkIIaCeAPyQezcE4',
    alt: 'Rear naked choke execution from back control position at B9 Jiu Jitsu Pompeia',
  },
  avatar_mestre: {
    id: 'avatar_mestre',
    label: 'Foto Prof. Mestre B9',
    screen: 'Técnicas e Posições',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfbt1jcjFVbjfcdK1ug_hMDogZUnIpz3QbW7EhoTF5IPWMUDAavKomNGeejMWc41cEXDBXttFYfX7TI7rqgNPluNgZI8n_JiZajHsFjSGRltDW_UrMpG-aCyb8EeKpPkRdHnkd-s8c6Ph9aIkTOJ_2M0clJpPH7uupdOgkMnEehhBrf2xKJu5cW_UBOU6c9p1cdFoL60c8tK6xDoulU06y6Xq35Xq36f1_Ph95v9sYKpHlAiew4dQl',
    alt: 'Portrait of B9 Jiu Jitsu Pompeia head professor wearing black belt with red bars',
  },

  // TELA 3: VIDEOAULAS
  video_featured: {
    id: 'video_featured',
    label: 'Destaque da Semana: Defesa de Guarda Aranha',
    screen: 'Videoaulas',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCGUx60LOq7BQVV68D2Qy5I55JsismHde6RG2lsuAb-bCMQL2kpv3BDQuSu5pdWx8cW4A2tBPI4hhow47QELZHWjoCPoVdMDIFjTe4IRZsE_5INWCw90Guvs7AwQPbXZyrEpNZaZ0azaXlXMZN1gz5tTG2TD2bJXVtFAZSY_05QUco0AZ3EH-v0zR_fCVWyUxnq_d40Ig5Z6DHIil90gy__DM7pz82W5Vj3U41y0vN5cpsJvzrlTUj',
    alt: 'Close-up action shot of two Brazilian Jiu Jitsu practitioners training in a modern dark dojo with gold accent lighting at B9 Jiu Jitsu Pompeia',
  },
  video_beg_1: {
    id: 'video_beg_1',
    label: 'Iniciante 01: Fundamentos da Guarda Fechada',
    screen: 'Videoaulas',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxQTWNmVSeNbaPI6K8APefPwHjWlEsaWrz3j1CCwScs_ODF4QtFRjL91KE01TDfBJ5pisoDPBL0oRtOwPk9t5QUFbu0iEwejR-M2sWpdxzVsyUVSkm5p3ZwhZZwvEMMhVooA-xXD25AfMphBN8zbUap_JeH0T3OtsgOp5ZGK1Xehd3wVKltb6G90a8nX4bhNz8tuKXpjSf8dycClBo7rQDcdz663kXCldSD7lGhcZxpjhix2bfOWC2',
    alt: 'Instructor demonstrating fundamental closed guard posture and break grips at B9 Jiu Jitsu Pompeia',
  },
  video_beg_2: {
    id: 'video_beg_2',
    label: 'Iniciante 02: Fuga de Quadril e Reposição',
    screen: 'Videoaulas',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmSjrN4G1i7VBdSHNIvre0zC0dTMqhFZS2-Ypabr2MLJPvtbvU5DJwdOSsvDTohT2eG_FWRUwfXTMUNIsislzdtMLgmjMiw0yOKaNifSKy-cG9AEMKkj1YdgEP0Aks-YxpGJecI4luEcZL7sWGnICPwtpfhgqvTuxscCqX44Un-Dc0JmPFXPbcBOylwq9Kj9MXLQ1HGRVUurMWpY4yCV9k2aLtlyNsrsQLXFioFJ0slxP5efTGKobj',
    alt: 'Detailed instruction of basic hip escape and shrimp drill on tatami mats at B9 Jiu Jitsu Pompeia',
  },
  video_beg_3: {
    id: 'video_beg_3',
    label: 'Iniciante 03: Estrangulamento Cruzado da Montada',
    screen: 'Videoaulas',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDKXiiMhSBVe_F4_By30-G49RrqRtlx5vnT-NNFSi4cLGBQHEbhZJpeTohyZxiMsrboyRj_n39LW66-a-UEADnn5_QMLL6gpmWGX6s3Chjhcnt4gK4Ww2L8hK7TZHKO8r1BzBK6DvkJYdEnW8kFBzqpC6-so02h1rIGPY-6wn_lxpgRohngumJPtZ28UbvwITHybp7aaEaVHZfC19sQGOQjcJrdD5j2R8cHbjPiOyVFVFOYMGxNidd',
    alt: 'Instructor showing standard collar choke from mount position in B9 Jiu Jitsu Pompeia academy',
  },
  video_int_1: {
    id: 'video_int_1',
    label: 'Intermediário 01: Varreduras da Guarda Aranha',
    screen: 'Videoaulas',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZ0PuHVLzUxtnU7iC-H4k3MSYTF0fmplEyqbnvR0_y7DtobdWzPO676jf4kIEoqJnWnyVRUZFHkffJW4ghM724XZBVzT3tIWHYkF8eBg9dJTWwtmfJwi_3LosNIVRPM7mHmWJ2TZGZk7KO78CW_TunfNlcOqA13UVz3Vf8Ivowe0ZDd2pWH9QDgcukZ6fEsbf6PcKfP07Ka3MFh77N0f4w3oXR2Xoo7Xb2rFOWyzXMaG2mFSQcDXkL',
    alt: 'Spider guard sweep execution by advanced students at B9 Jiu Jitsu Pompeia',
  },
  video_int_2: {
    id: 'video_int_2',
    label: 'Intermediário 02: Entradas de De La Riva',
    screen: 'Videoaulas',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWSzd7x1KlC8GvZ1H9gaUb49J8xuAasoqhu2P7aeE-0H30Szscilw6IuUjaxFBguKFWEQb-lCEIfNLQrqLnBWk9llYd0qFeadyGLzxEupu8QzOSVgRPKmrRO7hedePOD6ofuZYYIbHc-yn9xjfgurTxTvbcMVZStNPPteWdk0TU7xObzu4CPpWQlX-rDAN4CaPhogjM5mdJPNezhFbBFuOqabpC8ZU8dQ51gJ2NKcfGuHNiE8UBv4Y',
    alt: 'De La Riva guard hook details taught at B9 Jiu Jitsu Pompeia academy',
  },
  video_int_3: {
    id: 'video_int_3',
    label: 'Intermediário 03: Sequência de Omoplata e Raspagens',
    screen: 'Videoaulas',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCClI8vFMVj4m_BstUWYiroBHqvA6W3htuMPbUOWj5nbKQK3pBIMrqza9W30S-C3_3B4kvh5GhAGL68IOjLzxyCzwT9jsSAdLnnRLeZcirimvcl73zwSRBBGOjG2GJaHjD_f2IufQpTFGRqVOUxnDDlErGutI7L_05MygVqTqTYNfMInJ1RMSiK5i34L4XiTF2H9T7xTsVQebuDnBSsQiC6HREHCwkLfSpyunZohw0PJuWxvnVI1gJ6',
    alt: 'Omoplata setup from closed guard at B9 Jiu Jitsu Pompeia',
  },
  video_adv_1: {
    id: 'video_adv_1',
    label: 'Avançado 01: Fundamentos do Berimbolo',
    screen: 'Videoaulas',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRXGYmjo4cFqHFkPP-bOHStzdeDc6ZWuiHrUQ-JHL_DFXbb48a76Bqpl6RI8OvXDQGDqr5OfCGWGaKzLV6ki58OfJV24gI-aeVnylc-ocYdnma7VyIh7svfhL25BHdC7TQzNXndlxYx2_gRk5kjSpEKxyxH7RpNPqc4_FxZgjYnkfA1SCsuiMHdQMbtAdlZ5a7tu4u8uYKCGWLaDHoSp-v1PPptLyQPSqT1NN_fD_K8TH3m7JHPcsz',
    alt: 'Advanced berimbolo entry and back take demonstration at B9 Jiu Jitsu Pompeia',
  },
  video_adv_2: {
    id: 'video_adv_2',
    label: 'Avançado 02: Defesas e Saídas de Chave de Pé',
    screen: 'Videoaulas',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1-KlTG0UVDa1JkIxADHG7j0aCsqwXlnO8OYD4heaBl-Ms3AuiHMjOIi86ao2Ei3pjuEgg3oV9An97Xrz6s41dT4j9D5TJQT8-eLP7OmDBCmXtaBmG2EUS6fmNzr9uU5Ru-3rZ9fAbhtsG7dBguma7xpvFCynsvyR7iAN9beQw5HBPteGLh6Se3XEjmZoK3isLKhfN8-CE3sherIAiovIZl3hqFyl751yMzv1XpKCVetPv4Gp2wdGt',
    alt: 'Leg lock and heel hook defense technique at B9 Jiu Jitsu Pompeia',
  },
  video_adv_3: {
    id: 'video_adv_3',
    label: 'Avançado 03: Estratégias de Competição B9',
    screen: 'Videoaulas',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8VzLoXohqNXWo72YvCzUNP6sFzIXmU0zFkG6Eq5z3f8HGdJ2X_tgaV3CYrDCnR0y7QRdQJL0F00rJPmtabfo74jTYoJ5DVkE5U9h2dGmnjPhVty6xyXYUqxbGvhxDxfFyIVC-tnBS1pnQXH33xKvHNaMKi6YwfluQ_mU0FkMXHVHaX-hwdNdpzkKXl5XK0K_Wob63w-kONcu9FPGxGuyGblgAKfWzTSAOpdbEO511V6HPgyIT-ATv',
    alt: 'Competition strategy and psychological preparation seminar at B9 Jiu Jitsu Pompeia',
  },

  // TELA 4: PLANOS E MATRÍCULA
  plans_hero: {
    id: 'plans_hero',
    label: 'Fundo Hero Planos e Matrícula',
    screen: 'Planos e Matrícula',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAtqXu0TO-gmJIprkGNmSw1YzPIMLflM_HNa-lS1BrH_qHWIyMNFgoHwf0l8xZMTswn7OfsLwM_nEjwsv9qHkYozEpAf9mdVOG9vD4g3sABMsPuJ7wmt3A-byTU-DuqlOl8yV0p-xQ5G9r2keWr08YEfqAsQ1XJoWNZxSQ8C6ZhfIcRh-8_VKvkjJYVYJPHEihi9tAoox438RpHuMvJuQFQVe8ZQc4DkbYlYHjJDBEofLXLTuL9pxo',
    alt: 'High contrast atmospheric shot of a professional Jiu Jitsu mat facility at B9 Jiu Jitsu Pompeia',
  },
  plans_facility: {
    id: 'plans_facility',
    label: 'Foto Infraestrutura B9 Pompeia (Zona Oeste)',
    screen: 'Planos e Matrícula',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwmUIocZqG0r2E6qjOIR_5MpSZ4iWgTv4nHvieu-bsdGdhXqSTa3SSY5sHJwjIG3zGEYw61yZ3g1joVIFZtNDyzhdGbfbOAx_1ITs0WzxJKo_NPl3HVvJUb0kISKRdXvdwm1E3mn2cTgSqpIzwl7h7SPNveBS6EuK7Syy6bNBSV0_bQ7jc_kS_aOpM0ACy0_JC9ZoknpkWgjh5LixpvaCnpLYXeeEc65df3NzOPDHmZtjMaG_PanHo',
    alt: 'Dynamic training session inside B9 Jiu Jitsu Pompeia with professional grapplers sparring on clean black tatames',
  },
};
