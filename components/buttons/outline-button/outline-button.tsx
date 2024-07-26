import { cn } from '@/lib/utils';

interface OutlineButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: string;
  className?: string;
}

export const OutlineButton = ({
  children,
  className,
  ...props
}: OutlineButtonProps) => {
  return (
    <button
      className={cn(
        'group rounded-full border-2 border-white p-3 transition-colors delay-100 duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] hover:bg-white hover:bg-opacity-100',
        className,
      )}
      {...props}
    >
      <div className="relative mx-4 overflow-hidden text-sm font-medium md:text-base">
        <p className="text-white duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-[-20px]">
          {children}
        </p>
        <p
          aria-hidden
          className="absolute left-0 top-5 text-black duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:top-0"
        >
          {children}
        </p>
      </div>
    </button>
  );
};
