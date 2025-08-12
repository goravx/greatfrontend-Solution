export default function Bomb({ hasExploded, hasDefused, handleClick }) {
  if (hasExploded) {
    return (
        <center>
      <figure>
        <span role="img" aria-label="Explosion Emoji">💥</span>
        <figcaption>You lose</figcaption>
      </figure>
      </center>
    );
  }

  if (hasDefused) {
    return (
        <center>
      <figure>
        <span role="img" aria-label="Party Emoji">🎉</span>
        <figcaption>You win</figcaption>
      </figure>
      </center>
    );
  }

  return (
    <center style={{marginTop:"50%"}}>
    <button className="bomb" onClick={handleClick}>
      <span role="img" aria-label="Dynamite Emoji">🧨</span>
    </button>
    </center>
  );
}
