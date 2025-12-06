import Link from 'next/link';
import { Button } from '../../../components/ui/Button';
import { Container } from '../../../components/ui/Container';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center pt-20 pb-20">
      <Container>
        <div className="text-center space-y-6">
          <h1 className="text-6xl font-bold text-foreground">404</h1>
          <h2 className="text-2xl font-semibold text-foreground">Project Not Found</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            The project you're looking for doesn't exist or has been moved.
          </p>
          <Button size="lg" asChild>
            <Link href="/projects">Back to Projects</Link>
          </Button>
        </div>
      </Container>
    </div>
  );
}

