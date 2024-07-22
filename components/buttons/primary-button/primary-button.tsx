import { cn } from '@/lib/utils';

interface PrimaryButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: string;
  className?: string;
}

export const PrimaryButton = ({
  children,
  className,
  ...props
}: PrimaryButtonProps) => {
  return (
    <button
      className={cn(
        'group rounded-full bg-white p-3 transition-colors delay-100 duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] hover:bg-white/10',
        className,
      )}
      {...props}
    >
      <div className="relative mx-4 overflow-hidden text-buttonM">
        <p className="text-black duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-[-20px]">
          {children}
        </p>
        <p
          aria-hidden
          className="absolute left-0 top-5 text-white duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:top-0"
        >
          {children}
        </p>
      </div>
    </button>
  );
};
