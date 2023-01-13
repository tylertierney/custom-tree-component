import { Component, Input } from '@angular/core';
import { ITreeNode } from '../../services/tree.service';

type ICheckedState = 'unchecked' | 'indeterminate' | 'checked';

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.css'],
})
export class TreeNodeComponent {
  @Input() node: ITreeNode;
  @Input() level: number = 0;
  childrenHidden = true;

  // get checkedState() {
  //   return this.getCheckedState(this.node);
  // }

  get indeterminate() {
    if (this.node.isChecked) return false;
    return this.checkIfAnyDescendentSelected(this.node);
  }

  toggleNodeChecked() {
    this.toggleAllDescendents(this.node, !this.node.isChecked);
  }

  toggleAllDescendents = (node: ITreeNode, checked: boolean) => {
    node.isChecked = checked;
    for (const child of node.children) {
      this.toggleAllDescendents(child, checked);
    }
  };

  checkIfAnyDescendentSelected = (node: ITreeNode) => {
    if (node.isChecked) return true;
    for (const child of node.children) {
      if (this.checkIfAnyDescendentSelected(child)) {
        return true;
      }
    }
    return false;
  };

  // getCheckedState = (node: ITreeNode): ICheckedState => {
  //   let countChecked = 0;
  //   let countUnchecked = 0;

  //   const dfs = (children: ITreeNode[]) => {
  //     for (const child of children) {
  //       if (node.isChecked) {
  //         countChecked++;
  //       } else {
  //         countUnchecked++;
  //       }
  //       dfs(child.children);
  //     }
  //   };

  //   dfs(node.children);

  //   if (node.planName === 'Second Plan Name') {
  //     console.log('countChecked = ' + countChecked);
  //     console.log('countUnchecked = ' + countUnchecked);
  //   }
  //   if (countChecked === 0) return 'unchecked';
  //   if (countUnchecked === 0) return 'checked';
  //   return 'indeterminate';
  // };
}
