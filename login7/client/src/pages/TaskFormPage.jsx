import { useForm } from 'react-hook-form'
import { useTasks } from '../context/TaskContext';

const TaskFormPage = () => {

  const { register, handleSubmit } = useForm();
  const { createTask } = useTasks()

  const onSubmit = handleSubmit((data) => {
    createTask(data);
  })
  
  return (
    <>
      <div className="bg-pink-300 max-w-md w-full p-10 rounded-md">
        <form onSubmit={onSubmit}>
          <input type="text" className="min-w-full bg-pink-200 text-white px-4 my-4 py-2 rounded-md" placeholder="Title" {...register("title")} />
          <textarea rows="3" className="min-w-full bg-pink-200 text-white px-4 my-4 py-2 rounded-md"{...register("description")}></textarea>
          <button type="submit" className=" bg-pink-400 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded"> SAVE </button>
        </form>
      </div>
    </>
  )
}

export default TaskFormPage
