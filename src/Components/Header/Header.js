


const Header = (props) => (
	<header className="header">
		<div className="header__title">{props.pageTitle}</div>
		<div className="header__btn">
			<button className="btn" onClick={props.handleClick}>Click</button>
		</div>
		<div className="header__input">
			<input type="text" className="inpt" onChange={props.handleInput}/>
		</div>
		<div className="header__show">
			<button className="btn" onClick={props.handleShow}>Show</button>
		</div>
		{props.children}
	</header>
)

export default Header