export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <section className="max-w-3xl text-center space-y-6">
        <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
          ResonanceAI
        </p>

        <h1 className="text-4xl md:text-6xl font-bold">
          Real-Time Voice-to-Voice AI Agent
        </h1>

        <p className="text-lg text-gray-300">
          ResonanceAI is a low-latency conversational AI system that will support
          live microphone streaming, real-time transcription, streaming LLM
          responses, voice synthesis, and interruption handling.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
          <div className="rounded-2xl border border-gray-800 p-5">
            <h2 className="font-semibold text-blue-300">Listen</h2>
            <p className="text-sm text-gray-400 mt-2">
              Capture live microphone audio from the browser.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 p-5">
            <h2 className="font-semibold text-blue-300">Think</h2>
            <p className="text-sm text-gray-400 mt-2">
              Stream user queries to an AI backend.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 p-5">
            <h2 className="font-semibold text-blue-300">Speak</h2>
            <p className="text-sm text-gray-400 mt-2">
              Convert AI responses into natural voice output.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}