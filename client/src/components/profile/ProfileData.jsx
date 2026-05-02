import React from 'react';
import { Activity, Bookmark, User, Star, TrendingDown, Info, ShieldCheck } from 'lucide-react';

export const userData = {
  name: 'Dev Singh',
  role: 'People Analyst & Real Estate Enthusiast',
  email: 'devsingh@example.com',
  phone: '+91 98765 43210',
  location: 'Mumbai, Maharashtra, India',
  memberSince: 'Jan 2024',
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&h=300&auto=format&fit=crop',
  coverImage: '/images/neighborhoods/for_desbord.png',
  isPremium: true
};

export const savedNeighborhoods = [
  {
    id: 1,
    name: 'Powai',
    city: 'Mumbai',
    score: 8.7,
    tags: ['Great Connectivity', 'Safe'],
    image: '/images/neighborhoods/powai.png'
  },
  {
    id: 2,
    name: 'Bandra West',
    city: 'Mumbai',
    score: 8.4,
    tags: ['Vibrant Life', 'High Amenities'],
    image: '/images/neighborhoods/bandra.png'
  },
  {
    id: 3,
    name: 'Whitefield',
    city: 'Bangalore',
    score: 8.1,
    tags: ['IT Hub', 'Good Connectivity'],
    image: '/images/neighborhoods/for_desbord.png'
  },
  {
    id: 4,
    name: 'Koramangala',
    city: 'Bangalore',
    score: 8.0,
    tags: ['Youth Friendly', 'Bustling'],
    image: '/images/neighborhoods/koramangala.png'
  }
];

export const activities = [
  { id: 1, type: 'compare', title: 'Compared Powai vs Bandra West', detail: 'Viewed comparison details', time: '2 hours ago', icon: <Activity className="text-blue-500" /> },
  { id: 2, type: 'save', title: 'Saved Whitefield', detail: 'Added to your saved neighborhoods', time: '1 day ago', icon: <Bookmark className="text-green-500" /> },
  { id: 3, type: 'view', title: 'Viewed Hebbal', detail: 'Checked neighborhood details', time: '2 days ago', icon: <User className="text-purple-500" /> },
  { id: 4, type: 'compare', title: 'Compared Koramangala vs HSR Layout', detail: 'Viewed comparison details', time: '3 days ago', icon: <Activity className="text-blue-500" /> },
  { id: 5, type: 'review', title: 'Review submitted for Powai', detail: 'Rating: 5/5 stars', time: '1 week ago', icon: <Star className="text-yellow-500" /> }
];

export const alerts = [
  { id: 1, title: 'Price Drop in Powai', detail: 'Average price dropped by 3% in the last 30 days', time: '2h ago', type: 'price', icon: <TrendingDown size={18} /> },
  { id: 2, title: 'AQI Update in Bangalore', detail: 'Air quality improved in Whitefield', time: '1 day ago', type: 'info', icon: <Info size={18} /> },
  { id: 3, title: 'Safety Update in Bandra West', detail: 'New police patrolling initiative started', time: '2 days ago', type: 'safety', icon: <ShieldCheck size={18} /> }
];

export const reviews = [
  { 
    id: 1, 
    name: 'Powai, Mumbai', 
    rating: 5, 
    text: 'Excellent connectivity and great social life. Love the greenery!', 
    date: '12 May 2025',
    image: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=100&h=100&auto=format&fit=crop'
  },
  { 
    id: 2, 
    name: 'Whitefield, Bangalore', 
    rating: 4, 
    text: 'Great for working professionals. Good infrastructure.', 
    date: '9 May 2025',
    image: 'https://images.unsplash.com/photo-1590644365607-1c5a519a7a37?q=80&w=100&h=100&auto=format&fit=crop'
  },
  { 
    id: 3, 
    name: 'Hebbal, Bangalore', 
    rating: 3, 
    text: 'Peaceful and well planned area. Traffic can improve.', 
    date: '5 May 2025',
    image: 'https://images.unsplash.com/photo-1518005020453-eb35aed60f8b?q=80&w=100&h=100&auto=format&fit=crop'
  }
];
