export type Image = string;
export type Tag = string;

export class RepoTag {
  constructor(private readonly image: Image, private readonly tag: Tag) {}

  public equals(repoTag: RepoTag) {
    return this.image === repoTag.image && this.tag === repoTag.tag;
  }

  public toString(): string {
    return `${this.image}:${this.tag}`;
  }
}
