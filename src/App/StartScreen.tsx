type StartScreenProps = {
  onStart: () => void
}

const StartScreen = ({ onStart }: StartScreenProps) => {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-16">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(2,132,199,0.35),transparent),radial-gradient(ellipse_60%_50%_at_100%_50%,rgba(19,78,74,0.25),transparent),radial-gradient(ellipse_50%_40%_at_0%_80%,rgba(2,132,199,0.12),transparent)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-neutral-950/90" aria-hidden />

      <div className="relative z-10 flex max-w-lg flex-col items-center text-center">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.35em] text-sky-400/90 md:text-sm">
          Perguntas em boa companhia
        </p>
        <h1 className="font-serif text-4xl font-medium leading-tight text-white md:text-6xl md:leading-tight">
          Isso não é um jogo!
        </h1>
        <p className="mt-6 font-mono text-sm leading-relaxed text-slate-400 md:text-base">
          Um baralho de conversas: categorias, tons de cor e perguntas sorteadas para vocês trocarem
          ideia com calma — sem placar, sem pressa.
        </p>

        <button
          type="button"
          onClick={onStart}
          className="mt-12 rounded-xl border border-white/15 bg-white/10 px-10 py-4 font-mono text-sm uppercase tracking-[0.2em] text-white shadow-lg shadow-sky-950/20 backdrop-blur-sm transition hover:border-sky-400/40 hover:bg-white/[0.14] focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 active:scale-[0.98] md:text-base"
        >
          Começar
        </button>

        <p className="mt-10 max-w-sm font-mono text-xs leading-relaxed text-slate-500">
          Toque em &quot;Próximo&quot; quando quiserem outra pergunta. O app lembra o que já saiu
          nesta sessão.
        </p>
      </div>
    </div>
  )
}

export { StartScreen }
