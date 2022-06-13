import { ReactNode } from "react";

export type MoviesTypes = {
  titulo: string;
  avatar: string;
};

export type PostsTypes = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export interface CicloDeVidaProps {
  children?: ReactNode;
}
