import { ComponentProps, forwardRef } from 'react';

import { FieldError } from '../form';

interface Options {
  value: string;
}

export interface SelectProps extends ComponentProps<'input'> {
  label: string;
  options: Array<Options>;
}

export const Select = forwardRef<HTMLInputElement, SelectProps>(function Select(
  { label, options = [], ...props },
  ref,
) {
  return (
    <label htmlFor={props.id}>
      <div className="mb-1 font-medium text-gray-800 dark:text-gray-200">{label}</div>
      <select
        className="focus:border-brand-600 focus:ring-brand-500 w-full rounded-md border bg-white px-4 py-2 text-gray-800 disabled:bg-gray-500 disabled:bg-opacity-20 disabled:opacity-60 dark:bg-gray-900 dark:text-gray-200"
        ref={ref}
        {...props}
      >
        {options.map(({ value }) => (
          <option key={Math.random().toString(36).slice(2, 7)} value={value}>
            {value}
          </option>
        ))}
      </select>

      <FieldError name={props.name} />
    </label>
  );
});
