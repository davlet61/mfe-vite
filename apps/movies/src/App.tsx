import { useVisibility } from 'lib/hooks/stores';
import React from 'react';
import { Button, Radio } from 'ui';

import { Modal, Home } from './components';

// @ts-ignore
const Navbar = React.lazy(() => import('skeleton/Navbar'));

class ErrorBoundary extends React.Component<
  {
    children: React.ReactNode;
  },
  {
    hasError: boolean;
  }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {}

  render() {
    if (this.state.hasError) {
      return <Navbar />;
    }

    return this.props.children;
  }
}

const App = () => {
  const { toggleVisibility } = useVisibility((state) => state);

  return (
    <main className="">
      <ErrorBoundary>
        <Navbar />
      </ErrorBoundary>
      <Home />
      <Button onClick={toggleVisibility}>Click</Button>
      <Modal />
      <Radio label="Plans" />
    </main>
  );
};

export default App;
