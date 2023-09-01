import './App.css';
import Root from './components/root';

//for supabase
import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'

//maybe env var? check how it is done for github pages
const supabase = createClient(
  'https://aiqjywvacfonoaxcnzog.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFpcWp5d3ZhY2Zvbm9heGNuem9nIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM2MDU4MzcsImV4cCI6MjAwOTE4MTgzN30.j2j1R45mmxmi9XxuzG4NbRbcHsGdsNPyGoJfj94LKuE'
);

function App() {
  return (
    <Root />
  );
}

export default App;
