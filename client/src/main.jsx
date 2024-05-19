import { render } from 'preact'
import { App } from './components/App/App'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import axios from "axios";
import './style.css'

const defaultUrl = import.meta.env.VITE_API_URL;
axios.defaults.baseURL = defaultUrl || "http://localhost:3001";

const queryClient = new QueryClient()

render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>,
  document.getElementById('app'))
