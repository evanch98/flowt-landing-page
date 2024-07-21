import { cn } from '@/lib/utils';
import { IconType } from 'react-icons';

interface SecondaryButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: string;
  className?: string;
  icon?: IconType;
}

export const SecondaryButton = ({
  children,
  className,
  icon: Icon,
  ...props
}: SecondaryButtonProps) => {
  return (
    <button
      className={cn('group rounded-full p-3', className)}
      {...props}
    >
      <div className="relative mx-2 overflow-hidden text-buttonM">
        <p className="flex text-white duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-[-24px]">
          {Icon && <Icon className="size-6 text-white" />}
          <span className="px-2">{children}</span>
        </p>
        <p
          aria-hidden
          className="absolute left-0 top-6 flex text-white duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:top-0"
        >
          {Icon && <Icon className="size-6 text-white" />}
          <span className="px-2">{children}</span>
        </p>
      </div>
    </button>
  );
};
