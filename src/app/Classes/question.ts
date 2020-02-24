export interface IQuestion {
    questionId: string,
    question: string,
    userId: number,
    topicId: number, 
    likes: number,
    dislikes: number,
    answers: any
}
