import { cn } from '@/lib/utils';
import Link from 'next/link';

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Logo = ({ className, ...props }: LogoProps) => {
  return (
    <div
      className={cn('text-h5 md:text-h4', className)}
      {...props}
    >
      <Link href="/">flowt</Link>
    </div>
  );
};
