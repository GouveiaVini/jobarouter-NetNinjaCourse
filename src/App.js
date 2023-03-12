import {  
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'

// pages
import Home  from './Pages/Home'
import About from './Pages/About'

//layouts 
import RootLayouts from './Layouts/RootLayouts'
import HelpLayouts from './Layouts/HelpLayouts'
import Faq from './Pages/Faq'
import Contact, { contactAction } from './Pages/Contact'
import NotFound from './Pages/NotFound'
import Careers, { careersLoader } from './Pages/Careers'
import CareersLayouts from './Layouts/CareersLayouts'
import CareerDetails, { careerDetailsLoader } from './Pages/CareerDetails'
import CareersError from './Pages/CareersError'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayouts />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />

      <Route path='help' element={<HelpLayouts />}>
        <Route path='faq' element={<Faq />}/>
        <Route path='contact' element={<Contact />} action={contactAction}/>
      </Route>

      <Route path='careers' element={<CareersLayouts />} errorElement={<CareersError />}>
        <Route 
          index 
          element={<Careers />}
          loader={careersLoader}
        />
        <Route 
          path=':id'
          element={<CareerDetails />}
          loader={careerDetailsLoader}
        />
      </Route>

      <Route path='*' element={<NotFound />} />
    </Route>
  )
)

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App
