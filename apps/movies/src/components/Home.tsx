import { Button, Link } from 'ui/Button';
import { Container } from 'ui/Container';

const Home = () => (
  <Container>
    <div className="space-y-6">
      <div className="text-center text-8xl font-bold italic">
        <span className="bg-gradient-to-r from-[#9b51e0] to-[#2d9cdb] bg-clip-text text-transparent">nytro</span>
      </div>
      <div className="prose-lg mt-8">
        Welcome to{' '}
        <Link href="https://nytro.dev" rel="noopener" target="_blank">
          Github
        </Link>
        , a project scaffold by{' '}
        <Link href="https://github.com/davlet61" rel="noopener" target="_blank">
          @dyakshib
        </Link>
        . This project contains a very minimal note-taking application.
      </div>

      <Button href="/notes" fullWidth>
        View Your Notes
      </Button>
    </div>
  </Container>
);

export default Home;
