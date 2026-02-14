import React, { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Champ requis';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Email invalide';
    if (!form.subject.trim()) newErrors.subject = 'Champ requis';
    if (!form.message.trim()) newErrors.message = 'Champ requis';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);

    // Simuler envoi (remplacez par appel API si nécessaire)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSuccess(false), 3500);
    }, 900);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#FDF1EF] rounded-2xl overflow-hidden p-8 sm:p-12 border border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

            {/* Left: Form */}
            <div>
              <h3 className="text-3xl md:text-4xl font-black text-[#222266] mb-3">Contactez-nous</h3>
              <p className="text-slate-600 mb-6">Une question, un retour ou besoin d'aide ? Envoyez-nous un message et nous reviendrons vers vous rapidement.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-semibold text-slate-700">Nom</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className={`mt-1 w-full rounded-xl border px-4 py-3 bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#286E6B] ${errors.name ? 'border-red-400' : 'border-slate-200'}`}
                      placeholder="Votre nom"
                    />
                    {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-slate-700">Email</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      className={`mt-1 w-full rounded-xl border px-4 py-3 bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#286E6B] ${errors.email ? 'border-red-400' : 'border-slate-200'}`}
                      placeholder="exemple@exemple.com"
                    />
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-700">Objet</label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className={`mt-1 w-full rounded-xl border px-4 py-3 bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#286E6B] ${errors.subject ? 'border-red-400' : 'border-slate-200'}`}
                    placeholder="Objet du message"
                  />
                  {errors.subject && <p className="text-xs text-red-500 mt-1">{errors.subject}</p>}
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-700">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows="5"
                    className={`mt-1 w-full rounded-2xl border px-4 py-3 bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#286E6B] ${errors.message ? 'border-red-400' : 'border-slate-200'}`}
                    placeholder="Écrivez votre message ici"
                  />
                  {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting || isSuccess}
                    className={`inline-flex items-center gap-3 px-6 py-3 rounded-2xl font-bold text-white transition-transform ${isSuccess ? 'bg-[#222266]' : 'bg-[#286E6B] hover:scale-105'}`}
                  >
                    {isSubmitting ? 'Envoi...' : isSuccess ? 'Message envoyé' : 'Envoyer'}
                  </button>
                </div>
              </form>
            </div>

            {/* Right: Image */}
            <div className="hidden lg:block">
              <img
                src="call.jpg"
                alt="Contact support"
                className="rounded-2xl  w-full h-100  object-top   object-cover border-4 border-white"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
