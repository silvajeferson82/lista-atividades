import React from 'react';
import PropTypes from 'prop-types';
import {List, TaskTitle, TaskContent} from './style'


const TaskList = ({title}) => {
   return(
      <List>
         <TaskTitle>{title}</TaskTitle>
         <TaskContent></TaskContent>
      </List>
   )
}

TaskList.protoTypes = {
   
}

export default TaskList;