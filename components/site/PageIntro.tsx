export default function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <header className="hd-page-intro"><span className="hd-eyebrow">{eyebrow}</span><h1>{title}</h1><p>{description}</p></header>;
}
