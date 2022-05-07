//esse fala as operações que da pra fazer no banco de dados

export interface FeedbackCreateData{
  type: string;
  comment: string;
  screenshot?: string;
}

export interface FeedbacksRepository{
  create:(data: FeedbackCreateData) => Promise<void>;
}