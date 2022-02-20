import React from 'react'
import { InContext } from '../App/App'

export default class Context extends React.Component {


	render() {
		return(
			<InContext.Consumer>
				{(InContext) => <div className="context">{InContext}</div>}
			</InContext.Consumer>
		)
	}
}