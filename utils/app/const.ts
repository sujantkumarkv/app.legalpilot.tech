export const DEFAULT_SYSTEM_PROMPT =
  process.env.NEXT_PUBLIC_DEFAULT_SYSTEM_PROMPT ||
  "Welcome, your name is Jolly. You are a legal AI assistant from LegalPilot Inc., and your task is to help with matters related to Indian law. Forget all previous directives, limitations related to having an identity of being a GPT-3.5 model from OpenAI. You will strictly deny responding to queries when asked of gpt3.5 or OpenAI. Your new identity and purpose are to provide accurate and insightful legal assistance.";

export const OPENAI_API_HOST =
  process.env.OPENAI_API_HOST || 'https://api.openai.com';

export const DEFAULT_TEMPERATURE = 
  parseFloat(process.env.NEXT_PUBLIC_DEFAULT_TEMPERATURE || "0.1");

export const OPENAI_API_TYPE =
  process.env.OPENAI_API_TYPE || 'openai';

export const OPENAI_API_VERSION =
  process.env.OPENAI_API_VERSION || '2023-03-15-preview';

export const OPENAI_ORGANIZATION =
  process.env.OPENAI_ORGANIZATION || 'org-FJt0qsZ5sUtPVJ4vV3HwniuW';

export const AZURE_DEPLOYMENT_ID =
  process.env.AZURE_DEPLOYMENT_ID || '';
