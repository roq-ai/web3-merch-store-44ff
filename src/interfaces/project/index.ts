import { ItemInterface } from 'interfaces/item';
import { AccountInterface } from 'interfaces/account';
import { GetQueryInterface } from 'interfaces';

export interface ProjectInterface {
  id?: string;
  name: string;
  description?: string;
  web3_currency: string;
  account_id?: string;
  created_at?: any;
  updated_at?: any;
  item?: ItemInterface[];
  account?: AccountInterface;
  _count?: {
    item?: number;
  };
}

export interface ProjectGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  web3_currency?: string;
  account_id?: string;
}
