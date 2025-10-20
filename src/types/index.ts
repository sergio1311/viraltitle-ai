export interface User {
  id: string;
  email: string;
  subscription_tier: 'free' | 'pro';
  credits_remaining: number;
}

export interface Generation {
  id: string;
  user_id: string;
  input_topic: string;
  generated_titles: string[];
  platform: string;
  created_at: string;
}