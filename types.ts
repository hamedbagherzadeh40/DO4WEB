import React from 'react';

export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  // Fix: Import React to resolve the React namespace for ReactNode type
  icon: React.ReactNode;
}