import { Dataset } from "./datasets";
import { Notebook } from "./notebooks";

export interface Report {
  id: string;
  notebook: Notebook;
  dataset: Dataset;
  created_at: Date;
  updated_at: Date;
}

export interface GPTOutput {
  id: string;
  choices: {
    text: string;
    index: number;
  }[]
}
