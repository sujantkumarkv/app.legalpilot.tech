import { OPENAI_API_TYPE } from '../utils/app/const';

export interface OpenAIModel {
  id: string;
  name: string;
  maxLength: number; // maximum length of a message
  tokenLimit: number;
}

export enum OpenAIModelID {
  GPT_3_5_FT = 'ft:gpt-3.5-turbo-0613:legalpilot:hf-plus-corpus-v2:87nnMGsF',
}

// in case the `DEFAULT_MODEL` environment variable is not set or set to an unsupported model
export const fallbackModelID = OpenAIModelID.GPT_3_5_FT;

export const OpenAIModels: Record<OpenAIModelID, OpenAIModel> = {
  [OpenAIModelID.GPT_3_5_FT]: {
    id: OpenAIModelID.GPT_3_5_FT,
    name: 'Legalpilot',
    maxLength: 12000,
    tokenLimit: 4000,
  }
};