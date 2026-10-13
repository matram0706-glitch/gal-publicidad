# Recursos para la página de GAL Publicidad

## La marca (carpeta `marca/`)

| Archivo | Qué es |
|---|---|
| `logo-gal-publicidad-urbana.png` | Logo con fondo transparente |
| `camioneta-rotulada.jpg` | Ejemplo de rotulación vehicular |
| `intro-logo.mp4` | Animación del logo: rayos de luz sobre azul oscuro, logo plateado |

**Colores tomados del logo**

| Color | Código | Uso en el logo |
|---|---|---|
| Azul GAL | `#00339B` | Letras "GAL" (color principal) |
| Amarillo | `#FFF301` | Estela |
| Magenta | `#FF01FF` | Estela |
| Cian | `#01FFFF` | Estela |
| Negro tinta | `#333333` | Estela |
| Gris | `#666666` | "Publicidad urbana" |

**Frases:** "Publicidad urbana" · "Al alcance de ti"

## Skills instaladas

Se guardan en `.claude/skills/`. Claude las usa solo cuando hacen falta.

### Animación
| Skill | Para qué |
|---|---|
| `gsap-*` (8, oficiales) | Animaciones, scroll, dibujar la estela del logo (SVG) |
| `awwwards-animations` | Efectos de sitios premiados: scroll suave, texto animado, cursores |
| `awwwards-3d` | 3D con Three.js: sirve para recrear los rayos de luz y el logo metálico del video |

### Diseño y buen gusto
| Skill | Para qué |
|---|---|
| `taste-skill` | Evitar que la página se vea genérica o "hecha por IA" |
| `soft-skill` | Detalles que hacen ver una página cara (espaciado, sombras, letras) |
| `redesign-skill` | Mejorar una página que ya existe |
| `impeccable` | Revisar y pulir: jerarquía, color, tipografía, movimiento |
| `ui-ux-pro-max` | Biblioteca: 74 combinaciones de fuentes, 192 paletas, guías de UX |
| `design-system` | Ordenar colores, tamaños y espacios en un sistema |
| `brand` / `brandkit` | Mantener la identidad de la marca |
| `banner-design` | Banners para redes sociales y anuncios |

### Otras que vienen en los paquetes
`brutalist-skill`, `minimalist-skill` (estilos alternativos), `gpt-tasteskill`, `taste-skill-v1`, `output-skill`, `image-to-code-skill`, `imagegen-frontend-web`, `imagegen-frontend-mobile`, `stitch-skill`, `slides`, `ui-styling`, `design`. Algunas sirven para otras herramientas (Codex, Google Stitch) o para presentaciones; no estorban.

### Plugins activos en tu cuenta de Claude
`frontend-design`, `modern-web-guidance`, `audit-suite` (incluye `web-animation-design`), `design`, `marketing`, `brand-md`, `watch-video`.

## Sitios para inspirarse

- **Awwwards** (awwwards.com): los sitios mejor diseñados del mundo, con premios diarios
- **Godly** (godly.website): galería de páginas con animación
- **GSAP Showcase** (gsap.com/showcase): sitios hechos con GSAP
- **Codrops** (tympanus.net/codrops): tutoriales de efectos y animaciones

## Fuentes (tipografías) gratis para uso comercial

- **Google Fonts** (fonts.google.com)
- **Fontshare** (fontshare.com)

El logo usa una letra gruesa e inclinada. Buscar fuentes "bold italic" o "condensed" que combinen.

## Créditos y licencias

| Skill | Autor | Licencia |
|---|---|---|
| GSAP skills | GreenSock | MIT |
| UI/UX Pro Max | nextlevelbuilder | MIT |
| Taste Skill | Leonxlnx | MIT |
| awwwards-3d | tsogjavklann | MIT |
| awwwards-animations | devmartinese | MIT (según su README) |
| Impeccable | Paul Bakaus | Apache 2.0 |

## Ver videos: el comando `/watch`

Claude puede "ver" un video: saca fotogramas y transcribe el audio, y con eso
responde preguntas sobre lo que pasa en pantalla. Sirve para copiar ideas de
animación de sitios o referencias que te gusten.

**Cómo se usa:**

```
/watch marca/intro-logo.mp4 ¿cómo se mueve el logo?
/watch https://www.loom.com/share/xxxx resume qué enseña
```

Si no pones nada, te pregunta qué video del proyecto quieres ver.

**Límites:**

- **YouTube no funciona** desde las sesiones en la nube: pide verificación
  anti-bot porque la sesión corre en un servidor. Hay que bajar el video y
  subirlo al proyecto, o usar un enlace de otra plataforma.
- Videos de más de 10 minutos: conviene hacer una pregunta concreta en vez
  de pedir un resumen completo.

**Cómo funciona por dentro:** `.claude/hooks/session-start.sh` instala las
herramientas (`yt-dlp`, `faster-whisper`, `av<16`) al arrancar cada sesión en
la nube. `ffmpeg` ya viene incluido. En una computadora local el hook no hace
nada. Tarda unos segundos y solo corre una vez por sesión.
