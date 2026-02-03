export const HeroTitleLogo = ({ title, caption }) => {
    return (
      <h1 className={`hero-title-logo`}>
        <span>{caption}</span>
        {title}
      </h1>
    )
  }
  