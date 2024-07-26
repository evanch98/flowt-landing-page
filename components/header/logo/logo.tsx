import { cn } from '@/lib/utils';
import Link from 'next/link';

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Logo = ({ className, ...props }: LogoProps) => {
  return (
    <div
      className={cn('text-3xl md:text-4xl font-bold', className)}
      {...props}
    >
      <Link href="/">flowt</Link>
    </div>
  );
};
