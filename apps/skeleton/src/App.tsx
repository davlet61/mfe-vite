import { useVisibility } from 'lib/hooks/stores';
import { Button, Radio } from 'ui';

import { Modal, Home } from './components';

const App = () => {
  const { toggleVisibility } = useVisibility((state) => state);

  return (
    <main className="">
      <Home />
      <Button onClick={toggleVisibility}>Click</Button>
      <Modal />
      <Radio label="Plans" />
    </main>
  );
};

export default App;
