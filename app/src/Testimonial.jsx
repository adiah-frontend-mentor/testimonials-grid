import './testimonial.scss';

const Testimonial = ({data}) => {
  return (
	<div className={`card ${data.theme} ${data.position}`}>
		<div className="card__header">
			<img src={data.pic} alt={data.name} />
			<h1>{data.name}</h1>
			<p className="subtle">Verified Graduate</p>
		</div>
		<div className="card__body">
			<p className="tagline">{data.tagline}</p>
			<p className="review">{data.body}</p>
		</div>
	</div>
  )
}

export default Testimonial