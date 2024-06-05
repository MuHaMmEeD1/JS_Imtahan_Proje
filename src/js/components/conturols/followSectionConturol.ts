import { FollowSectionView } from "./../views/followSectionView";
import { FollowSectionModel } from "./../models/followSectionModel";
export class FollowSectionConturol {
  followSectionModel: FollowSectionModel;
  followSectionView: FollowSectionView;

  constructor() {
    this.followSectionModel = new FollowSectionModel();
    this.followSectionView = new FollowSectionView();
  }
}
