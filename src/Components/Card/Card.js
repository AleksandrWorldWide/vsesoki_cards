import star_on from '../../assets/rating_on.png'
import star_off from '../../assets/rating_off.png'

const Card = (props) => {

	const arr = new Array(props.star).fill(0)
	const arr_ = new Array(10 - props.star).fill(0)

return (
	<div className="card">

		<div className="card__present">
			{
				props.presentVal ? 
					<img src={require(`../../assets/${props.present}.png`)} alt={props.foto} className="ibg" />
				: null
			}
		</div>

		<div className="card__foto">
			<img src={require(`../../assets/${props.foto}.jpg`)} alt={props.foto} className="ibg" />
		</div>
		<div className="card__title">{props.title}</div>
		<div className="card__input-title">
			<input type="text" className="inpt" onChange={props.handleTitle}/>
		</div>
		<div className="card__price">{props.price} ₽</div>
		<div className="card__stars">
			{
				arr.map(() => {
					return (
						<img src={star_on} alt="star"/>
					)
				})
			}
			{
				arr_.map(() => {
					return (
						<img src={star_off} alt="star"/>
					)
				})
			}
		</div>
		<div className="card__input-stars">
			<input type="text" className="inpt" onChange={props.handleStar}/>
		</div>
		<div className="card__close" onClick={props.handleDelete}></div>
	</div>
)
		}

export default Card