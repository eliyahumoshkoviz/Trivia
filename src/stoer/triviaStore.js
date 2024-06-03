import { create } from 'zustand'

const useStore = create((set) => ({
  questions:[],
setQuestions:async(ques)=>{
  const {data:{results}}=await axios.get('https://opentdb.com/api.php?amount=10&category=27')

  set((state)=>({questions:results}))
}
}))