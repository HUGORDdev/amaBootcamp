import { useChat } from '@ai-sdk/react';

const Chatbot = () => {
  // messages: liste des messages
  // input: valeur actuelle du champ texte
  // handleInputChange: gère la frappe au clavier
  // handleSubmit: gère l'envoi (appelle automatiquement /api/chat)
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="fixed bottom-5 right-5 w-96">
      <div className="bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden flex flex-col h-[500px]">
        
        {/* Header */}
        <div className="bg-slate-800 text-white p-4 font-medium">Assistant Intelligent</div>

        {/* Zone des messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
          {messages.map(m => (
            <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`px-4 py-2 rounded-2xl max-w-[85%] shadow-sm ${
                m.role === 'user' 
                  ? 'bg-blue-600 text-white rounded-br-none' 
                  : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none'
              }`}>
                {m.content}
              </div>
            </div>
          ))}
        </div>

        {/* Formulaire d'envoi */}
        <form onSubmit={handleSubmit} className="p-4 border-t bg-white flex gap-2">
          <input
            className="flex-1 bg-gray-100 border-none rounded-full px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none text-sm"
            value={input}
            placeholder="Posez votre question..."
            onChange={handleInputChange}
          />
          <button 
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};
export default Chatbot;