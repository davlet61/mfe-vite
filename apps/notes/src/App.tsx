import { useVisibility } from 'lib/hooks/stores';
import React from 'react';
import { Button, Radio } from 'ui';

import { Modal, Home } from './components';

const Navbar = React.lazy(() => import('skeleton/Navbar'));

const App = () => {
  const { toggleVisibility } = useVisibility((state) => state);

  return (
    <main className="">
      <React.Suspense fallback="Loading..">
        <Navbar />
      </React.Suspense>
      <Home />
      <Button onClick={toggleVisibility}>Click</Button>
      <Modal />
      <Radio label="Plans" />
    </main>
  );
};

export default App;
