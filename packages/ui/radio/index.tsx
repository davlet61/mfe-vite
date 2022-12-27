import { ComponentProps, forwardRef } from 'react';

import { FieldError } from '../form';

export interface RadioProps extends ComponentProps<'input'> {
  label: string;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio({ label, ...props }, ref) {
  return (
    <label htmlFor={props.id}>
      <div className="mb-1 font-medium text-gray-800 dark:text-gray-200">{label}</div>
      <input
        // className="focus:border-brand-600 focus:ring-brand-500 w-full rounded-md border bg-white px-4 py-2 text-gray-800 disabled:bg-gray-500 disabled:bg-opacity-20 disabled:opacity-60 dark:bg-gray-900 dark:text-gray-200"
        className="before:shadow-checked mx-1 grid h-3 w-3 appearance-none place-content-center rounded-full border-2 border-gray-300 bg-gray-200 accent-gray-300 before:h-2 before:w-2 before:scale-0 before:rounded-full before:transition-transform before:duration-150 before:ease-in-out before:content-[''] checked:before:scale-100"
        type="radio"
        ref={ref}
        {...props}
      />

      <FieldError name={props.name} />
    </label>
  );
});
