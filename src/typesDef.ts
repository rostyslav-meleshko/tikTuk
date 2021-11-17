// import * as H from 'history';

// feedLine response start

export interface AuthorMeta {
  id: string;
  secUid: string;
  name: string;
  nickName: string;
  verified: boolean;
  signature: string;
  avatar: string;
  following: number;
  fans: number;
  heart: number;
  video: number;
  digg: number;
}

export interface EffectSticker {
  id: string;
  name: string;
}

export interface MusicMeta {
  musicId: string;
  musicName: string;
  musicAuthor: string;
  musicOriginal: boolean;
  musicAlbum: string;
  playUrl: string;
  coverThumb: string;
  coverMedium: string;
  coverLarge: string;
  duration: number;
}

export interface Covers {
  default: string;
  origin: string;
  dynamic: string;
}

export interface VideoMeta {
  height: number;
  width: number;
  duration: number;
}

export interface Hashtag {
  id: string;
  name: string;
  title: string;
  cover: string;
}

export interface FeedLine {
  id: string;
  secretID: string;
  text: string;
  createTime: number;
  authorMeta: AuthorMeta;
  musicMeta: MusicMeta;
  covers: Covers;
  webVideoUrl: string;
  videoUrl: string;
  videoUrlNoWaterMark: string;
  videoApiUrlNoWaterMark: string;
  videoMeta: VideoMeta;
  diggCount: number;
  shareCount: number;
  playCount: number;
  commentCount: number;
  downloaded: boolean;
  mention: string[];
  hashtags: Hashtag[];
  effectStickers: EffectSticker[];
}

// feedLine response end

// userInfo response start

export interface ItemList {

}

export interface IStats {
  diggCount: number;
  followerCount: number;
  followingCount: number;
  heart: number;
  heartCount: number;
  videoCount: number;
}

export interface IUser {
  avatarLarger: string;
  avatarMedium: string;
  avatarThumb: string;
  commentSetting: number;
  createTime: number;
  duetSetting: number;
  ftc: boolean;
  id: string;
  isADVirtual: boolean;
  nickname: string;
  openFavorite: boolean;
  privateAccount: boolean;
  relation: number;
  roomId: string;
  secUid: string;
  secret: boolean;
  shortId: string;
  signature: string;
  stitchSetting: number;
  uniqueId: string;
  verified: boolean;
}

export interface IUserInfo {
  itemlist?: any[];
  stats: IStats;
  user: IUser;
}

// React-Router

// export interface RouteComponentProps<P> {
//   match: match<P>;
//   location: H.Location;
//   history: H.History;
//   staticContext?: any;
// }

// export interface match<P> {
//   params: P;
//   isExact: boolean;
//   path: string;
//   url: string;
// }