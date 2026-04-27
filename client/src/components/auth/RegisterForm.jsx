import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, User, Smartphone, ArrowRight, Eye, EyeOff } from 'lucide-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { AppleIconSVG } from './AuthIcons';

import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      mobileNumber: '',
      password: '',
      confirmPassword: '',
      terms: false,
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required('Full name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      mobileNumber: Yup.string().matches(/^[0-9]{10}$/, 'Mobile number must be 10 digits').required('Mobile number is required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
      confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm password is required'),
      terms: Yup.boolean().oneOf([true], 'You must accept the terms and conditions').required('Required'),
    }),
    onSubmit: async (values) => {
      setError('');
      setIsSubmitting(true);
      const result = await register(values.fullName, values.email, values.password);
      setIsSubmitting(false);
      if (result.success) {
        navigate('/explore');
      } else {
        setError(result.message);
      }
    },
  });

  return (
    <div className="bg-white rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-10 border border-slate-100">
      <div className="flex flex-col items-center mb-10">
        <div className="bg-emerald-500 p-4 rounded-full text-white shadow-xl shadow-emerald-100 mb-4">
          <User size={32} />
        </div>
        <h2 className="text-2xl font-black text-slate-900">Create Your Account</h2>
        <p className="text-sm text-slate-500 mt-1 font-medium">
          Already have an account? <Link to="/login" className="text-emerald-500 font-bold hover:underline">Sign in</Link>
        </p>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-2xl text-red-600 text-[11px] font-black flex items-center space-x-2 animate-shake tracking-wide uppercase">
          <span className="w-1.5 h-1.5 bg-red-500 rounded-full shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={formik.handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1.5 col-span-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.fullName}
                    className={`w-full px-5 py-3.5 bg-white border ${formik.touched.fullName && formik.errors.fullName ? 'border-red-500 focus:ring-red-500/10' : 'border-slate-200 focus:ring-brand-500/10 focus:border-brand-500/30'} rounded-2xl focus:ring-4 outline-none transition-all pl-12 text-slate-900 font-medium placeholder-slate-400`}
                  />
                </div>
                {formik.touched.fullName && formik.errors.fullName ? (
                  <div className="text-red-500 text-[10px] mt-1 font-bold ml-1">{formik.errors.fullName}</div>
                ) : null}
              </div>

              <div className="space-y-1.5 col-span-2 md:col-span-1">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className={`w-full px-5 py-3.5 bg-white border ${formik.touched.email && formik.errors.email ? 'border-red-500 focus:ring-red-500/10' : 'border-slate-200 focus:ring-brand-500/10 focus:border-brand-500/30'} rounded-2xl focus:ring-4 outline-none transition-all pl-12 text-slate-900 font-medium placeholder-slate-400`}
                  />
                </div>
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500 text-[10px] mt-1 font-bold ml-1">{formik.errors.email}</div>
                ) : null}
              </div>

              <div className="space-y-1.5 col-span-2 md:col-span-1">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Mobile Number</label>
                <div className="relative">
                  <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input
                    id="mobileNumber"
                    name="mobileNumber"
                    type="text"
                    placeholder="Enter your mobile number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.mobileNumber}
                    className={`w-full px-5 py-3.5 bg-white border ${formik.touched.mobileNumber && formik.errors.mobileNumber ? 'border-red-500 focus:ring-red-500/10' : 'border-slate-200 focus:ring-brand-500/10 focus:border-brand-500/30'} rounded-2xl focus:ring-4 outline-none transition-all pl-12 text-slate-900 font-medium placeholder-slate-400`}
                  />
                </div>
                {formik.touched.mobileNumber && formik.errors.mobileNumber ? (
                  <div className="text-red-500 text-[10px] mt-1 font-bold ml-1">{formik.errors.mobileNumber}</div>
                ) : null}
              </div>

              <div className="space-y-1.5 col-span-2 md:col-span-1">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a strong password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    className={`w-full px-5 py-3.5 bg-white border ${formik.touched.password && formik.errors.password ? 'border-red-500 focus:ring-red-500/10' : 'border-slate-200 focus:ring-brand-500/10 focus:border-brand-500/30'} rounded-2xl focus:ring-4 outline-none transition-all pl-12 pr-12 text-slate-900 font-medium placeholder-slate-400`}
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-red-500 text-[10px] mt-1 font-bold ml-1">{formik.errors.password}</div>
                ) : null}
              </div>

              <div className="space-y-1.5 col-span-2 md:col-span-1">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Confirm Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.confirmPassword}
                    className={`w-full px-5 py-3.5 bg-white border ${formik.touched.confirmPassword && formik.errors.confirmPassword ? 'border-red-500 focus:ring-red-500/10' : 'border-slate-200 focus:ring-brand-500/10 focus:border-brand-500/30'} rounded-2xl focus:ring-4 outline-none transition-all pl-12 pr-12 text-slate-900 font-medium placeholder-slate-400`}
                  />
                  <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                    {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <div className="text-red-500 text-[10px] mt-1 font-bold ml-1">{formik.errors.confirmPassword}</div>
            ) : null}
          </div>
        </div>

        <div className="flex flex-col pt-2">
          <div className="flex items-center space-x-2">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              checked={formik.values.terms}
              className="w-5 h-5 rounded border-slate-300 text-emerald-500 focus:ring-emerald-500 transition-all cursor-pointer"
            />
            <label htmlFor="terms" className="text-xs text-slate-500 font-bold">
              I agree to the <Link to="/terms" className="text-emerald-500 hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-emerald-500 hover:underline">Privacy Policy</Link>
            </label>
          </div>
          {formik.touched.terms && formik.errors.terms ? (
            <div className="text-red-500 text-[10px] mt-1 font-bold ml-1">{formik.errors.terms}</div>
          ) : null}
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className={`w-full bg-emerald-600 hover:bg-emerald-700 text-white font-black py-4 rounded-2xl transition-all shadow-lg shadow-emerald-100 active:scale-[0.98] mt-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
        >
          {isSubmitting ? 'Creating Account...' : 'Create Account'}
        </button>

        <div className="relative flex items-center justify-center py-2 mt-4">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100"></div></div>
          <span className="relative bg-white px-4 text-[9px] font-bold text-slate-300 tracking-[0.2em] uppercase">Or sign up with</span>
        </div>

        <div className="flex gap-4">
          <button type="button" className="flex-1 flex items-center justify-center space-x-3 py-3 border border-slate-100 rounded-2xl hover:bg-slate-50 transition-all font-bold text-slate-700 shadow-sm active:scale-[0.98]">
            <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-5 h-5" alt="Google" />
            <span className="text-sm font-bold">Google</span>
          </button>
          <button type="button" className="flex-1 flex items-center justify-center space-x-3 py-3 border border-slate-100 rounded-2xl hover:bg-slate-50 transition-all font-bold text-slate-700 shadow-sm active:scale-[0.98]">
            <AppleIconSVG size={20} className="text-black" />
            <span className="text-sm font-bold">Apple</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
