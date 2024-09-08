import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import CreateTrip from './create-trip/index.jsx'
import Header from './components/custom/Header.jsx'
import { Toaster } from './components/ui/sonner.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
import Viewtrip from './view-trip/[tripid]/index.jsx'
import MyTrips from './my-trips/index.jsx'

const router = createBrowserRouter([
  {
    path: "https://ai-trip-planner-1tox.vercel.app/",
    element: <App />
  },
  {
    path:'https://ai-trip-planner-1tox.vercel.app/create-trip',
    element: <CreateTrip />
  },
  {
    path:'https://ai-trip-planner-1tox.vercel.app/view-trip/:tripId',
    element: <Viewtrip />
  },
  {
    path:'https://ai-trip-planner-1tox.vercel.app/my-trips',
    element: <MyTrips />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
      <Header />
      <Toaster />
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </StrictMode>,
)
