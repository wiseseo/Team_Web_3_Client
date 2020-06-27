import React, { useReducer } from "react";
import reducer from "./UserReducer";

interface Song {
  id: string;
  title: string;
  isPlaying: boolean;
  isLike: boolean;
  cover_url: string;
  song_url: string;
}

interface Musician {
  id: string;
  name: string;
  introduction: string;
  tags: string[];
  likes: number;
  profile_url: string;
  features: string[];
  song: Song;
}

interface MusicianList {
  list: Musician[];
  display: Musician[];
  page: number;
  end: number;
}

interface UserInfo {
  name: string;
  email: string;
}

interface ReqList {
  name: string;
  enrollDate: string;
  forUse: string;
  genre: string;
  atmo: string;
  length: string;
  finalDate: string;
  pay: string;
}

interface Before {
  id: string;
  profile_url: string;
  name: string;
  enrollDate: string;
  status: string;
  features: string;
}

interface BeforeList {
  list: Before[];
  display: Before[];
  page: number;
  end: number;
}
interface UserData {
  musicianList: MusicianList;
  userInfo: UserInfo;
  reqList: ReqList;
  beforeList: BeforeList;
}

const defaultMusicianList: Musician[] = [
  {
    id: "1",
    name: "마약왕",
    introduction: "내가 하고 싶은 음악을 합니다.",
    profile_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQEdubC_t_ynHaWjvTUFs5dWr2Ero88_P_IQ&usqp=CAU/0f/a8/b30fa894137c0254d47922a20e35d32c.jpg",
    tags: ["스포츠", "기술", "게임", "시즌"],
    likes: 777,
    features: ["빠른작업", "3분이상", "효과음", "보컬 곡 작곡"],
    song: {
      id: "1",
      title: "Death_Becomes_Fur",
      cover_url:
        "https://upload.wikimedia.org/wikipedia/commons/a/ac/4-44_album_cover.png",
      song_url: "http://media.w3.org/2010/07/bunny/04-Death_Becomes_Fur.oga",
      isPlaying: false,
      isLike: false,
    },
  },
  {
    id: "2",
    name: "Phillies Basement",
    introduction: "큐브가 배출한 킥 장인",
    profile_url:
      "https://images.unsplash.com/photo-1466112928291-0903b80a9466?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80.jpg",
    tags: ["스포츠", "기술", "게임", "시즌"],
    likes: 777,
    features: ["빠른작업", "3분이상", "효과음", "보컬 곡 작곡"],
    song: {
      id: "2",
      title: "효과음",
      cover_url:
        "https://freight.cargo.site/t/original/i/a22da87abfa5c1e719a8d2287c6b820a4438cb9e7bd8e19c03cc4c966fb25958/AWA-PACKSHOT.jpg",
      song_url: "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3",
      isPlaying: false,
      isLike: false,
    },
  },
  {
    id: "3",
    name: "And we go",
    introduction: "이미 한국이 좁은 케이팝스타",
    profile_url:
      "https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    tags: ["스포츠", "기술", "게임", "시즌"],
    likes: 777,
    features: ["빠른작업", "3분이상", "효과음", "보컬 곡 작곡"],
    song: {
      id: "3",
      title: "다른음악",
      cover_url:
        "https://papers.co/wallpaper/papers.co-am19-tycho-art-music-album-cover-illust-simple-white-40-wallpaper.jpg",
      song_url: "https://html5tutorial.info/media/vincent.mp3",
      isPlaying: false,
      isLike: false,
    },
  },
  {
    id: "4",
    name: "Sia",
    introduction: "몇 번을 말해도 모자랄 준비된 음악가",
    profile_url:
      "https://images.unsplash.com/photo-1474978528675-4a50a4508dc3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    tags: ["스포츠", "기술", "게임", "시즌"],
    likes: 777,
    features: ["빠른작업", "3분이상", "효과음", "보컬 곡 작곡"],
    song: {
      id: "4",
      title: "horse",
      cover_url:
        "https://freight.cargo.site/t/original/i/a22da87abfa5c1e719a8d2287c6b820a4438cb9e7bd8e19c03cc4c966fb25958/AWA-PACKSHOT.jpg",
      song_url: "https://www.w3schools.com/html/horse.ogg",
      isPlaying: false,
      isLike: false,
    },
  },
  {
    id: "5",
    name: "박문치",
    introduction: "인디 신의 깜짝 스타 케이팝 신에도 두둥등장",
    profile_url:
      "https://images.unsplash.com/photo-1526313199968-70e399ffe791?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    tags: ["스포츠", "기술", "게임", "시즌"],
    likes: 777,
    features: ["빠른작업", "3분이상", "효과음", "보컬 곡 작곡"],
    song: {
      id: "5",
      title: "tuna",
      cover_url:
        "https://post-phinf.pstatic.net/MjAxOTA4MDJfMTMg/MDAxNTY0NzE4NzAwOTA5.tn4HF1zjhfl6_aHxlR7asab1KXtzqAr9cdtE1N34esUg.5Mh8Nq1dlgLPhjjClwburE2_cSS3KlbKega_nY1Jc0Ig.JPEG/%EB%94%94%EB%85%B8%EB%A7%88%EB%93%9C%ED%95%99%EA%B5%90_%EC%95%84%ED%8A%B8%EB%94%94%EB%A0%89%ED%84%B0_NSH_%EC%95%A8%EB%B2%94_%EC%BB%A4%EB%B2%84_%EB%94%94%EC%9E%90%EC%9D%B8_1.jpg?type=w1200",
      song_url: "http://media.w3.org/2010/07/bunny/04-Death_Becomes_Fur.oga",
      isPlaying: false,
      isLike: false,
    },
  },
  {
    id: "6",
    name: "조영수",
    introduction: "푸른빛 밤을 노래하는 음악가",
    profile_url:
      "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
    tags: ["스포츠", "기술", "게임", "시즌"],
    likes: 777,
    features: ["빠른작업", "3분이상", "효과음", "보컬 곡 작곡"],
    song: {
      id: "6",
      title: "tuna",
      cover_url:
        "https://post-phinf.pstatic.net/MjAxOTA4MDJfMTMg/MDAxNTY0NzE4NzAwOTA5.tn4HF1zjhfl6_aHxlR7asab1KXtzqAr9cdtE1N34esUg.5Mh8Nq1dlgLPhjjClwburE2_cSS3KlbKega_nY1Jc0Ig.JPEG/%EB%94%94%EB%85%B8%EB%A7%88%EB%93%9C%ED%95%99%EA%B5%90_%EC%95%84%ED%8A%B8%EB%94%94%EB%A0%89%ED%84%B0_NSH_%EC%95%A8%EB%B2%94_%EC%BB%A4%EB%B2%84_%EB%94%94%EC%9E%90%EC%9D%B8_1.jpg?type=w1200",
      song_url: "http://media.w3.org/2010/07/bunny/04-Death_Becomes_Fur.oga",
      isPlaying: false,
      isLike: false,
    },
  },
  {
    id: "7",
    name: "비트의 마술사",
    introduction: "다작보다 명작을 남기는 비트의 마술사",
    profile_url:
      "https://images.unsplash.com/photo-1520932767681-47fc69dd54e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    tags: ["스포츠", "기술", "게임", "시즌"],
    likes: 777,
    features: ["빠른작업", "3분이상", "효과음", "보컬 곡 작곡"],
    song: {
      id: "7",
      title: "tuna",
      cover_url:
        "https://post-phinf.pstatic.net/MjAxOTA4MDJfMTMg/MDAxNTY0NzE4NzAwOTA5.tn4HF1zjhfl6_aHxlR7asab1KXtzqAr9cdtE1N34esUg.5Mh8Nq1dlgLPhjjClwburE2_cSS3KlbKega_nY1Jc0Ig.JPEG/%EB%94%94%EB%85%B8%EB%A7%88%EB%93%9C%ED%95%99%EA%B5%90_%EC%95%84%ED%8A%B8%EB%94%94%EB%A0%89%ED%84%B0_NSH_%EC%95%A8%EB%B2%94_%EC%BB%A4%EB%B2%84_%EB%94%94%EC%9E%90%EC%9D%B8_1.jpg?type=w1200",
      song_url: "http://media.w3.org/2010/07/bunny/04-Death_Becomes_Fur.oga",
      isPlaying: false,
      isLike: false,
    },
  },
  {
    id: "8",
    name: "Kehlani",
    introduction: "SM의 숨은 실력자",
    profile_url:
      "https://images.unsplash.com/photo-1519648023493-d82b5f8d7b8a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    tags: ["스포츠", "기술", "게임", "시즌"],
    likes: 777,
    features: ["빠른작업", "3분이상", "효과음", "보컬 곡 작곡"],
    song: {
      id: "8",
      title: "tuna",
      cover_url:
        "https://post-phinf.pstatic.net/MjAxOTA4MDJfMTMg/MDAxNTY0NzE4NzAwOTA5.tn4HF1zjhfl6_aHxlR7asab1KXtzqAr9cdtE1N34esUg.5Mh8Nq1dlgLPhjjClwburE2_cSS3KlbKega_nY1Jc0Ig.JPEG/%EB%94%94%EB%85%B8%EB%A7%88%EB%93%9C%ED%95%99%EA%B5%90_%EC%95%84%ED%8A%B8%EB%94%94%EB%A0%89%ED%84%B0_NSH_%EC%95%A8%EB%B2%94_%EC%BB%A4%EB%B2%84_%EB%94%94%EC%9E%90%EC%9D%B8_1.jpg?type=w1200",
      song_url: "http://media.w3.org/2010/07/bunny/04-Death_Becomes_Fur.oga",
      isPlaying: false,
      isLike: false,
    },
  },
  {
    id: "9",
    name: "마약왕",
    introduction: "내가 하고 싶은 음악을 합니다.",
    profile_url:
      "https://i.pinimg.com/736x/b3/0f/a8/b30fa894137c0254d47922a20e35d32c.jpg",
    tags: ["스포츠", "기술", "게임", "시즌"],
    likes: 777,
    features: ["빠른작업", "3분이상", "효과음", "보컬 곡 작곡"],
    song: {
      id: "9",
      title: "Death_Becomes_Fur",
      cover_url:
        "https://post-phinf.pstatic.net/MjAxOTA4MDJfMTMg/MDAxNTY0NzE4NzAwOTA5.tn4HF1zjhfl6_aHxlR7asab1KXtzqAr9cdtE1N34esUg.5Mh8Nq1dlgLPhjjClwburE2_cSS3KlbKega_nY1Jc0Ig.JPEG/%EB%94%94%EB%85%B8%EB%A7%88%EB%93%9C%ED%95%99%EA%B5%90_%EC%95%84%ED%8A%B8%EB%94%94%EB%A0%89%ED%84%B0_NSH_%EC%95%A8%EB%B2%94_%EC%BB%A4%EB%B2%84_%EB%94%94%EC%9E%90%EC%9D%B8_1.jpg?type=w1200",
      song_url: "http://media.w3.org/2010/07/bunny/04-Death_Becomes_Fur.oga",
      isPlaying: false,
      isLike: false,
    },
  },
  {
    id: "10",
    name: "Phillies Basement",
    introduction: "큐브가 배출한 킥 장인",
    profile_url:
      "https://images.unsplash.com/photo-1531256456869-ce942a665e80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
    tags: ["스포츠", "기술", "게임", "시즌"],
    likes: 777,
    features: ["빠른작업", "3분이상", "효과음", "보컬 곡 작곡"],
    song: {
      id: "10",
      title: "효과음",
      cover_url:
        "https://post-phinf.pstatic.net/MjAxOTA4MDJfMTMg/MDAxNTY0NzE4NzAwOTA5.tn4HF1zjhfl6_aHxlR7asab1KXtzqAr9cdtE1N34esUg.5Mh8Nq1dlgLPhjjClwburE2_cSS3KlbKega_nY1Jc0Ig.JPEG/%EB%94%94%EB%85%B8%EB%A7%88%EB%93%9C%ED%95%99%EA%B5%90_%EC%95%84%ED%8A%B8%EB%94%94%EB%A0%89%ED%84%B0_NSH_%EC%95%A8%EB%B2%94_%EC%BB%A4%EB%B2%84_%EB%94%94%EC%9E%90%EC%9D%B8_1.jpg?type=w1200",
      song_url: "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3",
      isPlaying: false,
      isLike: false,
    },
  },
  {
    id: "11",
    name: "And we go",
    introduction: "이미 한국이 좁은 케이팝스타",
    profile_url:
      "https://images.unsplash.com/photo-1520635360276-79f3dbd809f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
    tags: ["스포츠", "기술", "게임", "시즌"],
    likes: 777,
    features: ["빠른작업", "3분이상", "효과음", "보컬 곡 작곡"],
    song: {
      id: "11",
      title: "다른음악",
      cover_url:
        "https://post-phinf.pstatic.net/MjAxOTA4MDJfMTMg/MDAxNTY0NzE4NzAwOTA5.tn4HF1zjhfl6_aHxlR7asab1KXtzqAr9cdtE1N34esUg.5Mh8Nq1dlgLPhjjClwburE2_cSS3KlbKega_nY1Jc0Ig.JPEG/%EB%94%94%EB%85%B8%EB%A7%88%EB%93%9C%ED%95%99%EA%B5%90_%EC%95%84%ED%8A%B8%EB%94%94%EB%A0%89%ED%84%B0_NSH_%EC%95%A8%EB%B2%94_%EC%BB%A4%EB%B2%84_%EB%94%94%EC%9E%90%EC%9D%B8_1.jpg?type=w1200",
      song_url: "https://html5tutorial.info/media/vincent.mp3",
      isPlaying: false,
      isLike: false,
    },
  },
  {
    id: "12",
    name: "Sia",
    introduction: "몇 번을 말해도 모자랄 준비된 음악가",
    profile_url:
      "https://images.unsplash.com/photo-1520635360276-79f3dbd809f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
    tags: ["스포츠", "기술", "게임", "시즌"],
    likes: 777,
    features: ["빠른작업", "3분이상", "효과음", "보컬 곡 작곡"],
    song: {
      id: "12",
      title: "horse",
      cover_url:
        "https://post-phinf.pstatic.net/MjAxOTA4MDJfMTMg/MDAxNTY0NzE4NzAwOTA5.tn4HF1zjhfl6_aHxlR7asab1KXtzqAr9cdtE1N34esUg.5Mh8Nq1dlgLPhjjClwburE2_cSS3KlbKega_nY1Jc0Ig.JPEG/%EB%94%94%EB%85%B8%EB%A7%88%EB%93%9C%ED%95%99%EA%B5%90_%EC%95%84%ED%8A%B8%EB%94%94%EB%A0%89%ED%84%B0_NSH_%EC%95%A8%EB%B2%94_%EC%BB%A4%EB%B2%84_%EB%94%94%EC%9E%90%EC%9D%B8_1.jpg?type=w1200",
      song_url: "https://www.w3schools.com/html/horse.ogg",
      isPlaying: false,
      isLike: false,
    },
  },
  {
    id: "13",
    name: "박문치",
    introduction: "인디 신의 깜짝 스타 케이팝 신에도 두둥등장",
    profile_url:
      "https://images.unsplash.com/photo-1533975022683-50b01a696767?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=678&q=80",
    tags: ["스포츠", "기술", "게임", "시즌"],
    likes: 777,
    features: ["빠른작업", "3분이상", "효과음", "보컬 곡 작곡"],
    song: {
      id: "13",
      title: "tuna",
      cover_url:
        "https://post-phinf.pstatic.net/MjAxOTA4MDJfMTMg/MDAxNTY0NzE4NzAwOTA5.tn4HF1zjhfl6_aHxlR7asab1KXtzqAr9cdtE1N34esUg.5Mh8Nq1dlgLPhjjClwburE2_cSS3KlbKega_nY1Jc0Ig.JPEG/%EB%94%94%EB%85%B8%EB%A7%88%EB%93%9C%ED%95%99%EA%B5%90_%EC%95%84%ED%8A%B8%EB%94%94%EB%A0%89%ED%84%B0_NSH_%EC%95%A8%EB%B2%94_%EC%BB%A4%EB%B2%84_%EB%94%94%EC%9E%90%EC%9D%B8_1.jpg?type=w1200",
      song_url: "http://media.w3.org/2010/07/bunny/04-Death_Becomes_Fur.oga",
      isPlaying: false,
      isLike: false,
    },
  },
  {
    id: "14",
    name: "조영수",
    introduction: "푸른빛 밤을 노래하는 음악가",
    profile_url:
      "https://images.unsplash.com/photo-1487309078313-fad80c3ec1e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    tags: ["스포츠", "기술", "게임", "시즌"],
    likes: 777,
    features: ["빠른작업", "3분이상", "효과음", "보컬 곡 작곡"],
    song: {
      id: "14",
      title: "tuna",
      cover_url:
        "https://post-phinf.pstatic.net/MjAxOTA4MDJfMTMg/MDAxNTY0NzE4NzAwOTA5.tn4HF1zjhfl6_aHxlR7asab1KXtzqAr9cdtE1N34esUg.5Mh8Nq1dlgLPhjjClwburE2_cSS3KlbKega_nY1Jc0Ig.JPEG/%EB%94%94%EB%85%B8%EB%A7%88%EB%93%9C%ED%95%99%EA%B5%90_%EC%95%84%ED%8A%B8%EB%94%94%EB%A0%89%ED%84%B0_NSH_%EC%95%A8%EB%B2%94_%EC%BB%A4%EB%B2%84_%EB%94%94%EC%9E%90%EC%9D%B8_1.jpg?type=w1200",
      song_url: "http://media.w3.org/2010/07/bunny/04-Death_Becomes_Fur.oga",
      isPlaying: false,
      isLike: false,
    },
  },
  {
    id: "15",
    name: "비트의 마술사",
    introduction: "다작보다 명작을 남기는 비트의 마술사",
    profile_url:
      "https://i.pinimg.com/736x/b3/0f/a8/b30fa894137c0254d47922a20e35d32c.jpg",
    tags: ["스포츠", "기술", "게임", "시즌"],
    likes: 777,
    features: ["빠른작업", "3분이상", "효과음", "보컬 곡 작곡"],
    song: {
      id: "15",
      title: "tuna",
      cover_url:
        "https://post-phinf.pstatic.net/MjAxOTA4MDJfMTMg/MDAxNTY0NzE4NzAwOTA5.tn4HF1zjhfl6_aHxlR7asab1KXtzqAr9cdtE1N34esUg.5Mh8Nq1dlgLPhjjClwburE2_cSS3KlbKega_nY1Jc0Ig.JPEG/%EB%94%94%EB%85%B8%EB%A7%88%EB%93%9C%ED%95%99%EA%B5%90_%EC%95%84%ED%8A%B8%EB%94%94%EB%A0%89%ED%84%B0_NSH_%EC%95%A8%EB%B2%94_%EC%BB%A4%EB%B2%84_%EB%94%94%EC%9E%90%EC%9D%B8_1.jpg?type=w1200",
      song_url: "http://media.w3.org/2010/07/bunny/04-Death_Becomes_Fur.oga",
      isPlaying: false,
      isLike: false,
    },
  },
  {
    id: "16",
    name: "Kehlani",
    introduction: "SM의 숨은 실력자",
    profile_url:
      "https://i.pinimg.com/736x/b3/0f/a8/b30fa894137c0254d47922a20e35d32c.jpg",
    tags: ["스포츠", "기술", "게임", "시즌"],
    likes: 777,
    features: ["빠른작업", "3분이상", "효과음", "보컬 곡 작곡"],
    song: {
      id: "16",
      title: "tuna",
      cover_url:
        "https://post-phinf.pstatic.net/MjAxOTA4MDJfMTMg/MDAxNTY0NzE4NzAwOTA5.tn4HF1zjhfl6_aHxlR7asab1KXtzqAr9cdtE1N34esUg.5Mh8Nq1dlgLPhjjClwburE2_cSS3KlbKega_nY1Jc0Ig.JPEG/%EB%94%94%EB%85%B8%EB%A7%88%EB%93%9C%ED%95%99%EA%B5%90_%EC%95%84%ED%8A%B8%EB%94%94%EB%A0%89%ED%84%B0_NSH_%EC%95%A8%EB%B2%94_%EC%BB%A4%EB%B2%84_%EB%94%94%EC%9E%90%EC%9D%B8_1.jpg?type=w1200",
      song_url: "http://media.w3.org/2010/07/bunny/04-Death_Becomes_Fur.oga",
      isPlaying: false,
      isLike: false,
    },
  },
];

const defaultBeforeList: Before[] = [
  {
    id: "1",
    profile_url:
      "https://i.pinimg.com/736x/b3/0f/a8/b30fa894137c0254d47922a20e35d32c.jpg",
    name: "dorai",
    enrollDate: "2018-12-28",
    status: "0",
    features: "선물/뉴에이지/사랑/10초~미정/2018년12월30일/3만원 ~ 가격제시",
  },
  {
    id: "2",
    profile_url:
      "https://i.pinimg.com/736x/b3/0f/a8/b30fa894137c0254d47922a20e35d32c.jpg",
    name: "타코",
    enrollDate: "2018-01-01",
    status: "1",
    features: "선물/뉴에이지/사랑/10초~미정/2018년12월30일/5만원 ~ 가격제시",
  },
  {
    id: "3",
    profile_url:
      "https://i.pinimg.com/736x/b3/0f/a8/b30fa894137c0254d47922a20e35d32c.jpg",
    name: "dorai",
    enrollDate: "2018-12-28",
    status: "0",
    features: "선물/뉴에이지/사랑/10초~미정/2018년12월30일/3만원 ~ 가격제시",
  },
  {
    id: "4",
    profile_url:
      "https://i.pinimg.com/736x/b3/0f/a8/b30fa894137c0254d47922a20e35d32c.jpg",
    name: "타코",
    enrollDate: "2018-01-01",
    status: "1",
    features: "선물/뉴에이지/사랑/10초~미정/2018년12월30일/5만원 ~ 가격제시",
  },
  {
    id: "5",
    profile_url:
      "https://i.pinimg.com/736x/b3/0f/a8/b30fa894137c0254d47922a20e35d32c.jpg",
    name: "dorai",
    enrollDate: "2018-12-28",
    status: "0",
    features: "선물/뉴에이지/사랑/10초~미정/2018년12월30일/3만원 ~ 가격제시",
  },
  {
    id: "6",
    profile_url:
      "https://i.pinimg.com/736x/b3/0f/a8/b30fa894137c0254d47922a20e35d32c.jpg",
    name: "타코",
    enrollDate: "2018-01-01",
    status: "1",
    features: "선물/뉴에이지/사랑/10초~미정/2018년12월30일/5만원 ~ 가격제시",
  },
  {
    id: "7",
    profile_url:
      "https://i.pinimg.com/736x/b3/0f/a8/b30fa894137c0254d47922a20e35d32c.jpg",
    name: "dorai",
    enrollDate: "2018-12-28",
    status: "0",
    features: "선물/뉴에이지/사랑/10초~미정/2018년12월30일/3만원 ~ 가격제시",
  },
  {
    id: "8",
    profile_url:
      "https://i.pinimg.com/736x/b3/0f/a8/b30fa894137c0254d47922a20e35d32c.jpg",
    name: "타코",
    enrollDate: "2018-01-01",
    status: "1",
    features: "선물/뉴에이지/사랑/10초~미정/2018년12월30일/5만원 ~ 가격제시",
  },
];
type ActionType = {
  type:
    | "INIT_DATA"
    | "NEXT_MUSICIANS"
    | "NEXT_BEFORE"
    | "TOGGLE_LIKE"
    | "SELECT_SONG"
    | "PLAY_SONG"
    | "STOP_SONG";
  payload?: any;
};
interface UserDataInterface {
  userData: UserData;
  dispatch?: React.Dispatch<ActionType>;
}
const defaultData: UserData = {
  musicianList: {
    list: defaultMusicianList,
    display: [...defaultMusicianList.slice(0, 4)],
    page: 0,
    end: 16,
  },
  userInfo: { name: "", email: "" },
  reqList: {
    name: "",
    enrollDate: "",
    forUse: "",
    genre: "",
    atmo: "",
    length: "",
    finalDate: "",
    pay: "",
  },
  beforeList: {
    list: defaultBeforeList,
    display: [...defaultBeforeList.slice(0, 2)],
    page: 0,
    end: 8,
  },
};
export const UserContext = React.createContext<UserDataInterface>({
  userData: defaultData,
});

const UserStore = ({ children }: { children: React.ReactElement }) => {
  const [userData, dispatch] = useReducer(reducer, defaultData);
  /*
      payload: {
        musicianList: defaultMusicianList,
        useInfo: {

        }
        beforeList: { list: defaultBeforeList, display: [], page: 0, end: 8 },
      },
    });
  }, []);*/

  /*useEffect(() => {
    dispatch({
      type: "INIT_DATA",
      /*payload: {
        /*defaultMusicianList: defaultMusicianList,
        defaultBeforeList: defaultBeforeList,*/
  /*musicianList: defaultMusicianList,
        beforeList: defaultBeforeList,
      },*/

  return (
    <UserContext.Provider
      value={{
        userData,
        dispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserStore;
