import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, ArrowRight, User } from 'lucide-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { AppleIconSVG } from './AuthIcons';

import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    }),
    onSubmit: async (values) => {
      setError('');
      setIsSubmitting(true);
      const result = await login(values.email, values.password);
      setIsSubmitting(false);
      if (result.success) {
        navigate('/explore');
      } else {
        setError(result.message);
      }
    },
  });

  return (
    <div className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-10 border border-slate-100 flex flex-col">
      <div className="flex justify-center mb-8">
        <div className="bg-brand-500 p-5 rounded-full text-white shadow-xl shadow-brand-100">
          <User size={40} />
        </div>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-2xl text-red-600 text-sm font-bold flex items-center space-x-2 animate-shake">
          <span className="w-1.5 h-1.5 bg-red-500 rounded-full shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={formik.handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
          <div className="relative">
            <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email address"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className={`w-full px-5 py-4 bg-white border ${formik.touched.email && formik.errors.email ? 'border-red-500 focus:ring-red-500/10' : 'border-slate-100 focus:ring-brand-500/10'} rounded-2xl focus:ring-4 outline-none transition-all pl-14 text-slate-900 font-medium placeholder-slate-400`}
            />
          </div>
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-xs mt-1 font-bold ml-1">{formik.errors.email}</div>
          ) : null}
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-bold text-slate-700">Password</label>
            <Link to="/forgot-password" size="sm" className="text-sm font-bold text-brand-500 hover:text-brand-600 transition-colors">Forgot?</Link>
          </div>
          <div className="relative">
            <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className={`w-full px-5 py-4 bg-white border ${formik.touched.password && formik.errors.password ? 'border-red-500 focus:ring-red-500/10' : 'border-slate-100 focus:ring-brand-500/10'} rounded-2xl focus:ring-4 outline-none transition-all pl-14 pr-14 text-slate-900 font-medium placeholder-slate-400`}
            />
            <Lock className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          </div>
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500 text-xs mt-1 font-bold ml-1">{formik.errors.password}</div>
          ) : null}
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className={`w-full bg-brand-500 hover:bg-brand-600 text-white font-extrabold py-5 rounded-2xl transition-all flex items-center justify-center space-x-3 group shadow-lg shadow-brand-100 active:scale-[0.98] ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
        >
          <span className="text-lg">{isSubmitting ? 'Signing In...' : 'Sign In'}</span>
          {!isSubmitting && <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />}
        </button>

        <div className="relative flex items-center justify-center py-2">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-100"></div>
          </div>
          <span className="relative bg-white px-4 text-[10px] font-extrabold text-slate-300 tracking-[0.2em] uppercase">Or continue with</span>
        </div>

        <div className="flex gap-4">
          <button type="button" className="flex-1 flex items-center justify-center space-x-3 py-4 border border-slate-100 rounded-2xl hover:bg-slate-50 transition-all font-bold text-slate-700 shadow-sm active:scale-[0.98]">
            <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-5 h-5" alt="Google" />
            <span className="text-sm">Google</span>
          </button>
          <button type="button" className="flex-1 flex items-center justify-center space-x-3 py-4 border border-slate-100 rounded-2xl hover:bg-slate-50 transition-all font-bold text-slate-700 shadow-sm active:scale-[0.98]">
            <AppleIconSVG size={20} className="text-black" />
            <span className="text-sm">Apple</span>
          </button>
        </div>

        <p className="text-center text-sm text-slate-500 pt-2 font-medium">
          Don't have an account? <Link to="/register" className="text-emerald-500 font-extrabold hover:underline">Create one now</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
