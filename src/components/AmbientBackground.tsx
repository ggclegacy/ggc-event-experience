export function AmbientBackground() {
  return (
    <div className="ambient" aria-hidden="true">
      <div className="ambient__vault" />
      <div className="ambient__grid" />
      <div className="ambient__horizon" />
      <div className="ambient__orb ambient__orb--one" />
      <div className="ambient__orb ambient__orb--two" />
      <div className="ambient__line ambient__line--top" />
      <div className="ambient__line ambient__line--bottom" />
      <div className="ambient__architecture ambient__architecture--left">
        <span /><span /><span />
      </div>
      <div className="ambient__architecture ambient__architecture--right">
        <span /><span /><span />
      </div>
      <div className="ambient__circuit ambient__circuit--one" />
      <div className="ambient__circuit ambient__circuit--two" />
      <div className="ambient__particles">
        <i /><i /><i /><i /><i /><i />
      </div>
      <div className="ambient__scanlight" />
      <div className="ambient__vignette" />
    </div>
  );
}
