import React from 'react';
import { connect } from 'react-redux';
import { ColorPicker } from '../ColorPicker/ColorPicker';
import { listActions } from '../../actions';
import { DisplayTasks } from '../DisplayTasks/DisplayTasks';
import { Accordion } from '../Accordion/Accordion';
import { AccordionHead } from '../AccordionHead/AccordionHead';
import { AccordionBody } from '../AccordionBody/AccordionBody';

class DisplayLists extends React.PureComponent {

  handleDragStart = (e, index) => {
    this.draggedItem = this.props.lists[index];
    const parent = e.target.parentNode;

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', parent);
    e.dataTransfer.setDragImage(parent, 20, parent.clientHeight * 0.5);
  };

  updateRank = (lists, minRnk, maxRnk, deltaRnk) => {
    return lists.map(list => {
      if (list.rank >= minRnk && list.rank <= maxRnk) {
        list.rank += deltaRnk;
      }
      return list;
    })
  }

  handleDragOver = (index) => {
    const { dispatch, lists } = this.props;
    const draggedOverItem = lists[index];

    if (draggedOverItem === this.draggedItem) {
      return;
    }

    const filteredLists = lists.filter((list) => list !== this.draggedItem);
    let orderedLists;
    if (this.draggedItem.rank > index) {
      orderedLists = this.updateRank(filteredLists, index, this.draggedItem.rank, 1);
    } else {
      orderedLists = this.updateRank(filteredLists, this.draggedItem.rank, index, -1);
    }

    this.draggedItem.rank = index;
    orderedLists.splice(index, 0, this.draggedItem);
    console.log(orderedLists);
    dispatch(listActions.reorder(orderedLists));
  };

  handleDragEnd = () => {
    const { dispatch } = this.props;
    dispatch(listActions.update(this.draggedItem));
    this.draggedItem = null;
  };

  handleRemove = (id) => {
    const { dispatch } = this.props;
    dispatch(listActions.remove(id));
  };

  handleColorChange = (index, color) => {
    const { dispatch, lists } = this.props;
    const list = lists[index];
    if (list.color !== color) {
      list.color = color;
      dispatch(listActions.update(list));
    }
  };

  handleOpenDetail = () => {

  };

  render() {
    const { lists } = this.props;

    return (
      <Accordion>
        {lists &&
          lists
            .sort((a, b) => (a.rank - b.rank < 0 ? -1 : 1))
            .map((list, idx) => {
              return (
                <template key={list._id}>
                  <AccordionHead>
                    <div
                      className={`valign-wrapper collection-item mar-5`}
                      onDragOver={() => this.handleDragOver(idx)}
                    >
                      <span
                        className={`grab round ${list.color}`}
                        draggable
                        onDragStart={(e) => this.handleDragStart(e, idx)}
                        onDragEnd={this.handleDragEnd}
                      >
                        <i className="material-icons white-text lighten-1 mar-10">
                          drag_handle
                      </i>
                      </span>
                      <h4 className="mar-0 mar-l-10 grow">{list.title}</h4>
                      <ColorPicker color={list.color} colorChange={(color) => this.handleColorChange(idx, color)} />
                      <div className="btn-list">
                        <a
                          className="btn"
                          onClick={this.handleOpenDetail}>
                          <i className="material-icons">details</i>
                        </a>
                        <a
                          className="btn"
                          onClick={() => this.handleRemove(list._id)}
                        >
                          <i className="material-icons">delete</i>
                        </a>
                      </div>
                    </div>
                  </AccordionHead>
                  <AccordionBody>
                    <DisplayTasks />
                  </AccordionBody>
                </template>
              );
            })}
      </Accordion>
    );
  }
}

const mapStateToProps = (state) => {
  const { lists } = state;
  return {
    lists
  };
}
const connectedDisplayLists = connect(mapStateToProps)(DisplayLists);
export { connectedDisplayLists as DisplayLists };