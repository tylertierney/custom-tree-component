import { Component, Input } from '@angular/core';

export interface ITreeNode {
  msId: number;
  planName: string;
  isChecked: boolean;
  children: ITreeNode[];
}

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css'],
})
export class TreeComponent {
  data: ITreeNode = {
    msId: 123,
    planName: 'First Plan Name',
    isChecked: false,
    children: [
      {
        msId: 456,
        planName: 'Second Plan Name',
        isChecked: false,
        children: [
          { msId: 222, planName: 'Whatever', isChecked: false, children: [] },
        ],
      },
      {
        msId: 789,
        planName: 'Third Plan Name',
        isChecked: false,
        children: [],
      },
    ],
  };
}
