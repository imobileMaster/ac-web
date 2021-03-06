import React, { PropTypes } from 'react'
import Icon from './Icon'
import { pure } from 'recompose'

function ChevronLeft({ inverse = false, ...props }) {
	return (
		<Icon {...props}>
			<path d='M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z' fill={inverse ? 'white' : 'black'} />
		    <path d='M0 0h24v24H0z' fill='none'/>
		</Icon>
	)
}

export default pure(ChevronLeft)
