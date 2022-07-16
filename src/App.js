import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import List from './components/List';
import demo from './components/demo';
import StoreApi from './components/dataAPI';
import ContainerInput from './components/ContainerInput';
import { makeStyles } from '@material-ui/core/styles';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Header from './components/Header';
import SideBar from './components/SideBar';
import TopStrip from './components/TopStrip';
import { StarBorderOutlined } from '@material-ui/icons';

const useStyle = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    background: 'green',
    width: '100%',
    overflowY: 'auto',
  },
  listContainer: {
    display: 'flex',
  },
}));

export default function App() {
  const [data, setData] = useState(demo);
  const classes = useStyle();
  const addMoreCard = (title, listId) => {
    console.log(title, listId);

    const newCardId = uuid();
    const newCard = {
      id: newCardId,
      title,
    };

    const list = data.lists[listId];
    list.cards = [...list.cards, newCard];

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    };
    setData(newState);
  };

  const addMoreList = (title) => {
    const newListId = uuid();
    const newList = {
      id: newListId,
      title,
      cards: [],
    };
    const newState = {
      listIds: [...data.listIds, newListId],
      lists: {
        ...data.lists,
        [newListId]: newList,
      },
    };
    setData(newState);
  };

  const updateListTitle = (title, listId) => {
    const list = data.lists[listId];
    list.title = title;

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    };
    setData(newState);
  };

  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;
    console.log('destination', destination, 'source', source, draggableId);

    if (!destination) {
      return;
    }
    if (type === 'list') {
      const newListIds = data.listIds;
      newListIds.splice(source.index, 1);
      newListIds.splice(destination.index, 0, draggableId);
      return;
    }

    const sourceList = data.lists[source.droppableId];
    const destinationList = data.lists[destination.droppableId];
    const draggingCard = sourceList.cards.filter(
      (card) => card.id === draggableId
    )[0];

    if (source.droppableId === destination.droppableId) {
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);
      const newSate = {
        ...data,
        lists: {
          ...data.lists,
          [sourceList.id]: destinationList,
        },
      };
      setData(newSate);
    } else {
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);

      const newState = {
        ...data,
        lists: {
          ...data.lists,
          [sourceList.id]: sourceList,
          [destinationList.id]: destinationList,
        },
      };
      setData(newState);
    }
  };

  return (
    <StoreApi.Provider value={{ addMoreCard, addMoreList, updateListTitle }}>
      <div 
        className={classes.root}
        style={{
          backgroundColor: '#0079bf',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Header />
        <SideBar/>
        <main>
          <section>
            <TopStrip/>
            <div className='BoardPage_MainContainer'>
              <div className='BoardPage_TitleWrapper'>
                  <h1 className='BoardPage_BoardTitle'>Kanban Board</h1>
                  <div className='BoardPage_StarWrapper'>
                      <StarBorderOutlined />
                  </div>
                  <div className='BoardPage_Separator'></div>
                  <button className='Button_ButtonWrapper1 Button_ButtonSecondary1'>
                      <img className='Button_Icon1' src='https://trello-replica.web.app/static/media/earth_white.b0d834ac.svg'/>
                      <span className='Button_Label'>Public</span>
                  </button>
                  <div className='BoardPage_Separator'></div>
                  <span class="UserAvatar_DefaultAvatar__mzpr8">AH</span>
              </div>
              <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="app" type="list" direction="horizontal">
                  {(provided) => (
                    <div
                      className={classes.listContainer}
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                    >
                      {data.listIds.map((listId, index) => {
                        const list = data.lists[listId];
                        return <List list={list} key={listId} index={index} />;
                      })}
                      <ContainerInput type="list" />
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
            </div>
          </section>
        </main>
      </div>
    </StoreApi.Provider>
  );
}
