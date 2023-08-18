import { Route, Routes } from 'react-router-dom';
import GroupList from './pages/groups/GroupList';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Info from './pages/Info';
import Inschrijven from './pages/Inschrijven';
import Kalender from './pages/Kalender';
import Kamp from './pages/Kamp';
import Privacy from './pages/Privacy';
import Uniform from './pages/Uniform';
import Verhuur from './pages/Verhuur';
import AuthLanding from './pages/AuthLanding';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { LOGO_DATA, BRAND_NAME } from './data/miscData';
import PAGES from './data/pages';
import NotFound from './pages/NotFound';
import Group from './pages/groups/Group';
import GroupForm from './pages/groups/GroupForm';
import PeopleForm from './pages/groups/PeopleForm';
import RequireAuth from './components/auth/RequireAuth';

function App() {
  return (
    <div className="mx-auto flex min-h-screen max-w-screen-xl flex-col">
      <Navigation logoData={LOGO_DATA} brandName={BRAND_NAME} items={PAGES} />
      <div className="flex-grow">
        <Routes>
          <Route index element={<Home />} />
          <Route path="info" element={<Info />} />
          <Route path="kalender" element={<Kalender />} />
          <Route path="afdelingen">
            <Route index element={<GroupList />} />
            <Route path=":id">
              <Route index element={<Group />} />
              <Route
                path="leiding/create"
                element={
                  <RequireAuth>
                    <PeopleForm />
                  </RequireAuth>
                }
              />
              <Route
                path="leiding/create/:leidingId"
                element={
                  <RequireAuth>
                    <PeopleForm />
                  </RequireAuth>
                }
              />
            </Route>
            <Route
              path="create"
              element={
                <RequireAuth>
                  <GroupForm />
                </RequireAuth>
              }
            >
              <Route
                path=":id"
                element={
                  <RequireAuth>
                    <GroupForm />
                  </RequireAuth>
                }
              />
            </Route>
          </Route>
          <Route path="kamp" element={<Kamp />} />
          <Route path="inschrijven" element={<Inschrijven />} />
          <Route path="contact" element={<Contact />} />
          <Route path="verhuur" element={<Verhuur />} />
          <Route path="uniform" element={<Uniform />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="login" element={<AuthLanding />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
