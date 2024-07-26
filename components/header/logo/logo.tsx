import { cn } from '@/lib/utils';
import Link from 'next/link';

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Logo = ({ className, ...props }: LogoProps) => {
  return (
    <div
      className={cn('text-3xl font-bold md:text-4xl', className)}
      {...props}
    >
      <Link href="/">flowt</Link>
    </div>
  );
};
