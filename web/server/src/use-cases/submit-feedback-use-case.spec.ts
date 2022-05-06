import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy},
  { sendMail: sendMailSpy }
)

describe('Submit feedback', () => {
  it('should be able to submit a feedback', async () =>{
    expect(submitFeedback.execute({
      type:'BUG',
      comment: 'exemplo',
      screenshot: 'data:image/png;base64,jeqw894y89hr',

    })).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it('should not be able to submit feedback without type', async () =>{
    expect(submitFeedback.execute({
      type:'',
      comment: 'exemplo',
      screenshot: 'data:image/png;base64,jeqw894y89hr',

    })).rejects.toThrow();
  });

  it('should not be able to submit feedback without comment', async () =>{
    expect(submitFeedback.execute({
      type:'BUG',
      comment: '',
      screenshot: 'data:image/png;base64,jeqw894y89hr',

    })).rejects.toThrow();
  });

  it('should not be able to submit feedback with an invalid screenshot', async () =>{
    expect(submitFeedback.execute({
      type:'BUG',
      comment: 'exemplo',
      screenshot: 'test.jpg',

    })).rejects.toThrow();
  });
});