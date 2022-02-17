
import React, {Component} from 'react';
import './App.scss';
import Header from '../Header/Header'
import Card from '../Card/Card'

class App extends Component {

	state = {
		pageTitle: 'Alle Saften',
		cards: [
			{
				presentVal: true,
				present: 'icon',
				foto: 'tribest',
				title: 'Вакуумный упаковщик Tribest Sousvant KL-200',
				price: '10500',
				star: 5
			},
			{
				presentVal: false,
				present: 'icon',
				foto: 'gwell',
				title: 'Вакуумный упаковщик Tribest Sousvant KL-200',
				price: '6000',
				star: 4
			},
			{
				presentVal: false,
				present: 'icon',
				foto: 'vacuum',
				title: 'Вакуумный упаковщик Tribest Sousvant KL-200',
				price: '13500',
				star: 3
			},
			{
				presentVal: false,
				present: 'icon',
				foto: 'guard',
				title: 'Вакуумный упаковщик Tribest Sousvant KL-200',
				price: '19400',
				star: 2
			},
		],
		showCards: true
	}

	handleClick = (name) => {
		this.setState({
			pageTitle: name
		})
	}

	handleInput = (event) => {
		this.setState({
			pageTitle: event.target.value
		})
	}

	handleShow = () => {
		this.setState({
			showCards: !this.state.showCards
		})
	}
	handleTitle = (name,i) => {
		const card = this.state.cards[i]
		card.title = name
		const cards = [...this.state.cards]
		cards[i] = card
		this.setState({cards})
	}

	handleDelete = (i) => {
		const cards = [...this.state.cards]
		cards.splice(i, 1)
		this.setState({cards})
	}

	handleStar = (name, i) => {
		console.log(name)
		const card = this.state.cards[i]
		card.star = name
		const cards = [...this.state.cards]
		cards[i] = card
		this.setState({cards})
	}

	render() {
		return (
			<div className="App">
				<div className="wrapper">
				  <Header
				  		pageTitle={this.state.pageTitle}
						handleClick={this.handleClick.bind(this, 'Alle Saften changed!')}
						handleInput={this.handleInput}
						handleShow={this.handleShow}
				  />
				  <div className="content">
				  {this.state.showCards ?
					  this.state.cards.map((card, i) => {
					  return (
						  <Card
						  		key={i}
								presentVal={card.presentVal}
								present={card.present}
						  		title={card.title}
								foto={card.foto}
								price={card.price}
								star={card.star}
								handleTitle={event => this.handleTitle(event.target.value, i)}
								handleDelete={this.handleDelete.bind(this, i)}
								handleStar={event => this.handleStar(+event.target.value, i)}
						  />
					  )})
					  : null
				  }
				  </div>
				  
				</div>
			</div>
		 )
	}
}

export default App;
