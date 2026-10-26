// 'use client';

// import { BASE_URL } from '@/utils/baseUrl';
// import { useState } from 'react';

// interface ContactFormProps {
//   title?: string;
//   buttonText?: string;
//   className?: string;
// }

// export default function ContactForm({
//   title = 'Get in Touch',
//   buttonText = 'Send Message',
//   className = '',
// }: ContactFormProps) {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

  

//   const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
//     try{
//       const res = await fetch(`${BASE_URL}/contacts`,{
//        fullName,
//         formData.
//       })
//     }catch(err){
//       console.log("Something went wrong: ", err)
//     }
//   };

//   return (
//     <div className={`rounded border bg-white p-6 shadow-sm ${className}`}>
//       <h3 className="mb-6 text-2xl font-bold">{title}</h3>

//       <form onSubmit={handleSubmit} className="space-y-5">
//         {/* Full Name */}
//         <div>
//           <label
//             htmlFor="fullName"
//             className="mb-2 block text-sm font-medium text-slate-700"
//           >
//             Full Name <span className="text-red-500">*</span>
//           </label>

//           <input
//             id="fullName"
//             name="fullName"
//             type="text"
//             required
//             placeholder="John Doe"
//             value={formData.fullName}
//             onChange={handleChange}
//             className="h-12 w-full rounded-lg border border-slate-300 px-4 outline-none transition focus:border-blue-600"
//           />
//         </div>

//         {/* Email */}
//         <div>
//           <label
//             htmlFor="email"
//             className="mb-2 block text-sm font-medium text-slate-700"
//           >
//             Email <span className="text-red-500">*</span>
//           </label>

//           <input
//             id="email"
//             name="email"
//             type="email"
//             required
//             placeholder="john@company.com"
//             value={formData.email}
//             onChange={handleChange}
//             className="h-12 w-full rounded-lg border border-slate-300 px-4 outline-none transition focus:border-blue-600"
//           />
//         </div>

//         {/* Phone */}
//         <div>
//           <label
//             htmlFor="phone"
//             className="mb-2 block text-sm font-medium text-slate-700"
//           >
//             Phone
//           </label>

//           <input
//             id="phone"
//             name="phone"
//             type="tel"
//             placeholder="+91 98765 43210"
//             value={formData.phone}
//             onChange={handleChange}
//             className="h-12 w-full rounded-lg border border-slate-300 px-4 outline-none transition focus:border-blue-600"
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full  bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
//         >
//           {buttonText}
//         </button>
//       </form>
//     </div>
//   );
// }

'use client';

import { BASE_URL } from '@/utils/baseUrl';
import { useState } from 'react';

interface ContactFormProps {
  title?: string;
  buttonText?: string;
  className?: string;
}

type Status = 'idle' | 'loading' | 'success' | 'error';

const initialForm = {
  fullName: '',
  email: '',
  phone: '',
};

export default function ContactForm({
  title = 'Get in Touch',
  buttonText = 'Send Message',
  className = '',
}: ContactFormProps) {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const res = await fetch(`${BASE_URL}/contacts`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: formData.fullName,
    email: formData.email,
    phone: formData.phone,
  }),
});

      const result = await res.json();

      if (res.ok && result.success !== false) {
        setStatus('success');
        setMessage('Thank you! We will get back to you soon.');
        setFormData(initialForm);
      } else {
        setStatus('error');
        setMessage(result.message || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      console.error('Something went wrong: ', err);
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className={`rounded border bg-white p-6 shadow-sm ${className}`}>
      <h3 className="mb-6 text-2xl font-bold">{title}</h3>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Full Name */}
        <div>
          <label
            htmlFor="fullName"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Full Name <span className="text-red-500">*</span>
          </label>

          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            placeholder="John Doe"
            value={formData.fullName}
            onChange={handleChange}
            className="h-12 w-full rounded-lg border border-slate-300 px-4 outline-none transition focus:border-blue-600"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Email <span className="text-red-500">*</span>
          </label>

          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="john@company.com"
            value={formData.email}
            onChange={handleChange}
            className="h-12 w-full rounded-lg border border-slate-300 px-4 outline-none transition focus:border-blue-600"
          />
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Phone
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+91 98765 43210"
            value={formData.phone}
            onChange={handleChange}
            className="h-12 w-full rounded-lg border border-slate-300 px-4 outline-none transition focus:border-blue-600"
          />
        </div>

        {/* Status message */}
        {message && (
          <p
            className={`text-sm ${
              status === 'success' ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {message}
          </p>
        )}

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === 'loading' ? 'Sending...' : buttonText}
        </button>
      </form>
    </div>
  );
}