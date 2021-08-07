import  '../TaskStyle.css';

type TaskProps = {
  id: number;
  name: string;
  status: 'not-finish' | 'done';
  doneFn: Function;
  deleteFn: Function; //Function type
}

const Task = ({id, name, status, doneFn, deleteFn} : TaskProps) => {
  if (status == 'not-finish') {
      return (
          <div className="maindiv flex justify-between h-8 items-center py-6 border-b">
              <span className="text-2xl"> {name} </span>
              <div className="flex space-x-1 items-center">
                <button onClick={ () => doneFn(id) } className="bg-green-400 w-24 text-2xl" >Done</button>
                <button onClick={ () => deleteFn(id) } className="bg-red-400 w-24 text-2xl" >Delete</button>
              </div>
          </div>
      )
  }else {
    return (
      <div className="flex justify-between h-8 items-center py-6 border-b">
          <span className="done text-2xl"> {name} </span>
          <div className="flex space-x-1 items-center">
            {/* <button onClick={ () => doneFn(id) } className="bg-green-400 w-24 text-2xl" >Done</button>
            <button onClick={ () => deleteFn(id) } className="bg-red-400 w-24 text-2xl" >Delete</button> */}
          </div>
      </div>
  )
  }
}

export default Task