import React from 'react';

export interface DownloadButtonProps {
  icon: React.ReactNode;
  storeName: string;
  caption: string;
  href?: string;
  isSolid?: boolean;
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({
  icon,
  storeName,
  caption,
  href,
  isSolid,
}) => {
  const className = `cta-btn ${isSolid ? 'cta-btn--solid' : ''}`;
  const content = (
    <>
      <span className="cta-btn__icon">{icon}</span>
      <span>
        <small>{caption}</small>
        <strong>{storeName}</strong>
      </span>
    </>
  );

  if (href) {
    return (
      <a className={className} href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return <div className={`${className} cta-btn--soon`}>{content}</div>;
};
