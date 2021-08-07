import { preProcessFile } from "typescript"
import Task from './Task'
import { useState } from 'react'


type TaskData = {
    id: number;
    name: string;
    status: 'not-finish' | 'done';
  }
let isdoned = 0
  
const Todo = () => {
  
    const [curTask, setCurTask] = useState<string>('')
    const [tasks, setTasks] = useState<TaskData[]>([])
  
    const onChangeCallback = (ev: React.ChangeEvent<HTMLInputElement>) => {
      setCurTask(ev.target.value)
    }

    const onKeyDownCallback = (ev: React.KeyboardEvent<HTMLInputElement>) => {
        if(ev.keyCode === 13) {
            if (curTask === '') alert("task can't be empty!")
            else {
                addTask(curTask)
            }
        }
    }
  
    const addTask = (taskName: string) => {
      const newId = (new Date()).getTime()
      const newTasks :TaskData[] = [...tasks, {id: newId, name: taskName, status: 'not-finish'}]
      let arrtask :TaskData[] = []
      arrtask[0] = newTasks[0]
      for (let i=0;i<newTasks.length;i++) {
          if (newTasks[i].id === newId) {
                arrtask[0] = newTasks[i]
          }else {
                arrtask.push(newTasks[i])
          }
      }
      setTasks(arrtask)
    }
  
    const deleteTask = (id: number) => {
      const newTasks = tasks.filter(x => x.id !== id)
      setTasks(newTasks)
    }
  
    const doneTask = (id: number) => {
        let arrtask :TaskData[] = []
        let u :number = 0
        let select :TaskData = tasks[0]
        for (let i=0;i<tasks.length;i++) {
            if (tasks[i].id === id) {
                tasks[i].status = 'done'
                select = tasks[i]
            }
        }
        for (let i=0;i<tasks.length;i++) {
            if (i != tasks.length-isdoned-1) {
                if (tasks[i].id === id) u++
                arrtask[i] = tasks[u++] 
            }else  {
                if (tasks[i].id === id) u++
                arrtask.push(select)
            }
        }
        isdoned++
        setTasks(arrtask) 
    }
    return (
        <div className='mx-auto max-w-4xl'>
             <div className='flex space-x-1'>
                 <input type='text'className='border border-gray-400 w-full text-2xl'
                     onKeyDown={onKeyDownCallback} onChange={onChangeCallback}></input>
                 <button className='border border-gray-400 w-8 font-bold'
                     onClick={() => {
                         const val:any = document.querySelector('input')
                         if (val.value === '') alert("task can't be empty!")
                         else {
                            setCurTask(val.value)
                            addTask(curTask)
                         }
                         }}>+</button>
             </div>
                 {tasks.map( x => <Task id={x.id} name={x.name} status={x.status} doneFn={doneTask} deleteFn={deleteTask}/>)}
         </div>
    )
  }
  
export default Todo