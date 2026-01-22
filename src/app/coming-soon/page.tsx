import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '../../components/ui/Button';

export const metadata: Metadata = {
  title: 'Coming Soon | Creative Portfolio',
  description: 'My creative portfolio is currently under construction. Check back soon!',
};

export default function ComingSoon() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5">
      <div className="text-center space-y-6 px-4 max-w-md">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Coming Soon
          </h1>
          <p className="text-lg text-muted-foreground">
            My creative portfolio is currently being crafted with care. 
            Check back soon for deep case studies, technical writing, and more!
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button asChild size="lg">
            <Link href="/">
              Back to Main Portfolio
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
