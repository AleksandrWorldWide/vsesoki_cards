import star_on from '../../assets/rating_on.png'
import star_off from '../../assets/rating_off.png'
import React from 'react'

export default class Card extends React.Component {

	constructor(props) {
		super(props)
		this.inputRef = React.createRef()
	}

	componentDidMount() {
		if (this.props.index === 1) {
			this.inputRef.current.focus()
		}
	}
	

	render() {
		const arr = new Array(this.props.star).fill(0)
		const arr_ = new Array(10 - this.props.star).fill(0)

		if (Math.random() > .9) {
			throw new Error('nach error')
		}
		return (
			
			<div className="card">

				<div className="card__present">
					{
						this.props.presentVal ? 
							<img src={require(`../../assets/${this.props.present}.png`)} alt={this.props.foto} className="ibg" />
						: null
					}
				</div>

				<div className="card__foto">
					<img src={require(`../../assets/${this.props.foto}.jpg`)} alt={this.props.foto} className="ibg" />
				</div>
				<div className="card__title">{this.props.title}</div>
				<div className="card__input-title">
					<input type="text" className="inpt" onChange={this.props.handleTitle}/>
				</div>
				<div className="card__price">{this.props.price} ₽</div>
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
					<input 
						type="text" 
						ref={this.inputRef}
						className="inpt" 
						onChange={this.props.handleStar}
					/>
				</div>
				<div className="card__close" onClick={this.props.handleDelete}></div>
			</div>
		)
		}
		}

