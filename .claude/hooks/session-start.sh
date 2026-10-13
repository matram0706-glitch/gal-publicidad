#!/bin/bash
# Prepara la sesión en la nube para que la skill /watch-video funcione.
# Instala: yt-dlp (bajar videos), faster-whisper (transcribir audio),
# y fija PyAV < 16 (las versiones nuevas rompen faster-whisper).
set -euo pipefail

# Solo en sesiones en la nube. En una computadora local no toca nada.
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

# ffmpeg y ffprobe ya vienen en el contenedor; si faltaran, avisar y seguir.
if ! command -v ffmpeg >/dev/null 2>&1; then
  echo "AVISO: falta ffmpeg, /watch-video no podra extraer fotogramas." >&2
fi

# Idempotente: si ya esta todo, no reinstala.
if command -v yt-dlp >/dev/null 2>&1 \
  && python3 -c 'import faster_whisper, av, sys; sys.exit(0 if int(av.__version__.split(".")[0]) < 16 else 1)' 2>/dev/null; then
  echo "watch-video: dependencias ya instaladas."
  exit 0
fi

echo "watch-video: instalando dependencias de video..."
pip install --quiet --disable-pip-version-check \
  yt-dlp \
  faster-whisper \
  'av<16'

echo "watch-video: listo."
