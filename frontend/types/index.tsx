import { ReactNode } from "react";

export interface LayoutChildrenProps {
  children?: ReactNode;
}
export interface ProgressionProps{
  isLoading:boolean;
  end:string;
  goal:string;
  totalCollected:string;
}
// add type of setEvents
export interface Contributor{
  contributor: string,
  amount:string
}

export interface ContributeProps {
  getDatas: () => void;
}

export interface ContributorsProps {
  events: Array<Contributor>;
}

export interface RefundProps {
  getDatas: () => void;
  end: string;
  goal: string;
  totalCollected: string;
}
