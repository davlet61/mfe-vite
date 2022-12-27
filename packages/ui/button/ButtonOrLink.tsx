import { ComponentProps } from 'react';

export type ButtonOrLinkProps = ComponentProps<'button'> & ComponentProps<'a'>;

export const ButtonOrLink = ({ href, ...props }: ButtonOrLinkProps) => {
  const isLink = typeof href !== 'undefined';
  const LinkOrButton = isLink ? 'a' : 'button';

  const content = <LinkOrButton {...props} />;

  if (isLink) {
    return <a>{content}</a>;
  }

  return content;
};
