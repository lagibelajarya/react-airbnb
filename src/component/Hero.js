export default function Hero(props) {
  return (
    <div className="Hero">
      <img className='Hero__img' src={props.img} />
      <h1 className='Hero__title'>Online Experiences</h1>
      <p className='Hero__text'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </div>
  );
}
