type Props = {
  link?: string;
  children: React.ReactNode
};

const ExternalLink = ({ link, children }: Props) => {
  if (!link) {
    return children;
  }
  
  return (
    <a
      target="_blank"
      href={link}
    >
      {children}
    </a>
  );
}

export default ExternalLink;
