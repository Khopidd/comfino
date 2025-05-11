export interface StatsCardProps {
  icon: string;
  title: string;
  value: string;
  hasAddButton?: boolean;
}

export interface TransactionProps {
  id: number;
  group: string;
  amount: string;
  eventName: string;
  date: string;
  status: 'success' | 'pending' | 'canceled';
}

export interface HeaderProps {
  title: string;
  description: string;
}
