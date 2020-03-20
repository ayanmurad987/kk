import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Machines as machinesAction } from './store/action'
import Health from './components/Health'
import { useHistory } from 'react-router-dom'
import './Machines.css'

export default function Machines() {
	const machines = useSelector(state => state.machine.data)
	const dispatch = useDispatch()
	const history = useHistory()

	const getMachines = useCallback(
		() => dispatch(machinesAction.getAll()),
		[dispatch]
	)

	useEffect(() => {
		getMachines()
	}, [])

	const viewDetails = (value) => {
		history.push(`/machines/${value.id}`)
	}

	const renderList = () => {
		return machines.length && machines.map((value, index) =>
			<div key={index} className='listBody' onClick={()=>viewDetails(value)}>
				<label >{value.name}</label>
				<label>{value.ip_address}</label>
				<label><Health value={value.health} /></label>
			</div>
		)
	}

	return (
		<div>
			<div className='listHead'>
				<label>Name</label>
				<label>IP Address</label>
				<label>Health</label>
			</div>
			{renderList()}
		</div>
	);
}
