
import React from 'react';

export interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
  eduScore: number;
  balance: number;
  sellingCount: number;
  circulatedCount: number;
  impact: {
    paperSaved: number;
    co2Reduced: number;
  };
}

export interface Badge {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  unlocked: boolean;
  progress: number;
  target: number;
  category: 'green' | 'academic' | 'trust';
}

export interface ActivityItem {
  id: string;
  bookTitle: string;
  subject: string;
  type: 'sale' | 'rental' | 'purchase';
  status: 'active' | 'completed' | 'pending';
  price: number;
  date: string;
  reusedTimes: number;
}

export interface FeatureBlock {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  cta: string;
}

export interface Step {
  number: number;
  title: string;
  description: string;
}

export type MascotMood = 'happy' | 'winking' | 'thinking' | 'studying';

export interface BookListing {
  id: string;
  title: string;
  subjectGroup: string;
  level: string;
  condition: string;
  price: number;
  originalPrice?: number;
  rentalPrice2Days?: number;
  rentalPrice7Days?: number;
  location: string;
  sellerName: string;
  sellerScore: number;
  images: string[];
  notes: string[];
  isFlashSale?: boolean;
}
