import React from 'react'
import ContainerApp from './style';
import TaskList from '../TaskList/index';

const Container = () => {
   return(
      <ContainerApp>
         <TaskList title="Pendente"/>
         <TaskList title="Fazendo"/>
         <TaskList title="Completa"/>
      </ContainerApp>
   )
}

export default Container;