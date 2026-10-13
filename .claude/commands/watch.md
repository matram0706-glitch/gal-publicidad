---
description: Ver y analizar un video (archivo del proyecto o link)
argument-hint: <archivo-o-link> [qué quieres saber]
---

Analiza el video indicado usando la skill `watch-video:watch-video`.

Entrada del usuario: $ARGUMENTS

Instrucciones:

1. Invoca la skill `watch-video:watch-video` con esa entrada.
2. Si el usuario no dio ningún archivo ni link, busca videos dentro del
   proyecto (`.mp4`, `.mov`, `.webm`) y pregúntale cuál quiere ver.
3. Si la entrada incluye una pregunta concreta, pásala como
   `--highlights-prompt` para no gastar tokens de más.
4. YouTube está bloqueado desde las sesiones en la nube (pide verificación
   anti-bot). Si el link es de YouTube, dilo claramente y pide a Héctor que
   suba el archivo al proyecto o use otro enlace.
5. Responde **en español**, simple y paso a paso, describiendo qué se ve en
   los fotogramas y qué se escucha, sin tecnicismos innecesarios.
