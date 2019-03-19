import React, { Component } from 'react'
import {  DragDropContext, DragSource, DropTarget } from 'react-dnd';
import _ from 'lodash';
import newNotesImg from '../images/New.svg';
import PropTypes from 'prop-types';
import HTML5Backend  from 'react-dnd-html5-backend';
import classNames from 'classnames';

import HeaderControl from '../components/HeaderControl';





//const HTML5Backend = ReactDnDHTML5Backend
//const { func, bool, number, arrayOf, oneOf } = PropTypes

const Types = {
  CARD: 'card'
};

const style = {
	border: '1px dashed gray',
	padding: '1.5rem 1rem',
	marginBottom: '.5rem',
	backgroundColor: 'white',
	cursor: 'move',
}

const cardSource = {
	beginDrag(props) {
		return {
			id: props.id,
			originalIndex: props.findCard(props.id).index,
		}
	},

	endDrag(props, monitor) {
		const { id: droppedId, originalIndex } = monitor.getItem()
		const didDrop = monitor.didDrop()

		if (!didDrop) {
			props.moveCard(droppedId, originalIndex)
		}
	},
}

const cardTarget = {
	canDrop() {
		return false
	},

	hover(props, monitor) {
		const { id: draggedId } = monitor.getItem()
		const { id: overId } = props

		if (draggedId !== overId) {
			const { index: overIndex } = props.findCard(overId)
			props.moveCard(draggedId, overIndex)
		}
	},
}

class Card extends Component {
	// static propTypes = {
	// 	connectDragSource: PropTypes.func.isRequired,
	// 	connectDropTarget: PropTypes.func.isRequired,
	// 	isDragging: PropTypes.bool.isRequired,
	// 	id: PropTypes.any.isRequired,
	// 	text: PropTypes.string.isRequired,
	// 	moveCard: PropTypes.func.isRequired,
	// 	findCard: PropTypes.func.isRequired,
	// }

	render() {
		const {
			text,
			isDragging,
			connectDragSource,
			connectDropTarget,
		} = this.props
		const opacity = isDragging ? 0 : 1;
		const cnNotesItem = classNames('drag-item', {
            'drag-item-active': isDragging,
          });


		return connectDragSource(
			connectDropTarget(<div  className={cnNotesItem}>{text}</div>),
		)
	}
}

function cardCollect(connect, monitor) {
  return {
    // Call this function inside render()
    // to let React DnD handle the drag events:
	  connectDropTarget: connect.dropTarget(),
  };
}
function cardSourceCollect(connect, monitor) {
  return {
    // Call this function inside render()
    // to let React DnD handle the drag events:
 	  connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  };
}

const DragDropCard = _.flow(
  DragSource(Types.CARD, cardSource, cardSourceCollect),
  DropTarget(Types.CARD, cardTarget, cardCollect)
)(Card);

// @DropTarget(ItemTypes.CARD, cardTarget, connect => ({
// 	connectDropTarget: connect.dropTarget(),
// }))
// @DragSource(ItemTypes.CARD, cardSource, (connect, monitor) => ({
// 	connectDragSource: connect.dragSource(),
// 	isDragging: monitor.isDragging(),
// }))

class Container extends Component {
	// static propTypes = {
	// 	connectDropTarget: PropTypes.func.isRequired,
	// }

	constructor(props) {
		super(props)
		this.moveCard = this.moveCard.bind(this)
		this.findCard = this.findCard.bind(this)
		this.state = {
			cards: [
				{
					id: 1,
					text: 'Write a cool JS library',
				},
				{
					id: 2,
					text: 'Make it generic enough',
				},
				{
					id: 3,
					text: 'Write README',
				},
				{
					id: 4,
					text: 'Create some examples',
				},
				{
					id: 5,
					text: 'Spam in Twitter and IRC to promote it',
				},
				{
					id: 6,
					text: '???',
				},
			],
		}
	}

	findCard(id) {
		const { cards } = this.state
		const card = cards.filter(c => c.id === id)[0]

		return {
			card,
			index: cards.indexOf(card),
		}
	}

	moveCard(id, atIndex) {
		const {card, index} = this.findCard(id)
    
    let newcards = this.state.cards
    newcards.splice(index, 1); // removing what you are dragging.
    newcards.splice(atIndex, 0, card); // inserting it into hoverIndex.
    
		this.setState({
				cards: newcards
    })
	}

	render() {
		const { connectDropTarget } = this.props
		const { cards } = this.state

		return connectDropTarget(
			<div style={style} className="drag-list-holder">
				{cards.map(card => (
					<DragDropCard
						key={card.id}
						id={card.id}
						text={card.text}
						moveCard={this.moveCard}
						findCard={this.findCard}
					/>
				))}
			</div>
		)
	}
}



function containerCollect(connect, monitor) {
  return {
    // Call this function inside render()
    // to let React DnD handle the drag events:
	  connectDropTarget: connect.dropTarget(),
  };
}
const containerTarget = {
	drop() {},
}
const DropTargetContainer = DropTarget(Types.CARD, containerTarget, containerCollect)(Container);
const DragDropContextContainer = DragDropContext(HTML5Backend)(DropTargetContainer)

// @DragDropContext(HTML5Backend)
// @DropTarget(ItemTypes.CARD, cardTarget, connect => ({
// 	connectDropTarget: connect.dropTarget(),
// }))



export default DragDropContextContainer;
