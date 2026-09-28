import React, { AnchorHTMLAttributes } from 'react';
import Link from 'next/link';
import styles from './Button.module.css';
import { clsx } from "clsx";

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  href: string;
}

export const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', fullWidth, children, href, ...props }, ref) => {
    // If it's an external link or a new tab, standard <a> is often better, but Next.js <Link> handles both mostly fine.
    // However, if target="_blank" is used, we can just use <a> to be safe.
    if (props.target === "_blank") {
      return (
        <a
          ref={ref}
          href={href}
          className={clsx(
            styles.button,
            styles[variant],
            styles[size],
            fullWidth && styles.fullWidth,
            className
          )}
          {...props}
        >
          {children}
        </a>
      );
    }

    return (
      <Link 
        ref={ref} 
        href={href}
        className={clsx(
          styles.button,
          styles[variant],
          styles[size],
          fullWidth && styles.fullWidth,
          className
        )} 
        {...props}
      >
        {children}
      </Link>
    );
  }
);

LinkButton.displayName = 'LinkButton';
